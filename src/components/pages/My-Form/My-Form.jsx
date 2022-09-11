import "./My-Form.css";
import React, { useState } from "react";
import { addUser } from "../../../store/actions/users-actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (userObj) => dispatch(addUser(userObj)),
});
function MyForm(props) {
  const [user, setUser] = useState({});
  
  const changeInput = (e) => {
    user[e.target.name] = e.target.value;
  };
  return (
    <div className="my-form">
      <h1>My-Form</h1>
      <label htmlFor="">first name</label>
      <input  defaultValue={user.fName} name="fName" onChange={changeInput} type="text" />
      <label htmlFor="">last name</label>
      <input defaultValue={user.lName} name="lName" onChange={changeInput} type="text" />
      <label htmlFor="">age</label>
      <input defaultValue={user.age} name="age" onChange={changeInput} type="number" />
      <label htmlFor="">email</label>
      <input defaultValue={user.email} name="email" onChange={changeInput} type="email" />
      <button onClick={() => props.addNewUser(user)}>add</button>
    </div>
  );
}
export default connect(null, mapDispatchToProps)(MyForm);
