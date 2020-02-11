import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

import ScrollAnimation from "react-animate-on-scroll";

import ReactModal from "react-modal";
import Button from "../components/button";
import Employee from "../components/employee";

import cities from "../assets/images/cities.svg";
import close from "../assets/images/icon-close.svg";
import iconLinkedIn from "../assets/images/icon-li.svg";

const modalStyles = {
  content: {
    width: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "3rem",
    transform: "translate(-50%, -50%)"
  }
};

class About extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentModal: ""
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(name) {
    this.setState({ showModal: true, currentMember: name });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const pageData = this.props.data.wordpressPage;
    const seoData = this.props.data.wordpressPage.yoast_meta

    return (
      <Layout pageId={pageData.wordpress_id}>
        <SEO
          title={seoData.yoast_wpseo_title}
          description={seoData.yoast_wpseo_metadesc}
          thumbnail={pageData.featured_media.link}
        />
        <div id="about" className="transition-item about">
          <div className="intro">
            <div className="container">
              <div className="grid-4">
                <h1 className="animated fadeIn">
                  {pageData.acf.section_1.heading_1}
                </h1>
                <p className="animated fadeIn delay-300ms">
                  {pageData.acf.section_1.copy}
                </p>
              </div>
              <div className="grid-7">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  className="westcoast"
                  animateOnce={true}
                >
                  <img
                    src={pageData.acf.section_1.image.source_url}
                    alt={pageData.acf.section_1.image.alt_text}
                  />
                </ScrollAnimation>
              </div>
            </div>
            <div className="container">
              <div className="grid-7">
                <ScrollAnimation
                  animateIn="fadeInLeft delay-300ms"
                  className="westcoast"
                  animateOnce={true}
                >
                  <img
                    src={pageData.acf.section_2.image.source_url}
                    alt={pageData.acf.section_2.image.alt_text}
                  />
                </ScrollAnimation>
              </div>
              <div className="grid-4">
                <p className="animated fadeIn delay-600ms">
                  {pageData.acf.section_2.copy}
                </p>
              </div>
            </div>
          </div>
          <div className="refine">
            <div className="container">
              <ScrollAnimation
                className="grid-7"
                animateIn="fadeIn"
                animateOnce={true}
              >
                <h2>{pageData.acf.section_3.headline}</h2>
              </ScrollAnimation>
            </div>
            <div className="container">
              <div className="grid-10">
                <ScrollAnimation
                  className="col-2"
                  animateIn="fadeIn"
                  delay={300}
                  animateOnce={true}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: pageData.acf.section_3.copy
                    }}
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="talent">
            <div className="container">
              <div className="grid-4">
                <h2>{pageData.acf.section_4.headline}</h2>
                <p className="animated fadeIn delay-300ms">
                  {pageData.acf.section_4.copy}
                </p>
              </div>
              <div className="grid-7">
                <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                  <img
                    src={pageData.acf.section_4.image.source_url}
                    alt={pageData.acf.section_4.image.alt_text}
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="wave"></div>
          <div className="team">
            <div className="container">
              <h2>{pageData.acf.team.headline}</h2>
              <p>{pageData.acf.team.copy}</p>
              <div className="team-contain">
                {pageData.acf.team.member.map((member, idx) => (
                  <ScrollAnimation
                    animateIn="zoomIn"
                    delay={idx * 100}
                    animateOnce={true}
                  >
                    <div
                      className="person-contain"
                      onClick={() => this.handleOpenModal(member)}
                      onKeyDown={() => this.handleOpenModal(member)}
                      role="dialog"
                    >
                      <Employee
                        {...{ ...member }}
                      />
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
          <div className="wave flip"></div>
          <div className="cta">
            <div className="container">
              <div
                className="grid-6"
                data-2850="transform:scale(0);opacity:0;"
                data-3100="transform:scale(1);opacity:1;"
              >
                <h2>{pageData.acf.cta.headline}</h2>
                <p>
                {pageData.acf.cta.copy}
                </p>
                <Button
                  link={pageData.acf.cta.button_link}
                  name={pageData.acf.cta.button_name}
                  color="orange"
                  animation="tada"
                  delay="delay-3s"
                />
              </div>
            </div>
            <img
              src={cities}
              alt="Los Angeles and San Francisco Illustrations"
            />
          </div>
          <ReactModal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
            style={modalStyles}
          >
            <ModalContent
              {...{
                ...this.state.currentMember
              }}
            />
            <button onClick={this.handleCloseModal}>
              <img src={close} alt="Close Icon" />
            </button>
          </ReactModal>
        </div>
      </Layout>
    );
  }
}

const ModalContent = ({ image, name, title, bio, linkedin }) => {
  return (
    <div className="details">
      <img src={image.source_url} alt={name} />
      <div className="name">
        <h2>{name}</h2>
        <h4>{title}</h4>
      </div>
      <div className="copy">
        <p>
          {bio}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img src={iconLinkedIn} alt="LinkedIn Icon" />
            </a>
          )}
        </p>
      </div>
    </div>
  );
};


export default About;

export const aboutQuery = graphql`
  query aboutPageQuery($id: String!) {
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
        section_1 {
          copy
          heading_1
          image {
            source_url
            alt_text
          }
        }
        section_2 {
          copy
          image {
            source_url
            alt_text
          }
        }
        section_3 {
          copy
          headline
        }
        section_4 {
          copy
          headline
          image {
            source_url
            alt_text
          }
        }
        team {
          copy
          headline
          member {
            bio
            image {
              source_url
              alt_text
            }
            linkedin_url
            name
            title
          }
        }
        cta {
          button_link
          button_name
          copy
          headline
        }
      }
    }
  }
`;
