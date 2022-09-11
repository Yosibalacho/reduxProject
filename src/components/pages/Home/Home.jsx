import "./Home.css";
import React from "react";
import { connect } from "react-redux";
import MyForm from "../My-Form/My-Form";
const mapStateToProps = (state) => {
  return { users: state.users };
};
function Home(user) {
  return (
    <div className="home">
      <h1>Home</h1>
      <MyForm props={user} />
    </div>
  );
}

export default connect(mapStateToProps)(Home);
