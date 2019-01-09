import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import { Button, Form, FormGroup, Input } from "reactstrap";
import io from "socket.io-client";
import "./Chat.css";

//make connection
let socket = null;
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Test",
      connect: null
    };
    this.handleTyping = this.handleTyping.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    this.connection();
    this.getUserConnected();
  }

  //emit message
  sendMessage() {
    socket.emit("new_message", {
      username: this.props.connectedUser.user_pseudo,
      message: this.state.message
    });
  }

  handleTyping(event) {
    this.setState({ message: event.target.value });
  }

  connection() {
    const chat = document.getElementById("chat");
    const roomID = { ...this.props.match.params };
    socket = io.connect("http://localhost:3001");
    socket.on("connect", function() {
      // Connected, let's sign-up for to receive messages for this room
      socket.emit("room", roomID);
    });
    //listen on new_message
    socket.on("new_message", data => {
      console.log(data.message);
      console.log(data.username);
      const message = document.createElement("p"); // is a node
      message.innerHTML = `${data.username}: ${data.message}`;
      chat.appendChild(message);
    });
  }

  getUserConnected = () => {
    axios
      .get(`http://localhost:3001/connecteduser`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.props.getConnectedUser(res.data);
      });
  };

  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div style={{ paddingBottom: "10px" }}>
          <Header title="Chat" goBack={this.goBack} />
        </div>
        <div
          style={{
            paddingTop: "80px",
            color: "#fff",
            width: "90%",
            margin: "0 auto"
          }}
          id="chat"
        >
          <Form className="sendMessage">
            <FormGroup>
              <Input
                onChange={event => this.handleTyping(event)}
                type="text"
                value={this.state.message}
              />
            </FormGroup>
            <Button onClick={() => this.sendMessage()}>Envoyer</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Chat;
