import * as ActionTypes from "../ActionType"

export const Categorydata = () => async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "doctors"));

    let data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
      dispatch({ type: ActionTypes.GET_CATEGORY, payload: data })
    });
}

export const addCategory = () => (dispatch) => {

}