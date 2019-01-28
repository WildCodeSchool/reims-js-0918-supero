import React, { Component, Fragment } from "react";
import Header from "./Header";
import Conversation from "./Conversation";
import { Link } from "react-router-dom";
import axios from "axios";
import ComeFromTransparent from "./Animations/ComeFromTransparent";

class MyConversations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    };
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.getAllConversations();
  }

  getAllConversations = () => {
    axios
      .get(
        `http://localhost:3001/conversations/${this.props.match.params.userID}`,
        {
          headers: {
            accept: "application/json",
            authorization: "Bearer " + localStorage.getItem("superoUser")
          }
        }
      )
      .then(res => {
        this.setState({ conversations: res.data });
      });
  };

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div style={{ paddingBottom: "10px" }}>
          <Header title="Mes conversations" goBack={this.goBack} />
        </div>
        <Fragment>
          <ComeFromTransparent delay={300}>
            <div style={{ paddingTop: "70px" }} />
            {this.state.conversations.map((activity, index) => (
              <Link
                className="conversation_link"
                key={index}
                to={`/Chat/${activity.activity_id}`}
              >
                <Conversation key={index} {...activity} />
              </Link>
            ))}
          </ComeFromTransparent>
        </Fragment>
      </div>
    );
  }
}

export default MyConversations;
