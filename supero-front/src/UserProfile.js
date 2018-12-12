import React from "react";
import { DateTime } from "luxon";
import "./UserProfile.css";
import Header from "./Header";
import axios from "axios";
import Loading from "./Loading";
import DisplayDifficultyIcon from "./DisplayDifficultyIcon";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = { user: {} };
  }
  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    const activity_id = 2;

    axios
      .get(`http://localhost:3001/users/${activity_id}`)
      .then(res => this.setState({ user: res.data[0] }));
  }

  render() {
    return !this.state.user.user_firstname ? (
      <Loading />
    ) : (
      <div className="user_profile" style={{ height: "100vh" }}>
        <Header title="Profil" goBack={this.goBack} />

        <div
          style={{
            marginBottom: "-40px",
            justifyContent: "center",
            flexWrap: "wrap",
            display: "flex"
          }}
        >
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              maxHeight: "220px"
            }}
          >
            <img
              style={{ width: "100%" }}
              src={process.env.PUBLIC_URL + `/images/running.jpg`}
              alt="sport"
              align="bottom"
            />
          </div>
          <div className="avatar rounded-circle">
            {this.state.user.user_photo !== "photo" ? (
              <img
                src={this.state.user.user_photo}
                alt="avatar"
                align="bottom"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + `/images/avatar_fabien.jpeg`}
                alt="avatar"
                align="bottom"
              />
            )}
          </div>
        </div>
        <div className="user_name">
          <h2>
            {this.state.user.user_firstname}{" "}
            <span>{this.state.user.user_lastname}</span>
          </h2>
          <h4 className="user_age">
            {2018 - DateTime.fromISO(this.state.user.user_birthdate).c.year} ans
          </h4>
        </div>
        <div className="user_detail">
          <div>
            <h5>Niveau</h5>
            <span className="level">
              <DisplayDifficultyIcon difficulty={this.state.user.user_level} />
            </span>
          </div>
          <div>
            <h5>Activités</h5>
            <p>
              Organisés : <span>10</span> | Participés : <span>7</span>
            </p>
          </div>
        </div>
        <div className="user_about">{this.state.user.user_about}</div>
        <button className="send_message">Envoyer un message</button>
      </div>
    );
  }
}
export default UserProfile;

// user_about:
// "Petite description OKLM"
// user_birthdate:
// "1990-08-08T22:00:00.000Z"
// user_email:
// "wsdrtyuik@gmail.com"
// user_firstname:
// "Fabien"
// user_gender:
// null
// user_id:
// 2
// user_lastname:
// "Raymond"
// user_level:
// 5
// user_password:
// "sdfghjk"
// user_photo:
// "photo"
// user_pseudo:
// "vortex"
