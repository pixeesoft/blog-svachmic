import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Youtube from "../components/youtube"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const hyperlinks = data.site.siteMetadata.hyperlinks

  return (
    <Layout location={location} title={siteTitle} hyperlinks={hyperlinks}>
      <SEO title="404: Stránka nenalezena" />
      <h1>404: Stránka nenalezena</h1>
      <p>Něco by tu možná mělo být. Ale není...</p>
      <Youtube videoId="X_-q9xeOgG4" />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        hyperlinks {
          pixeesoft
          github
          stackoverflow
          email
        }
      }
    }
  }
`
