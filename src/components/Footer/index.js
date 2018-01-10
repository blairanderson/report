import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div className="bg-blue pa3 tc">
    <div className="near-white pa1">
      Copyright {new Date().getFullYear()} <Link className='white' to="/">Revenues-Expenses.com</Link>
    </div>
    <div className="white-50 pa1">
      Content provided as-is, free of charge. Cannot be reproduced.
    </div>
  </div>
)

export default Footer
