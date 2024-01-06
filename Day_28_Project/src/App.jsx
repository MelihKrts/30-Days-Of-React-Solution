import React, { useState } from 'react'
import './App.css'

function App() {

  const [tweetText, setTweetText] = useState('');
  const [tweets, setTweets] = useState([])



  const handleChange = (e) => {
    setTweetText(e.target.value);
  }

  const handleSubmit = (e) => {
    const time = new Date();
    const day = String(time.getDate()).padStart("2", 0);
    const month = time.toLocaleString("en-us", { month: "short" });
    const year = time.getFullYear().toString().slice(-2);
    const mainHour = time.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true })
    const timestamp = `${day} ${month} ${year} ${mainHour}`;


    e.preventDefault()
    setTweets([...tweets, { tweet: tweetText, timestamp }]);
    setTweetText('');
  }

  return (
    <>
      <h1>Twitter Generator</h1>
      <div className='form-container'>

        <form onSubmit={handleSubmit} className='side'>
          <textarea className='big-text' cols={90} rows={10} required onChange={handleChange} />
          <button type='submit' className='submit'>Submit</button>
        </form>

        <div className='tweet-container'>
          {tweets.map((tweetObj, index) => (
            <div key={index} className='post'>
              <div className='tweet-paragraph'><p>{tweetObj.tweet}</p></div>
              <div className='time-info'>{tweetObj.timestamp}</div>
            </div>
          ))}
        </div>


      </div>
    </>
  )
}

export default App
