import * as ActionTypes from "../ActionType"
import { db, storage } from "../../../Firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const Categorydata = (data) => async (dispatch) => {
  // console.log(data);
  try {
    let data = []
    const querySnapshot = await getDocs(collection(db, "categorys"));

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
      dispatch({ type: ActionTypes.GET_CATEGORY, payload: data })
      // console.log(`${doc.id} => ${doc.data()}`);
    });

  } catch (error) {
    dispatch(errorCategory(error.message))
    console.log(error.message);
  }
}

export const addCategory = (data) => (dispatch) => {
  console.log(data);
  try {

    //  const docRef = await addDoc(collection(db, " doctors"),{id:docRef.id, ...data});
    const rendomName = Math.floor(Math.random() * 10000000).toString();
    console.log(rendomName);
    const categorysRef = ref(storage, 'categorys/' + rendomName);

    uploadBytes(categorysRef, data.file)
      .then((snapshot) => {
        // console.log('Uploaded a blob or file!');
        getDownloadURL(snapshot.ref)
          .then(async (url) => {
            const docRef = await addDoc(collection(db, "categorys"), {
              name: data.name,
              url: url,
              FileName: rendomName
            });
            dispatch({
              type: ActionTypes.ADD_CATEGORY, payload: {
                id: docRef.id,
                name: data.name,
                url: url,
                FileName: rendomName
              }
            })
          })
      });

  } catch (error) {
    dispatch(errorCategory(error.message));
    // console.error("Error adding document: ", error);
  }
}


export const deletecategory = (data) =>  async (dispatch) => {
  console.log(data);
  try {
    const categorysRef = ref(storage, 'categorys/'+data.FileName);
    // console.log(categorysRef);
    deleteObject(categorysRef).then(async () => {
        await deleteDoc(doc(db, "categorys", data.id));
        dispatch({ type: ActionTypes.DELETE_CATEGORY, payload: data.id })
      }).catch((error) => {
        dispatch(errorCategory(error.message))
      });
  } 
  catch (error) {
    dispatch(errorCategory(error.message))
  }
}

export const editcategory = (data) => async (dispatch) => {
  try {

    const categorysRef = doc(db, "categorys", data.id);

    await updateDoc(categorysRef, {
      name: data.name,
    });
    dispatch({ type: ActionTypes.EDIT_CATEGORY, payload: data })

  } catch (error) {
    dispatch(errorCategory(error.message))
  }
}


export const errorCategory = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_CATEGORY, payload: error })
}