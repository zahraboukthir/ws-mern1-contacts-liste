import React, { useEffect } from "react";

import { getcontact } from "./../redux/actions/contactactions";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "./ContactCard";
const ListContacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontact());
  }, []);
  const contacts = useSelector((state) => state.contacts);
  // console.log(contacts);
  return (
    <div>
      <h1>ListContacts</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {contacts.map((el, i) => (
          <ContactCard el={el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ListContacts;
