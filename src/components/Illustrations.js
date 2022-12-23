import React from 'react';
import '../styles/Illustration.css'; //styles for this component

/* Below are the images required for this component */

import illustration from '../images/illustration.png'

// Illustration section component which appears at first in main content of the page
function Illustrations() {
  return (
    <>
        <section className='container-fluid illu-section' data-testid='illu-id'>
            <div className='row'>
                <div className='col-12'>
                        <div className='basic-grid'>
                        <div className='card-class'>
                            <h2>
                                Let's build the future of design, now.
                            </h2>
                            <p>
                                Creating integrations and amazing tools for 1 million users
                                or customize marvel for your team.
                            </p>
                            <div className='btn-div'>
                                <button type="button" className="btn1 color-one">Submit your app</button>
                                <button type="button" className="btn1 color-two">view API Docs</button>
                            </div>
                            
                        </div>
                        <div className='card-class img-div'>
                            <img src={illustration} alt='illustrationimage' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Illustrations