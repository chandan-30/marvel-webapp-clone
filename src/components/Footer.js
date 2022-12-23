import React from 'react'
import '../styles/Footer.css'; //styles for this component

/* Below are the images required for this component */

import logo from '../images/logo-white.svg';

// Footer section component which appears at bottom of the page

function Footer() {

    // Below are the static arrays created to be used as links in the footer section of the page

    const overview = ['Overview', 'why Marvel', 'Enterprise', 'Pricing', 'Request a demo', 'Explore', 'Apps', 'Developer API'];
    const features = ['Wireframing', 'Design', 'Prototyping', 'Collaboration', 'Handoff', 'Integrations', 'Sketch Plugin'];
    const support = ['Help Center', 'Terms of Service', 'Privacy', 'Security'];
    const marvel = ['Blog', 'Our Team', 'Contact Us', 'Success Stories', 'Brand Guidelines'];
    
  return (
    <footer>
        <div className='container-fluid footer' data-testid='Footer-id'>
            <div className='img1'>
                <img  src={logo} alt='logo-img' />
            </div>
            <div className='basic-grid'>
                <div className='img2'>
                    <img  src={logo} alt='logo-img' />
                </div>
                <div className='card-class links'>
                    <ul>
                        {
                            overview.map((link) => {
                                return (
                                    <li key={link}>{link}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='card-class links'>
                    <ul>
                        {
                            features.map((link) => {
                                return (
                                    <li key={link}>{link}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='card-class links'>
                    <ul>
                        {
                            support.map((link) => {
                                return (
                                    <li key={link}>{link}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='card-class links'>
                    <ul>
                        {
                            marvel.map((link) => {
                                return (
                                    <li key={link}>{link}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
