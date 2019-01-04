import React, { Component, PropTypes } from "react";
class Avatar extends Component {
  render() {
    return (
      <form method="POST" enctype="multipart/form-data" action="/avatar/1">
        <input type="file" name="monfichier" accept="image/png" />
        <button href="/ActivitiesList">envoyer</button>
      </form>
    );
  }
}

export default Avatar;
