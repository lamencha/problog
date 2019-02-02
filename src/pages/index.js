import React from 'react'

import Layout from '../components/layout'


import Listing from '../components/listing'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Listing/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
    
  </Layout>
)

export default IndexPage
