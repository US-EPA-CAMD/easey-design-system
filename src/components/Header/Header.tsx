import { useState, useEffect } from 'react';
import _ from 'lodash';

import { Link, Search, GovBanner, PrimaryNav, NavMenuButton, Header as USWDSHeader } from '@trussworks/react-uswds';
import { focusTrap } from '../../additional-functions/focus-trap';

import EnvBanner from '../EnvBanner/EnvBanner';

export interface MenuItem {
  name: string;
  href: string;
}

export interface HeaderProps {
  logoSrc?: string;
  logoUrl?: string;
  searchUrl?: string;
  environment: string;
  menuItems?: MenuItem[];
}

const defaultArgs = {
  logoUrl: 'https://www.epa.gov',
  searchUrl: 'https://search.epa.gov/epasearch',
  menuItems: [
    {
      name: 'Environmental Topics',
      href: 'https://www.epa.gov/environmental-topics',
    },
    {
      name: 'Laws and Regulations',
      href: 'https://www.epa.gov/laws-regulations',
    },
    {
      name: 'About EPA',
      href: 'https://www.epa.gov/aboutepa',
    },
    {
      name: 'Accessibility',
      href: 'https://www.epa.gov/accessibility',
    },
    {
      name: 'Privacy',
      href: 'https://www.epa.gov/privacy',
    },
    {
      name: 'Privacy and Security Notice',
      href: 'https://www.epa.gov/privacy/privacy-and-security-notice',
    },
  ],
};

