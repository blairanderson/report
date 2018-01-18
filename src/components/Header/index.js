import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div className="pt4 pb3 bg-blue">
    <h1 className="tc f1">
      <Link className="white no-underline bt bb b--near-white" to="/">
        Revenues - Expenses = Profit
      </Link>
    </h1>
  </div>
);

export default Header;
