import React from 'react'
import { Typography } from '@material-ui/core';

import Layout from '../components/layout';
import UrlInputForm from '../components/urlInputForm';

const HomePage = () => {
  return (
    <Layout>
      <Typography variant="h1">Inspect a URL for hidden images</Typography>
      <UrlInputForm />
    </Layout>
  )
}

export default HomePage
