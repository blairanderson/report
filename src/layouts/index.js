import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.9.0/css/tachyons.min.css"
    />
    <Helmet
      title="Revenues - Expenses = Profits"
      meta={[
        {
          name: 'description',
          content: 'basic definitions of calculating profit.'
        },
        {
          name: 'keywords',
          content: 'profit, net profit, revenues, expenses, calculate proft'
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
