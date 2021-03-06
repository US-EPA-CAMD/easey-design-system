//import { useState } from 'react';
import classnames from 'classnames';
import { KeyboardArrowDownSharp, KeyboardArrowUpSharp } from '@material-ui/icons';

import './AccordionMenu.scss';
import { useState } from 'react';

export interface AccordionMenuItem {
  id: string;
  label: string;
  href?: string;
  target?: string;
  comingSoon?: string;
  current: boolean;
  expanded?: boolean;
  subItems?: AccordionMenuItem[];
}

export interface AccordionMenuProps {
  items: AccordionMenuItem[];
  isSubnav: boolean;
}

export const AccordionMenu = ({ items, isSubnav = false }: AccordionMenuProps): JSX.Element => {
  //const menuItems = items;
  const [menuItems, setMenuItems] = useState(items);

  const classes = classnames({
    'usa-sidenav': !isSubnav,
    'usa-sidenav__sublist': isSubnav,
  });

  const onClickHandler = (index: number) => {
    const newItems = [...menuItems];
    const item = newItems[index];
    item.expanded = !item.expanded;
    setMenuItems([...newItems]);
  };

  return (
    <div className="easey-accordion-menu">
      <ul className={classes} data-testid="sidenav">
        {menuItems.map((item, index) => (
          <li key={`sidenav_item_${item.id}`} className="usa-sidenav__item">
            <a
              href={item.href}
              className={item.current ? 'usa-current' : ''}
              aria-expanded={item.expanded}
              tabIndex={0}
              target={item.target? item.target: '_self'}
              onClick={() => onClickHandler(index)}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  return onClickHandler(index);
                } else {
                  return;
                }
              }}
            >
              {item.label}
              {!isSubnav && item.expanded ? <KeyboardArrowUpSharp className="float-right" /> : null}
              {!isSubnav && !item.expanded ? <KeyboardArrowDownSharp className="float-right" /> : null}
            </a>
            {item.subItems && item.subItems.length > 0 && item.expanded ? (
              <AccordionMenu items={item.subItems} isSubnav={true} />
            ) : null}
            {item.comingSoon && item.comingSoon.length > 0 && item.expanded ? (
              <div className="coming-soon">
                <h4>COMING SOON</h4>
                <p>{item.comingSoon}</p>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AccordionMenu;
