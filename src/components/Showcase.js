import React from 'react';
import '../styles/Showcase.css';  //styles for this component

/* Below are the images required for this component */
import showcase from '../images/showcase.png';

// Showcase section component which appears as fourth section in the page
function Showcase() {
  return (
    <>
        <section className='container-fluid showcase' data-testid='Showcase-id'>
            <div className='basic-grid'>
                
                <div className='card-class'>
                    <img src={showcase} alt='show-case-img' />
                </div>

                <div className='card-class'>
                    <h2>
                        Showcase your app in our integrations directory
                    </h2>
                    <p>
                        Building something special? We're always looking to work with partners
                        who wants to help the world bring their ideas to life.
                    </p>
                    <div className='btn-div'>
                        <button type="button" className="btn1 color-one">Become a partner</button>
                        <button type="button" className="btn1 color-two">View Integrations</button>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Showcase