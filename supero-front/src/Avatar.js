import React, { Component } from "react";
import { Link } from "react-router-dom";
import { post } from "axios";
import { toastr } from "react-redux-toastr";
import {
  Button,
  Container,
  Col,
  Row,
  FormGroup,
  Form,
  Input
} from "reactstrap";
import "./avatar.css";
import ComeFromTransparent from "./Animations/ComeFromTransparent";
import ComeFromLeft from "./Animations/ComeFromLeft";
class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enable: false
    };
    this.file = null;
    this.preview = null;
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.file).then(res => {
      if (res.data.toastType !== "error") {
        toastr.success("Succès", res.data.message);
        this.props.history.push("/SignInForm");
      } else {
        toastr.error("Erreur", res.data.message);
      }
    });
  }
  onChange(e) {
    this.file = e.target.files[0];
    this.preview = URL.createObjectURL(e.target.files[0]);
    this.setState({ enable: true });
  }
  fileUpload(file) {
    const url = `${process.env.REACT_APP_API}/Avatar/${
      this.props.location.state.email
    }`;
    const formData = new FormData();
    formData.append("avatar", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <Container fluid className="avatar-container">
        <Form onSubmit={this.onFormSubmit}>
          <ComeFromTransparent delay={300}>
            <Row>
              <Col xs="12" className="d-flex justify-content-center mb-2">
                {!this.state.enable ? (
                  <i
                    style={{
                      fontSize: "150px",
                      color: "rgba(255, 255, 255,0.5)"
                    }}
                    className="fas fa-user"
                  />
                ) : (
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "150px"
                    }}
                    alt="profile"
                    src={this.preview}
                  />
                )}
              </Col>
            </Row>
          </ComeFromTransparent>
          <ComeFromTransparent delay={300}>
            <Row>
              <Col xs="12">
                <h3 className="text-center mb-5">Avatar</h3>
              </Col>
            </Row>
          </ComeFromTransparent>
          <ComeFromLeft delay={400}>
            <Row className="d-flex justify-content-center mb-2">
              <Col xs="12">
                <FormGroup>
                  <Input type="file" onChange={this.onChange} />
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 300,
                      fontSize: "small"
                    }}
                    className = "ml-1"
                  >
                    Téléchargez une image au format .png, .jpg, .jpeg
                  </p>
                </FormGroup>
              </Col>
            </Row>
          </ComeFromLeft>

          {/* this row is conflicting */}
          <Row>
            <Col xs="12" className="d-flex justify-content-center mb-2 ">
              {!this.state.enable ? (
                <i
                  style={{
                    fontSize: "150px",
                    color: "rgba(255, 255, 255,0.5)"
                  }}
                  className="fas fa-user"
                />
              ) : (
                <img
                  style={{
                    objectFit: "cover",
                    width: "150px",
                    height: "150px",
                    borderRadius: "150px"
                  }}
                  alt="profile"
                  src={this.preview}
                />
              )}
            </Col>
          </Row>

          <Row>
            <Col xs="6" className="d-flex justify-content-center">
              <ComeFromTransparent delay={500}>
                <Link to="/SignInForm">
                  <Button disabled={this.state.enable} className="button">
                    Plus-tard
                  </Button>
                </Link>
              </ComeFromTransparent>
            </Col>

            <Col xs="6" className="d-flex justify-content-center">
              <ComeFromTransparent delay={500}>
                <Button
                  className="button"
                  disabled={!this.state.enable}
                  type="submit"
                >
                  Upload
                </Button>
              </ComeFromTransparent>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Avatar;
