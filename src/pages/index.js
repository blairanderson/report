import React from 'react';
import Link from 'gatsby-link';
import {Definitions} from '../components/Definitions'
import {NicheLinks} from '../components/NicheLinks'

const IndexPage = () => (
  <div className="cf mw8">
    <div className="fl-ns w-60-ns">
      <small><em>TL;DR See Recommended Article links for your NICHE</em></small>
      <Definitions />
    </div>
    <div className="fl-ns w-40-ns">
      <NicheLinks />
    </div>
  </div>
);

export default IndexPage;
