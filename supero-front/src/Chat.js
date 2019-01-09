import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import { Button, Form, FormGroup, Input } from "reactstrap";
import io from "socket.io-client";
import "./Chat.css";
import { toastr } from "react-redux-toastr";
import groupMessagesByUser from "./groupMessagesByUser";

//make connection
let socket = null;
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
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
    this.getMessagesFromAPI();
  }

  getMessagesFromAPI() {
    axios
      .get(`http://localhost:3001/messages/${this.props.match.params.roomID}`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.setState(
          { messages: res.data },
          console.log(groupMessagesByUser(res.data))
        );
      });
  }

  //emit message
  sendMessage() {
    const newMessage = {
      activity_id: this.props.match.params.roomID,
      user_id: this.props.connectedUser.user_id,
      message: this.state.message
    };
    axios
      .post("http://localhost:3001/messages", newMessage, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        if (res.data.toastType === "error") {
          toastr.error("Erreur", res.data.message);
        }
      });
    socket.emit("new_message", {
      username: this.props.connectedUser.user_pseudo,
      message: this.state.message
    });
  }

  handleTyping(event) {
    this.setState({ message: event.target.value });
  }

  connection() {
    const roomID = { ...this.props.match.params };
    socket = io.connect("http://localhost:3001");
    socket.on("connect", function() {
      // Connected, let's sign-up for to receive messages for this room
      socket.emit("room", roomID);
    });
    //listen on new_message
    socket.on("new_message", data => {
      const newMessage = {
        message: data.message,
        user_pseudo: data.username
      };
      this.setState({ messages: [...this.state.messages, newMessage] });
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
          <div className="messagesContainer">
            {this.state.messages.map(message => (
              <p
                style={{
                  textAlign:
                    message.user_id !== this.props.connectedUser.user_id
                      ? "left"
                      : "right"
                }}
              >
                {message.user_pseudo}: {message.message}
              </p>
            ))}
          </div>
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
