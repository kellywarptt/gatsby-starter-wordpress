import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Clouds from "../components/clouds"

import ScrollAnimation from 'react-animate-on-scroll';

import rocket from "../assets/images/rocket.svg"
import cloudLeft from "../assets/images/cloud-single.svg"
import cloudRight from "../assets/images/cloud-single-small.svg"

const IndexPage = (props) => {

  const pageData = props.data.wordpressPage
  const seoData = props.data.wordpressPage.yoast_meta

  return(
    <Layout pageId={pageData.wordpress_id}>
      <SEO
        title={seoData.yoast_wpseo_title}
        description={seoData.yoast_wpseo_metadesc}
        thumbnail={pageData.featured_media.link}
      />
      <div className="banner">
          <div className="container">
            <div className="copy">
              <h1 className="white animated fadeIn">
                {pageData.acf.banner.headline}
              </h1>
              <p className="white big animated fadeIn delay-300ms">
                {pageData.acf.banner.copy}
              </p>
              <Button
                name={pageData.acf.banner.button_name}
                color="orange"
                link={pageData.acf.banner.button_url}
                animation="fadeIn"
                delay="delay-600ms"
              />
            </div>
            <div className="macbook">
              <img
                src={pageData.acf.banner.image.source_url}
                alt={pageData.acf.banner.image.alt_text}
                className="animated fadeInRight"
              />
            </div>
          </div>
        </div>
        <div className="features">
          <div className="container">
            <h4>{pageData.acf.features.subhead}</h4>
            <h2>{pageData.acf.features.heading_2}</h2>
            <div className="grid-4">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="cluster">
                  <img src={pageData.acf.features.column_1.image.source_url} alt={pageData.acf.features.column_1.image.alt_text} />
                </div>
                <h3>{pageData.acf.features.column_1.heading}</h3>
                <p>
                {pageData.acf.features.column_1.copy}
                </p>
              </ScrollAnimation>
            </div>
            <div className="grid-4">
              <ScrollAnimation animateIn="fadeIn" delay={300} animateOnce={true}>
              <div className="cluster">
                <img src={pageData.acf.features.column_2.image.source_url} alt={pageData.acf.features.column_2.image.alt_text} />
                <h3>{pageData.acf.features.column_2.heading}</h3>
                <p>
                {pageData.acf.features.column_2.copy}
                </p>
              </div>
              </ScrollAnimation>
            </div>
            <div className="grid-4">
            <ScrollAnimation animateIn="fadeIn" delay={600} animateOnce={true}>
            <img src={pageData.acf.features.column_3.image.source_url} alt={pageData.acf.features.column_3.image.alt_text} />
                <h3>{pageData.acf.features.column_3.heading}</h3>
                <p>
                {pageData.acf.features.column_3.copy}
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="gdpr">
          <div className="container">
            <div className="grid-5">
              <ScrollAnimation className="panel" animateIn="fadeInUp" animateOnce={true}>
              <img src={pageData.acf.privacy.images[0].image.source_url} alt={pageData.acf.privacy.images[0].image.source_url} />
              </ScrollAnimation>
              <ScrollAnimation className="panel" animateIn="fadeInUp" delay={200} animateOnce={true}>
              <img src={pageData.acf.privacy.images[1].image.source_url} alt={pageData.acf.privacy.images[1].image.source_url} />
              </ScrollAnimation>
              <ScrollAnimation className="panel" animateIn="fadeInUp" delay={300} animateOnce={true}>
                <img src={pageData.acf.privacy.images[2].image.source_url} alt={pageData.acf.privacy.images[2].image.source_url} />
              </ScrollAnimation>
              <ScrollAnimation className="panel" animateIn="fadeInUp" delay={400} animateOnce={true}>
              <img src={pageData.acf.privacy.images[3].image.source_url} alt={pageData.acf.privacy.images[3].image.source_url} />
              </ScrollAnimation>
            </div>
            <div className="grid-5">
              <ScrollAnimation className="copy" animateIn="fadeIn" delay={600} animateOnce={true}>
              <h4>{pageData.acf.privacy.subhead}</h4>
              <h2>{pageData.acf.privacy.headline_2}</h2>
               <p
                dangerouslySetInnerHTML={{ __html: pageData.acf.privacy.copy }}
               />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="wave"></div>
        <div className="more-features">
          <div className="bg-grid"></div>
          <div className="grid-12">
            <ScrollAnimation offset={120} animateIn="fadeIn" className="grid-6" animateOnce={true}>
              <h2 className="white">
              {pageData.acf.cta.left.headline}
              </h2>
              <p className="white">
                {pageData.acf.cta.left.copy}
              </p>
            </ScrollAnimation>
            <ScrollAnimation offset={120} animateIn="fadeIn" className="grid-6" delay={300} animateOnce={true}>
              <h2 className="white">
              {pageData.acf.cta.right.headline}
              </h2>
              <p className="white">
              {pageData.acf.cta.right.copy}
              </p>
            </ScrollAnimation>
          </div>
          <div className="container">
            <img src={cloudLeft} alt="Cloud" className="cloud-left" />
            <img src={cloudRight} alt="Cloud" className="cloud-right" />
            <img
              src={rocket}
              alt="Rocket"
              className="rocket animated zoomInUp" />
            <div className="grid-5">
              <h2 className="white">{pageData.acf.cta.bottom.headline}</h2>
              <p className="white">
              {pageData.acf.cta.left.copy}
              </p>
              <Button
                name={pageData.acf.cta.bottom.button_name}
                link={pageData.acf.cta.bottom.button_link}
                color="orange"
                animation="tada"
                delay="delay-2s"
              />
            </div>
          </div>
          <Clouds />
        </div>
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
    query homePageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            yoast_meta {
              yoast_wpseo_title
              yoast_wpseo_metadesc
            }
            featured_media {
              link
            }
            wordpress_id
            acf{
              banner{
                headline
                copy
                button_name
                button_url
                image {
                  source_url
                  alt_text
                }
              }
              features {
                column_1 {
                  copy
                  heading
                  image {
                    source_url
                    alt_text
                  }
                }
                column_2 {
                  copy
                  heading
                  image {
                    source_url
                    alt_text
                  }
                }
                column_3 {
                  copy
                  heading
                  image {
                    source_url
                    alt_text
                  }
                }
              }
              privacy {
                copy
                headline_2
                images {
                  image {
                    source_url
                  }
                }
                subhead
              }
              cta {
                bottom {
                  button_link
                  button_name
                  copy
                  headline
                }
                left {
                  copy
                  headline
                }
                right {
                  copy
                  headline
                }
              }
            }
        }
    }
`
