import React, { Component, PropTypes } from "react";
import { reduxForm, Field } from "redux-form";
import axios from "axios";

import Dropzone from "react-dropzone";

const FILE_FIELD_NAME = "files";

const renderDropzoneInput = field => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      {field.meta.touched && field.meta.error && (
        <span className="error">{field.meta.error}</span>
      )}
      {files && Array.isArray(files) && (
        <ul>
          {files.map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

class Avatar extends Component {
  onSubmit(data) {
    const body = new FormData();
    Object.keys(data).forEach(key => {
      body.append(key, data[key]);
    });

    console.info("POST", body, data);
    console.info("This is expected to fail:");
    axios
      .post("http://localhost:8080/restapi/fileupload", body, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  render() {
    const { handleSubmit, reset } = this.props;
    return (
      <form
        style={{ height: "100vh" }}
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <div>
          <label htmlFor={FILE_FIELD_NAME}>Files</label>
          <Field name={FILE_FIELD_NAME} component={renderDropzoneInput} />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "simple"
})(Avatar);
