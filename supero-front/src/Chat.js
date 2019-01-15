import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import { Button, Form, FormGroup, Input } from "reactstrap";
import io from "socket.io-client";
import "./Chat.css";
import { toastr } from "react-redux-toastr";
import formatDate from "./formatDate.js";

//make connection
let socket = null;
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: { activity_title: "", activity_start_time: "25/12/2018" },
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

  scrollToBottom = () => {
    this.messagesContainer.scrollTop === 0
      ? (this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight)
      : this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.connection();
    this.getUserConnected();
    this.getMessagesFromAPI();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  getMessagesFromAPI() {
    axios
      .get(`${process.env.REACT_APP_API}/messages/${this.props.match.params.roomID}`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.setState({ ...res.data });
      })
      .then(
        (this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight)
      );
  }

  //emit message
  sendMessage() {
    const newMessage = {
      activity_id: this.props.match.params.roomID,
      user_id: this.props.connectedUser.user_id,
      message: this.state.message
    };
    axios
      .post(`${process.env.REACT_APP_API}/messages`, newMessage, {
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
    this.setState({ message: "" });
  }

  handleTyping(event) {
    this.setState({ message: event.target.value });
    if (event.key === "Enter") {
      this.sendMessage();
    }
  }

  connection() {
    const roomID = { ...this.props.match.params };
    socket = io.connect(`${process.env.REACT_APP_API}`);
    socket.on("connect", function() {
      // Connected, let's sign-up for to receive messages for this room
      socket.emit("room", roomID);
    });
    //listen on new_message
    socket.on("new_message", data => {
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
      .get(`${process.env.REACT_APP_API}/connecteduser`, {
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
          <div
            className="conversationStatus"
            style={{
              position: "fixed",
              top: "100px",
              width: "100%",
              textAlign: "center",
              fontWeight: "300",
              marginBottom: "15px"
            }}
          >
            <h6 style={{ marginBottom: "0" }}>
              {this.state.activity.activity_title}
            </h6>
            <p>{formatDate(this.state.activity.activity_start_time)}</p>
          </div>
          <div
            className="messagesContainer"
            ref={el => {
              this.messagesContainer = el;
            }}
            style={{ marginTop: "75px", height: "64vh", overflowY: "scroll" }}
          >
            {this.state.messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  paddingBottom: "15px",
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
                  {this.props.connectedUser.user_id !== message.user_id && (
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
                        src={`${process.env.REACT_APP_API}/images/${
                          message.user_photo
                        }`}
                        alt="avatar"
                        align="bottom"
                      />
                    </div>
                  )}
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
                      `${message.user_pseudo} | `}
                    <span style={{ fontWeight: "300" }}>{message.message}</span>
                  </p>
                </span>
              </div>
            ))}
            <div
              style={{ float: "left", clear: "both" }}
              ref={el => {
                this.messagesEnd = el;
              }}
            />
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
