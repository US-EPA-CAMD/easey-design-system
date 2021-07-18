import React, { useState } from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  KeyboardArrowDownSharp,
  KeyboardArrowUpSharp,
} from "@material-ui/icons";

import './AccordionMenu.scss';

export const AccordionMenu = ({
  items,
  isSubnav = false,
}) => {
  const [menuItems, setMenuItems] = useState(items);

  const classes = classnames({
    'usa-sidenav': !isSubnav,
    'usa-sidenav__sublist': isSubnav,
  })

  const onClickHandler = (index) => {
    const newItems = [...menuItems];
    const item = newItems[index];
    item.expanded = !item.expanded;
    setMenuItems([...newItems]);
  }

  return (
    <div className="easey-accordion-menu">
      <ul className={classes} data-testid="sidenav">
        {
          menuItems.map((item, i) => (
            <li key={`sidenav_item_${item.id}`}
              className="usa-sidenav__item"
              aria-expanded={item.expanded}
            >
              <a href={item.href}
                className={item.current ? "usa-current" : ""}
                onClick={() => onClickHandler(i)}
              >
                {item.label}
                {
                  !isSubnav &&
                  item.expanded ?
                    <KeyboardArrowUpSharp className="float-right" />
                  : null
                }
                {
                  !isSubnav &&
                  !item.expanded ?
                    <KeyboardArrowDownSharp className="float-right" />
                  : null
                }              
              </a>
              {
                item.subItems && item.subItems.length > 0 && item.expanded ?
                  <AccordionMenu items={item.subItems} isSubnav={true} />
                : null
              }
              {
                item.comingSoon &&
                item.comingSoon.length > 0 &&
                item.expanded ?
                  <div className="coming-soon">
                    <h4>COMING SOON</h4>
                    <p>{item.comingSoon}</p>
                  </div>
                : null
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

AccordionMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      current: PropTypes.bool,
      expanded: PropTypes.bool,
      comingSoon: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          href: PropTypes.string,
          current: PropTypes.bool,
        })
      ),
    })
  ).isRequired,
  isSubnav: PropTypes.bool,
};

export default AccordionMenu;