import React, { Component } from "react";
import axios, { post } from "axios";
import { toastr } from "react-redux-toastr";
class Avatar extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.file).then(res => {
      if (res.data.toastType !== "error") {
        toastr.success("Succès", res.data.message);
        this.props.history.push("/ActivitiesList");
      } else {
        toastr.error("Erreur", res.data.message);
      }
    });
  }
  onChange(e) {
    this.file = e.target.files[0];
  }
  fileUpload(file) {
    const url = "http://localhost:3001/Avatar/1";
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
      <form onSubmit={this.onFormSubmit}>
        <h3>File Upload</h3>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default Avatar;
