import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function() {
  return (
      <Layout>
        <h2>Hello Frontend Masters!</h2>
        <p>Welcome to frontend masters</p>
        <Link to="/about/"> Go to About me &rarr;</Link>
      </Layout>
  );
}
