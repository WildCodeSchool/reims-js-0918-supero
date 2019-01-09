import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import { Button, Form, FormGroup, Input } from "reactstrap";
import io from "socket.io-client";
import "./Chat.css";
import { toastr } from "react-redux-toastr";

//make connection
let socket = null;
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
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
        this.setState({ messages: res.data });
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
      message: this.state.message,
      user_photo: this.props.connectedUser.user_photo,
      user_id: this.props.connectedUser.user_id
    });
  }

  handleTyping(event) {
    this.setState({ message: event.target.value });
    if (event.key === "Enter") {
      this.sendMessage();
    }
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
      console.log(data);
      const newMessage = {
        message: data.message,
        user_pseudo: data.username,
        user_photo: data.user_photo,
        user_id: data.user_id
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
            {this.state.messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  marginBottom: "15px",
                  justifyContent:
                    message.user_id !== this.props.connectedUser.user_id
                      ? "flex-start"
                      : "flex-end"
                }}
              >
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    padding: "10px 15px",
                    borderRadius: "20px",
                    borderBottomLeftRadius:
                      message.user_id !== this.props.connectedUser.user_id
                        ? "0"
                        : "20px",
                    borderBottomRightRadius:
                      message.user_id !== this.props.connectedUser.user_id
                        ? "20px"
                        : "0"
                  }}
                >
                  <div
                    className="user_photo"
                    style={{
                      width: "25px",
                      height: "25px",
                      backgroundSize: "cover",
                      borderRadius: "50px",
                      overflow: "hidden",
                      objectFit: "cover",
                      marginRight: "10px"
                    }}
                  >
                    <img
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%"
                      }}
                      src={`http://localhost:3001/images/${message.user_photo}`}
                      alt="avatar"
                      align="bottom"
                    />
                  </div>
                  <p
                    style={{
                      marginBottom: "0",
                      textAlign:
                        message.user_id !== this.props.connectedUser.user_id
                          ? "left"
                          : "right"
                    }}
                  >
                    {this.props.connectedUser.user_id !== message.user_id &&
                      message.user_pseudo}{" "}
                    |{" "}
                    <span style={{ fontWeight: "300" }}>{message.message}</span>
                  </p>
                </span>
              </div>
            ))}
          </div>
          <Form className="sendMessage">
            <FormGroup>
              <Input
                style={{
                  borderRadius: "41px",
                  color: "white !important",
                  border: "1px solid rgba(255, 255, 255, 0.4) !important",
                  backgroundColor: "rgba(255, 255, 255, 0.1) !important"
                }}
                onChange={event => this.handleTyping(event)}
                type="text"
                value={this.state.message}
                placeholder="Tapez votre message"
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
