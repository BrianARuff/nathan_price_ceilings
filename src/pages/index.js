import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CompanyInfo from "../components/CompanyInfo"
import EngagementArea from "../components/EngagementArea"

const IndexPage = () => (
  <Layout>
    <SEO title="Nathan Price Ceilings" />
    <EngagementArea />
    <CompanyInfo />
  </Layout>
)

export default IndexPage
