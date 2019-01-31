import React from "react";
import "./UserProfile.css";
import Header from "./Header";
import axios from "axios";
import Loading from "./Loading";
import {
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import DisplayDifficultyIcon from "./DisplayDifficultyIcon";
import ageCalculation from "./ageCalculation";
import LastFiveActivities from "./LastFiveActivities";
import classnames from "classnames";
import ComeFromTransparent from "./Animations/ComeFromTransparent";
import { Link } from "react-router-dom";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    const user_id = this.props.match.params.id;
    this.getUserActivities(user_id);
    this.props.fetchUserProfile();
    const token = localStorage.getItem("superoUser");
    axios
      .get(`${process.env.REACT_APP_API}/users/${user_id}`, {
        headers: {
          authorization: "Bearer " + token
        }
      })
      .then(res => this.props.viewUserProfile(res.data[0]));
  }

  getUserActivities = user_id => {
    axios
      .get(`${process.env.REACT_APP_API}/userActivities?userId=${user_id}`, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("superoUser")
        }
      })
      .then(res => {
        this.props.getUserActivities(res.data);
      });
  };

  render() {
    return !this.props.userProfile ? (
      <Loading />
    ) : (
      <ComeFromTransparent delay={300}>
        <div
          className="user_profile"
          style={{ minHeight: "100vh", paddingBottom: "20px" }}
        >
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
              <img
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                src={`${process.env.REACT_APP_API}/images/${
                  this.props.userProfile.user_photo
                }`}
                alt="avatar"
                align="bottom"
              />
            </div>
          </div>
          <div className="user_name">
            <h2>
              {this.props.userProfile.user_firstname}{" "}
              <span>{this.props.userProfile.user_lastname}</span>
            </h2>
            <h4 className="user_age">
              {ageCalculation(this.props.userProfile.user_birthdate)} ans
            </h4>
          </div>
          <div className="user_detail">
            <div>
              <h5>Niveau</h5>
              <span className="level">
                <DisplayDifficultyIcon
                  difficulty={this.props.userProfile.user_level}
                />
              </span>
            </div>
            <div>
              <h5>Activités</h5>
              <p>
                Organisées :{" "}
                <span>
                  {this.props.userActivities.created &&
                    this.props.userActivities.created.length}
                </span>{" "}
                | Participées :{" "}
                <span>
                  {this.props.userActivities.participation &&
                    this.props.userActivities.participation.length}
                </span>
              </p>
            </div>
          </div>
          <div className="user_about">{this.props.userProfile.user_about}</div>
          <div className="lastFiveActivities">
            {" "}
            <h5>Dernières activités</h5>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Participées
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Organisées
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    {this.props.userActivities.participation &&
                      this.props.userActivities.participation.length > 0 && (
                        <LastFiveActivities
                          activities={this.props.userActivities.participation}
                        />
                      )}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    {this.props.userActivities.created &&
                      this.props.userActivities.created.length > 0 && (
                        <LastFiveActivities
                          activities={this.props.userActivities.created}
                        />
                      )}
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>

          {this.props.userProfile.user_id ===
            this.props.connectedUser.user_id && (
            <Button className="send_message" tag={Link} to="/MyAccount">
              Modifier mes informations
            </Button>
          )}
        </div>
      </ComeFromTransparent>
    );
  }
}

export default UserProfile;
