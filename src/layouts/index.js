import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <div className="sans-serif">
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
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