export const Header = ({
  logoSrc,
  logoUrl = defaultArgs.logoUrl,
  searchUrl = defaultArgs.searchUrl,
  menuItems = defaultArgs.menuItems,
  environment,
}: HeaderProps) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleRightSideNav = () => {
    if (!menuExpanded) {
      // *** move search box to the top
      // @ts-ignore
      document.querySelector('#navRightSide').insertBefore(
        document.querySelector('#navRightSide form') as Node,
        // @ts-ignore
        document.querySelector('#navRightSide').childNodes[0] as Node,
      );

      // *** move 'Close' button to the top
      // @ts-ignore
      document.querySelector('#navRightSide').insertBefore(
        document.querySelector('#navRightSide .usa-nav__close') as Node,
        // @ts-ignore
        document.querySelector('#navRightSide').childNodes[0] as Node,
      );
    }

    const { handleKeyPress, firstComponentFocusableElement } = focusTrap('#navRightSide', () => setMenuExpanded(false));

    // *** FOCUS TRAP
    if (!menuExpanded) {
      document.addEventListener('keydown', handleKeyPress);
    } else if (menuExpanded) {
      document.removeEventListener('keydown', handleKeyPress);
      document.getElementById('main-header-menu')?.focus();
    }

    setMenuExpanded((prvExpanded) => !prvExpanded);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>): boolean => {
    // *** override default html form behavior (i.e., prevent submission)
    event.preventDefault();

    // *** URI encode the component after trimming to get rid of leading/trailing spaces
    // *** and mitigate any character collision issues during http request with window.open
    if (event && event.target) {
      const searchTerm = (document.querySelector('#search-field') as HTMLInputElement).value.trim() as string;
      window.open(`${searchUrl}/?querytext=${searchTerm}`, '_blank');

      return true;
    }
    return false;
  };

  const menuTitleClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  const links = menuItems.map((item) => {
    return (
      <>
        <Link
          className="font-alt-md text-bold"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          key={'header-menu-item-' + item.name}
          onClick={(event) => menuTitleClickHandler(event)}
        >
          {item.name}
        </Link>
      </>
    );
  });

  return (
    <div className="header-container">
      <GovBanner className="padding-y-2px bg-base-lighter width-full" />
      <div className={`usa-overlay ${menuExpanded ? 'is-visible' : ''}`} />
      {environment && environment !== 'prod' ? <EnvBanner label={environment} /> : null}
      <USWDSHeader basic={true} className="margin-bottom-neg-1">
        <a href={logoUrl} target="_blank" rel="noopener noreferrer" title="EPA Home page">
          {_.isNil(logoSrc) || logoSrc === '' ? (
            <img
              className="margin-3 float-left clearfix"
              alt="Official EPA Logo"
              title="Official EPA Logo"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NS43NDciIGhlaWdodD0iMjkuMzg5IiB2aWV3Qm94PSIwIDAgOTUuNzQ3IDI5LjM4OSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzAwNzFiYzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0NyAtNjQwKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMzYuOTEyLDM4NS4zYTkuMzQ4LDkuMzQ4LDAsMCwxLTE4LjExNSwwaC4wMzlzMi4wNjEsMi4xNzctLjAzOSwwYTIuODg1LDIuODg1LDAsMCwwLDIuMjU1LjkzMywyLjgzMiwyLjgzMiwwLDAsMCwyLjI1NS0uOTMzLDMuMjM4LDMuMjM4LDAsMCwwLDQuNTQ4LDAsMi44ODQsMi44ODQsMCwwLDAsMi4yNTUuOTMzLDIuODMxLDIuODMxLDAsMCwwLDIuMjU1LS45MzMsMy4yMzgsMy4yMzgsMCwwLDAsNC41NDgsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMzLjg3OCAyNjUuOTcyKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTM2LjU1NCwzNDEuMDIyYTkuMTU1LDkuMTU1LDAsMSwwLTE4LjMxLDBoOC4yNDFhMi42MTEsMi42MTEsMCwwLDEtMS43MS0yLjQ0OSwyLjY2MywyLjY2MywwLDAsMSw1LjMyNiwwLDIuNzA1LDIuNzA1LDAsMCwxLTEuNTk0LDIuNDQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQuMzE1IDMwOC4xNTIpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNjQuNTEsNDE1LjkyNGMuMTU1LTcuNzc1LDYuMjU5LTE0LjUsMTQuMTExLTE0Ljc3MmExNC45NTYsMTQuOTU2LDAsMCwxLTE0LjExMSwxNC43NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4xOTMgMjUzLjQ2NCkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTEwNi4wMzcsNDE1LjkyNGExNC45NjQsMTQuOTY0LDAsMCwwLTE0LjE1LTE0Ljc3MiwxNC45OSwxNC45OSwwLDAsMCwxNC4xNSwxNC43NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NS4xMTMgMjUzLjQ2NCkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTI2Mi41LDMzNC45OEgyNDMuOTUzdjI4LjA2N0gyNjIuNXYtNC4zMTVIMjQ5Ljc4NHYtNy41ODFIMjYyLjV2LTQuNDMySDI0OS43ODR2LTcuMzg2SDI2Mi41VjMzNC45OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NC44ODIgMzA1LjY4KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzQ0LjE3NiwzNDYuNzIxaDUuNzE1YTMuNzMzLDMuNzMzLDAsMCwwLDAtNy4zODZoLTUuMzI2djIzLjcxM0gzMzguN1YzMzQuOTgxaDEzLjE0YzQuMjU5LDAsNy4zODQsMy43NDksNy40MjUsOC4wMDguMDQxLDQuMy0zLjEyMSw4LjE2NC03LjQyNSw4LjE2NGgtNy42NTl2LTQuNDMyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzOS42NDIgMzA1LjY4KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNDA3LjgxNiwzNjMuMDQ4aDYuMjU5bDIuNzIxLTcuMzg2aDExLjQyOWwtMS43MTEtNC42MjZoLTguMDg2bDMuOTY1LTEwLjY5LDguMjgsMjIuN2g2LjI1OWwtMTEuMi0yOC4wNjdoLTcuMTE0bC0xMC44MDcsMjguMDY3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5NC4xODUgMzA1LjY4KSIvPjwvZz48L3N2Zz4="
            />
          ) : (
            <img src={logoSrc} className="margin-3" alt="Official EPA Logo" title="Official EPA Logo" />
          )}
        </a>
        <div className="usa-nav-container">
          <NavMenuButton
            label="Menu"
            id = "main-header-menu"
            onClick={() => toggleRightSideNav()}
            className="margin-2 float-right clearfix usa-button"
            aria-haspopup="true"
            aria-expanded={menuExpanded}
          />
          <PrimaryNav
            items={links}
            mobileExpanded={menuExpanded}
            onToggleMobileNav={() => toggleRightSideNav()}
            key="primaryNav"
            id="navRightSide"
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

export default Header;
