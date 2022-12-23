import React from 'react'
import '../styles/Apisection.css';  //styles for this component

/* Below are the images required for this component */

import apiTeam from '../images/apiTeam.png'; 
import graphQL from '../images/graphQL.png';
import supercharge from '../images/superchargeWorkflow.png';

// API section component which appears as third section in the page

function Apisection() {
  return (
    <>
        <section className='container-fluid apisection' data-testid='api-id'>
            <div className='basic-grid'>

                <div className='card-class'>
                    <div className='img-div'>
                        <img src={apiTeam} alt='apiTeam-img' />
                    </div>
                    <div className='txt-div'>
                        <h6>
                            Dedicated API Team
                        </h6>
                        <p>
                            Our team are available for user's questions via
                            our Slack Developer Community and Email 
                        </p>
                    </div>
                </div>

                <div className='card-class'>
                    <div className='img-div'>
                        <img src={graphQL} alt='apiTeam-img' />
                    </div>
                    <div className='txt-div'>
                        <h6>
                            Our API uses Graph QL
                        </h6>
                        <p>
                            No handling server side. Get many API's responses in a single request.
                        </p>
                    </div>
                </div>

                <div className='card-class'>
                    <div className='img-div'>
                        <img src={supercharge} alt='apiTeam-img' />
                    </div>
                    <div className='txt-div'>
                        <h6>
                            Supercharge your workflow
                        </h6>
                        <p>
                            Auotomate workflows, integrate and analyse data and take Marvel to the next level.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Apisection