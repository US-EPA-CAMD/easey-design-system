import React from "react";
import { Logo, Footer as TWFooter, SocialLinks } from "@trussworks/react-uswds";

import "./Footer.scss";
import FooterMenu from "../FooterMenu/FooterMenu";
import config from "../../config";

const Footer = () => {
  return (
    <div className="main-footer">
      <TWFooter
        size="large"
        secondary={
          <div className="grid-row grid-gap desktop:width-full epa-footer-secondary">
            <Logo
              size="medium"
              image={
                <img
                  className="usa-footer__logo-img"
                  alt="img alt text"
                  src={`${process.env.PUBLIC_URL}/images/epaSeal.svg`}
                />
              }
              heading={
                <h2 className="usa-footer__logo-heading padding-top-3 text-left">
                  <p className="content margin-0">
                    United States Environmental Protection Agency
                  </p>
                  <p className="text-normal font-alt-xs margin-top-0 padding-bottom-1">
                    {config.app.version} published {config.app.published}
                  </p>
                </h2>
              }
            />
            <div className="usa-footer__contact-links mobile-lg:grid-col-6 padding-top-5">
              <SocialLinks
                links={[
                  <>
                    <FooterMenu />
                  </>,
                ]}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Footer;
