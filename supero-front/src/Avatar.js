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
    const url = `http://localhost:3001/Avatar/${
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

          <Row>
            <Col xs="12">
              <h3 className="text-center mb-5">Avatar</h3>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs="12">
              <FormGroup>
                <Input type="file" onChange={this.onChange} />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs="6" className="d-flex justify-content-center">
              <Link to="/SignInForm">
                <Button disabled={this.state.enable} className="button">
                  Plus-tard
                </Button>
              </Link>
            </Col>
            <Col xs="6" className="d-flex justify-content-center">
              <Button
                className="button"
                disabled={!this.state.enable}
                type="submit"
              >
                Upload
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Avatar;
