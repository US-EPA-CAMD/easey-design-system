import React from "react";

import "./Footer.scss";

const Footer = props => {
    const { published_version } = props.footer;

  return (
    <div className="main-footer">
      <h2>Footer Component</h2>
        <p>{published_version}</p>
    </div>
  );
};

export default Footer;
