import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../Footer'
import Header from '../Header'

function Layout({ children }) {
  return (
    <div className="w-full h-full overflow-hidden bg-hero-pattern	">
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout