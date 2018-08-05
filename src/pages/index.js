import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code modern apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="white">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="
          
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

          M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;       
          
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
          " />
        </path>
      </svg>
    </div>
    <div className="CardGroup">
      <Card 
        title="React for designers"
        text="12 sections"
        image={require('../../static/images/wallpaper.jpg')}
      />
      <Card 
        title="Design system in Figma"
        text="10 sections"
        image={require('../../static/images/wallpaper2.jpg')}
      />
      <Card 
        title="Sketch"
        text="11 sections"
        image={require('../../static/images/wallpaper3.jpg')}
      />
      <Card 
        title="Framer X"
        text="9 sections"
        image={require('../../static/images/wallpaper4.jpg')}
      />
      <Card 
        title="Xcode"
        text="8 sections"
        image={require('../../static/images/wallpaper.jpg')}
      />
      <Card 
        title="Swift"
        text="7 sections"
        image={require('../../static/images/wallpaper2.jpg')}
      />
      <Card 
        title="React Native"
        text="8 sections"
        image={require('../../static/images/wallpaper3.jpg')}
      />
      <Card 
        title="JavaScript"
        text="9 sections"
        image={require('../../static/images/wallpaper4.jpg')}
      />
      <Card 
        title="HTML"
        text="10 sections"
        image={require('../../static/images/wallpaper.jpg')}
      />
      <Card 
        title="CSS"
        text="11 sections"
        image={require('../../static/images/wallpaper2.jpg')}
      />
    </div>
    <Section
      image={require('../../static/images/wallpaper2.jpg')}
      logo={require('../../static/images/logo-react.png')}
      title="React for designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </div>
)

export default IndexPage
