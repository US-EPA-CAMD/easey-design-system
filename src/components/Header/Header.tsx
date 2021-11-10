import { useState } from 'react';

import { Link, Search, GovBanner, PrimaryNav, NavMenuButton, Header as USWDSHeader } from '@trussworks/react-uswds';

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
  logoSrc: 'images/EPALogo.svg',
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
  logoSrc = defaultArgs.logoSrc,
  logoUrl = defaultArgs.logoUrl,
  searchUrl = defaultArgs.searchUrl,
  menuItems = defaultArgs.menuItems,
  environment,
}: HeaderProps) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const menuButtonClickedHandler = () => {
    setMenuExpanded(true);

    setTimeout(() => {
      const navClose = document.querySelector('button.usa-nav__close') as HTMLInputElement;
      if (navClose) {
        navClose.focus();
      }
    });
  };

  const menuClosedHandler = () => {
    setMenuExpanded(false);

    setTimeout(() => {
      const menuButton = document.querySelector('div.usa-navbar button.usa-button') as HTMLInputElement;
      if (menuButton) {
        menuButton.focus();
      }
    });
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>): boolean => {
    // *** override default html form behavior (i.e., prevent submission)
    event.preventDefault();

    // *** URI encode the component after trimming to get rid of leading/trailing spaces
    // *** and mitigate any character collision issues during http request with window.open
    if (event && event.target) {
      const target = event.target as HTMLInputElement;
      const searchTerm = encodeURI(target.value.trim());
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
      <GovBanner className="padding-y-2px bg-base-lighter" />
      <div className={`usa-overlay ${menuExpanded ? 'is-visible' : ''}`} />
      {environment && environment !== 'prod' ? <EnvBanner label={environment} /> : null}
      <USWDSHeader basic={true} className="margin-bottom-neg-1">
        <a href={logoUrl} target="_blank" rel="noopener noreferrer" title="EPA Home page">
          <img src={`${logoSrc}`} className="margin-3" alt="Official EPA Logo" />
        </a>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <NavMenuButton
              label="Menu"
              onClick={() => menuButtonClickedHandler()}
              className="display-block usa-button"
              aria-haspopup="true"
              aria-expanded={menuExpanded}
            />
          </div>
          <PrimaryNav
            key="primaryNav"
            items={links}
            mobileExpanded={menuExpanded}
            onToggleMobileNav={() => menuClosedHandler()}
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
