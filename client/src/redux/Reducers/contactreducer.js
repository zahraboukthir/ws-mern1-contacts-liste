import { GETCONTACT } from "../types/contactactionstypes";

const initialState = {
  contacts: [],
};

const contactreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETCONTACT:
      return { ...state, contacts: payload };

    default:
      return state;
  }
};
export default contactreducer;
