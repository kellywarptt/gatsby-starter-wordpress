import React, {Component} from "react"
import Layout from '../components/Layout'
import SEO from "../components/seo"
import { graphql } from "gatsby";

import Clouds from "../components/clouds"

import cloudLeft from "../assets/images/cloud-single.svg"
import cloudRight from "../assets/images/cloud-single-small.svg"

class Careers extends Component {
  render() {

    const pageData = this.props.data.wordpressPage
    const seoData = this.props.data.wordpressPage.yoast_meta

    return (
      <Layout pageId={pageData.wordpress_id}>
        <SEO
          title={seoData.yoast_wpseo_title}
          description={seoData.yoast_wpseo_metadesc}
          thumbnail={pageData.featured_media.link}
        />
        <div className="careers transition-item animated fadeIn delay-200">
          <div className="banner">
            <div className="container">
              <div className="copy grid-4">
                <h1 className="white animated fadeIn">
                  {pageData.acf.careers.banner.headline}
                </h1>
                <p className="white animated fadeIn delay-300ms">
                  {pageData.acf.careers.banner.copy}
                </p>
              </div>
              <img
                src={pageData.acf.careers.banner.graphic.source_url}
                className="animated fadeIn delay-600ms"
                alt={pageData.acf.careers.banner.graphic.alt_text}
              />
            </div>
          </div>
          <div id="why">
            <div className="container">
              <h2>
                <div
                  animateIn="zoomIn"
                  className="grid-5"
                  animateOnce={true}
                >
                  {pageData.acf.careers.why.headline}
                </div>
              </h2>
              <div
                animateIn="zoomIn"
                className="grid-10 col-2"
                delay={300}
                animateOnce={true}
              >
                <p>
                  {pageData.acf.careers.why.copy}
                </p>
              </div>
            </div>
          </div>
          <div className="quote">
            <div className="container">
              <div
                animateIn="zoomIn"
                className="grid-5 panel"
                delay={300}
                animateOnce={true}
              >
                <p className="italic">
                  {pageData.acf.careers.why.box_copy}
                </p>
              </div>
              <div
                animateIn="fadeInRight"
                className="grid-8"
                animateOnce={true}
              >
                <img src={pageData.acf.careers.why.image.source_url} alt={pageData.acf.careers.why.image.alt_text} />
              </div>
            </div>
          </div>
          <div className="wave"></div>
          <div className="perks">
            <div className="container">
              <h2>{pageData.acf.careers.perks.headline}</h2>
              {pageData.acf.careers.perks.single_perk.map((perk, idx) => (
                <div
                  animateIn="zoomIn"
                  className="grid-6"
                  animateOnce={true}
                  delay={idx * 100}
                >
                  <img src={perk.icon.source_url} alt={perk.icon.alt_text} />
                  <h3>{perk.headline}</h3>
                  <p className="grid-8">{perk.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="wave" className="wave purple"></div>
          <div id="openings">
            <div className="bg-grid"></div>
            <div className="container">
              <img src={cloudLeft} alt="Cloud" className="cloud-left" />
              <img src={cloudRight} alt="Cloud Small" className="cloud-right" />
              <h2 className="white">{pageData.acf.careers.openings.headline}</h2>
              <div className="job-contain grid-8">
              {pageData.acf.careers.openings.job.map((job, idx) => (
                <div
                  animateIn="zoomIn"
                  animateOnce={true}
                  delay={idx * 100}
                  className="grid-12"
                >
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    <span class="title">{job.title}</span>
                    <span class="location">{job.location}</span>
                    <span class="apply">Apply</span>
                  </a>
                </div>
              ))}
              </div>
            </div>
          </div>
          <Clouds />
        </div>
      </Layout>
    )
  }
}
export default Careers

export const careersQuery = graphql`
  query careersPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      wordpress_id
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
      }
      featured_media {
        link
      }
      acf {
        careers {
          banner {
            copy
            graphic {
              source_url
              alt_text
            }
            headline
          }
          openings {
            headline
            job {
              link
              location
              title
            }
          }
          perks {
            headline
            single_perk {
              copy
              headline
              icon {
                source_url
                alt_text
              }
            }
          }
          why {
            box_copy
            copy
            headline
            image {
              alt_text
              source_url
            }
          }
        }
      }
    }
  }
`
