import { GETCONTACT } from "../types/contactactionstypes";
import axios from "axios";

export const getcontact = () => async (dispatch) => {
  try {
    const res = await axios.get("/cantacts/getcontact");

    dispatch({
      type: GETCONTACT,
      payload: res.data,
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
export const addcontact = (newcontact) => async (dispatch) => {
  try {
    const res = await axios.post("/cantacts/addcontact", newcontact);

    dispatch(getcontact());
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
