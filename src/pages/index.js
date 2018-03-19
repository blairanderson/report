import React from 'react';
import Link from 'gatsby-link';
import { Definitions } from '../components/Definitions';
import { NicheLinks } from '../components/NicheLinks';

const IndexPage = () => (
  <div className="cf nl2 nr2 mw9">
    <div className="fl-ns w-70-ns ph3">
      <Definitions />
    </div>
    <div className="fl-ns w-30-ns ph3">
      <NicheLinks />
    </div>
  </div>
);

export default IndexPage;
