import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from "../components/seo"

class Page extends React.Component {
  render() {
    const pageData = this.props.data.wordpressPage

    return (
      <Layout pageId={pageData.wordpress_id}>
        <SEO title={pageData.title} description={pageData.excerpt} />
        <div className="container">
          <h1 className="entry-title">{pageData.title}</h1>
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            excerpt
            wordpress_id
            yoast_wpseo {
              title
              metadesc
              metakeywords
            }
        }
    }
`
