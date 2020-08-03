import HeaderLink from "./HeaderLink";
import PropTypes from "prop-types";
import React from "react";
import {CommandBar, ICommandBarItemProps} from '@fluentui/react/lib/CommandBar';

type PropTypes = {
  siteTitle: string;
};

const Header: React.FC<PropTypes> = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <CommandBar
      items={_items}
    />
  </header>
);

const _items: ICommandBarItemProps[] = [
  {
    key: 'Home',
    text: 'About',
    commandBarButtonAs: () => <HeaderLink to="/" text="Home"/>
  },
  {
    key: 'About',
    text: 'About',
    commandBarButtonAs: () => <HeaderLink to="/about" text="About"/>
  },
  {
    key: 'Courses',
    text: 'Courses',
    commandBarButtonAs: () => <HeaderLink to="/courses" text="Courses"/>
  },
  {
    key: "",
    text: '',
    className: 'no-show-nav-button'
  }
];

export default Header;
