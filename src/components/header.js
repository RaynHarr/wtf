import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    console.log(scrollTop)
  }

  render() {
    return (
      <div className="Header">
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../../static/images/logo-designcode.svg')} /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/workshops"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
