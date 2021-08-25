import React from 'react'


const Home = () => {
  return (
    <div className='container'>
      <h1 className='text-center text-primary'>Welcome to Story Gen</h1>
      {/* <FirstNameGenerator/> 
      <StoryStarter/> */}

      <div className='card text-center bg-secondary'>
        <p>Hello...Writing and reading can be a fun addiction. To create
          and enter entirely different worlds at will is thrilling. 
          The only that can hold you back is your imagination.
        </p>

        <p>But...it is common place to get stuck every now and then.
          I built a few different random generators to help get the 
          creative juices flowing again. Use them as you see fit. Some 
          of the entries I may have left vague on purpose. Research is 
          a part of writing that needs to be cultivated.
        </p>
      </div>
    </div>
  )
}

export default Home
