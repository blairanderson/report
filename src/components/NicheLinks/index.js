import React from 'react'
import Link from 'gatsby-link'

const P = ({ children }) => (
  <p className="lh-copy f4 measure-wide center">{children}</p>
);

var LINKS = {
  "SaaS -  Ebitda VS Net Profit ": "https://www.saasmetrics.co/ebitda-vs-gross-margin-vs-net-profit/",
  "AMAZON - FBA Revenue Calculator": "https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US",
  "ART - Becoming a Profitable Artist": "https://www.forbes.com/sites/rachelhennessey/2013/04/02/3-keys-to-making-it-as-an-artist-without-starving/"
}




const NicheLinks = () => (
  <div>
    <small>Links currated by Niche</small>
    {Object.keys(LINKS).sort().map((name) => {
      return (<P key={name}><a className="no-underline" href={LINKS[name]}>{name}</a></P>);
    })}
  </div>
)

export default { NicheLinks }
