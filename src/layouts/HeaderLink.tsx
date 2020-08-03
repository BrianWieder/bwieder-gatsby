import { Link } from "gatsby";
import React from "react";

type PropTypes = {
  to: string,
  text: string
}

const HeaderLink = ({to, text}: PropTypes) => {
  return (
    <Link to={to} className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-47">
      <span className="ms-Button-flexContainer flexContainer-48">
        <span className="ms-Button-textContainer textContainer-49">
          <span className="ms-Button-label label-51">{text}</span>
        </span>
      </span>
    </Link>
  );
};

export default HeaderLink;