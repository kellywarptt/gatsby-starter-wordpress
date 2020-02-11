import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import '../assets/scss/main.scss'

const Layout = ({ children, pageId }) => {

  return ( 
    <div id="page" className={`site page-id-${pageId}`}>
        <Header />
        <div id="content" className="site-content">
          <section id="primary" className="content-area">
            <main id="main" className="site-main">
              {children}
            </main>
            {/* #main */}
          </section>
          {/* #primary */}
        </div>
        <Footer />
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
