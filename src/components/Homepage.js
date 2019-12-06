import React, { Component } from "react";
import { connect } from "react-redux";

//components
import AddTask from "./Tasks/AddTask";
import List from "./Tasks/TasksList";
class HomePage extends Component {
  render() {
    return (
      <div className="main">
        <section className="addBackground">
          <div className="header-container">
            <div className="row">
              <div className="col">
                <div className="text-center mt-5 ">
                  <h1
                    style={{
                      color: "white",
                      fontFamily: "Futura"
                    }}
                  >
                    Checker
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center mt-5">
            <AddTask />
            <List />
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
