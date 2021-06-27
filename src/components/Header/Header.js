import React, { useState } from "react";
import PropTypes from 'prop-types';

import {
  Link,
  Search,
  MegaMenu,  
  GovBanner,
  PrimaryNav,
  NavMenuButton,
  NavDropDownButton,
  Header as USWDSHeader,
} from "@trussworks/react-uswds";

import EnvBanner from "../EnvBanner/EnvBanner";

export const Header = (props) => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(
    props.menuItems.map(() => {
      return false;
    })
  );

  const menuClickHandler = () => {
    const menuButton = document.querySelector('div.usa-navbar button.usa-button');
    const navClose = document.querySelector('button.usa-nav__close');

    if (menuExpanded) {
      navClose.focus();
    }
    else {
      menuButton.focus();
    }

    setMenuExpanded((previous) => !previous);
  }

  const searchHandler = (event) => {
    // *** URI encode the component after trimming to get rid of leading/trailing spaces
    // *** and mitigate any character collision issues during http request with window.open
    const searchTerm = encodeURI(event.target.value.trim());
    window.open(
      `${props.searchUrl}/?querytext=${searchTerm}`,
      "_blank"
    );
    return false;
  };

  const menuTitleClickHandler = (e) => {
    e.stopPropagation();
  };

  const menuToggleHandler = (index, value) => {
    const newOpenMenu = props.menuItems.map(() => {
      return false;
    });
    newOpenMenu[index] = !value;
    setMenuOpen(newOpenMenu);
  };

  const menuItems = props.menuItems.map((p, index) => {
    const isOpen = menuOpen[index];

    const subMenuItems = p.menuItems.map(c => {
      return (
        <Link
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          key={"header-submenu-item-" + c.name}
        >
          {c.name}
        </Link>
      )
    });

    return (
      <>
        <NavDropDownButton
          key={"header-menu-" + p.name}
          menuId={"drop-down-menu" + p.name}
          // TODO: this is causing the +/- sign to disappear
          //isOpen={isOpen}
          isCurrent={isOpen}
          label={
            <Link
              className="font-alt-md text-bold"            
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              key={"header-menu-item-" + p.name}
              onClick={(e) => menuTitleClickHandler(e)}
            >
              {p.name}
            </Link>
          }
          onToggle={() => {
            menuToggleHandler(index, isOpen);
          }}
        />
        <MegaMenu
          id={"drop-down-menu" + p.name}
          key={"drop-down-menu" + p.name}
          isOpen={isOpen}
          items={[subMenuItems]}
        />
      </>
    );
  });

  return (
    <div className="header-container">
      <GovBanner className="padding-y-2px bg-base-lighter" />
      <div className={`usa-overlay ${menuExpanded ? "is-visible" : ""}`} />
      {
        props.environment ?
          <EnvBanner label={props.environment} />
        : null
      }
      <USWDSHeader basic={true} className="margin-bottom-neg-1">
        <a
          href={props.logoSrc}
          target="_blank"
          rel="noopener noreferrer"
          title="EPA Home page"
        >
          <img
            src={props.logoSrc}
            className="margin-3"
            alt="Official EPA Logo"
          />
        </a>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <NavMenuButton
              label="Menu"
              onClick={() => menuClickHandler()}
              className="display-block usa-button"
              aria-haspopup="true"
              aria-expanded={menuExpanded}
            />
          </div>
          <PrimaryNav
            key="primaryNav"
            items={menuItems}
            mobileExpanded={menuExpanded}
            onToggleMobileNav={() => menuClickHandler()}
          >
            <Search
              key="search-epa"
              placeholder="Search EPA.gov"
              size="small"
              onSubmit={(event) => searchHandler(event)}
            />
          </PrimaryNav>          
        </div>
      </USWDSHeader>
    </div>
  );
};

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  searchUrl: PropTypes.string.isRequired,
  environment: PropTypes.string,
  menuItems: [
    {
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      menuItems: [
        {
          link: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }
      ],
    },
  ],
};

export default Header;