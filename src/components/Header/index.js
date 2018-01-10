import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div className="pt4 pb3">
    <h1 className="tc f1">
      <Link className="near-black" to="/">
        Revenues - Expenses = Profit
      </Link>
    </h1>
  </div>
);

export default Header;
