import React, { Component } from "react";
import { connect } from "react-redux";

import AddTask from "./Tasks/AddTask";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }
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
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => {
    dispatch(fetchTasks());
  }
});
export default connect(null, mapDispatchToProps)(HomePage);
