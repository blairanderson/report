import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div className="pv2 pt4-ns pb3-ns bg-blue">
    <h1 className="tc f3 f1-ns">
      <Link className="white no-underline bt-ns bb-ns b--near-white" to="/">
        Revenues - Expenses = Profit
      </Link>
    </h1>
  </div>
);

export default Header;
