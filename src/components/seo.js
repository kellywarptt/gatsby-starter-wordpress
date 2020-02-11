import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import favicon from '../assets/images/favicon.png'

const SEO = ({ description, lang, meta, title, metaKeywords, thumbnail }) => {
  
  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}

      title={title}
      script={[
        {
          type: `application/ld+json`,
          content: `@context": "http://schema.org`
        }
      ]}
      link={[
        {
          rel: `shortcut icon`,
          type: `image/png`,
          href: `${favicon}`,
        }
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: thumbnail,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
