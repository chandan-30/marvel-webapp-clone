import React from 'react';
import '../styles/Bot.css'; //styles for this component

/* Below are the images required for this component */

import bot from '../images/botbot.png';

// Bot section component which appears as fifth section in the page

function Bot() {
  return (
    <>
        <section className='container-fluid bot' data-testid='Bot-id'>
            <div className='basic-grid'>
                
                <div className='card-class'>
                    <img src={bot} alt='bot-img' />
                </div>

                <div className='card-class'>
                    <h2>
                        A Slack-bot for creating and managing prototypes
                    </h2>
                    <p>
                        Check out our API example BotBot, a bot for creating, viewing
                        and managing prototypes by simply using Slash Commands in slack. Grab the code and make your own bot!
                    </p>
                    <div className='btn-div'>
                        <button type="button" className="btn1 color-one">View on Github</button>
                        <button type="button" className="btn1 color-two">Try the demo</button>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Bot