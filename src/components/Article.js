import React from 'react'
import '../styles/Article.css'; //styles for this component

// Article section component which appears as second section in the page

function Article() {
  return (
    <>
        <article className='article container-fluid' data-testid='Article-id'>
            <h2 className='h2'>
                Experience the freedom to build features, right away.
            </h2>
            <p className='p'>
                You can now harness components of our platform and build powerful 
                integrations for 2 million users - or simply just for your team.
            </p>
        </article>
    </>
  )
}

export default Article