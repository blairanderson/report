import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="bg-blue">
    <div className="pa3">
      <h1 className="tc f1 white">
        <Link className="white no-underline" to="/">
          Revenues - Expenses = Profit
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
