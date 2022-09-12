import * as ActionTypes from "../ActionType"
import { db, storage } from "../../../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore"; 
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const Categorydata = (data) => async (dispatch) => {
  console.log(data);
  try {
    let data = []
    const querySnapshot = await getDocs(collection(db, "categorys"));

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
      dispatch({ type: ActionTypes.GET_CATEGORY, payload: data })
      // console.log(`${doc.id} => ${doc.data()}`);
    });
    
  } catch(error) {
    dispatch(errorCategory(error.message))
      console.log(error.message);
  }
}

export const addCategory = (data) => (dispatch) => {
  try {

    //  const docRef = await addDoc(collection(db, " doctors"),{id:docRef.id, ...data});
    const rendomName = Math.floor(Math.random() * 10000000).toString();
    const doctorsRef = ref(storage, 'categorys/' + rendomName);

    uploadBytes(doctorsRef, data.file)
      .then((snapshot) => {
        // console.log('Uploaded a blob or file!');
        getDownloadURL(snapshot.ref)
          .then(async (url) => {
            const docRef = await addDoc(collection(db, "categorys"), {
              name: data.name,
              url: url,
            });
            dispatch({
              type: ActionTypes.ADD_CATEGORY, payload: {
                id: docRef.id,
                name: data.name,
                url: url,
              }
            })
          })
      });
   
  } catch (error) {
    dispatch(errorCategory(error.message));
    // console.error("Error adding document: ", error);
  }
}



export const errorCategory = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_CATEGORY, payload: error })
}