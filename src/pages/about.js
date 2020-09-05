import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function () {
  return (
      <Layout>
        <h2>About Me</h2>
        <p> This is my personal website</p>
        <Link to= "/">&larr;Go back home</Link>
      </Layout>
  )
}