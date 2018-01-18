import React from 'react'
import Link from 'gatsby-link'

const P = ({ children }) => (
  <p className="lh-copy f4 measure-wide center">{children}</p>
);

var LINKS = {
  "Ebitda VS Net Profit": {
    url: "https://www.saasmetrics.co/ebitda-vs-gross-margin-vs-net-profit/",
    tags: "SAAS"
  },
  "Revenue Calculator": {
    url: "https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US",
    tags: "FBA"
  },
  "Becoming a Profitable Artist": {
    url: "https://www.forbes.com/sites/rachelhennessey/2013/04/02/3-keys-to-making-it-as-an-artist-without-starving/",
    tags: "ART"
  },
  "People leave brands in a DownTurn Economy": {
    url: "http://www.tuck.dartmouth.edu/news/articles/private-label-products-in-the-manufacturer-retailer-power-balance",
    tags: "PL"
  }
}




const NicheLinks = () => (
  <div>
    <small>Links currated by Niche</small>
    {Object.keys(LINKS).sort().map((name) => {
      var {url, tags} = LINKS[name]
      return (<P key={name}><a className="no-underline" href={url}>{tags}{" - "}{name}</a></P>);
    })}
  </div>
)

export default { NicheLinks }
