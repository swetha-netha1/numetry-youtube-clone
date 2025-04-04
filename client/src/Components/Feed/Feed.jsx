import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import {Link} from 'react-router-dom'

const Feed =()=> {
  return (
    <div className="feed">
    <Link to={`video/20/4521`} className='card'>
      <img src={thumbnail1} alt=""/>
      <h2>feel the nature..!</h2>
      <h3>Swetha Netha</h3>
      <p>15k views &bull; 2 days ago</p>
    </Link>
        <Link to={`video/20/4521`} className='card'>

    <div className='card'>
      <img src={thumbnail2} alt=""/>
      <h2>beach vibes..!</h2>
      <h3>Nature love</h3>
      <p>18k views &bull; 2 days ago</p>

    </div>
        </Link>

    <div className='card'>
      <img src={thumbnail3} alt=""/>
      <h2>Stylish world..!</h2>
      <h3>Style with me</h3>
      <p>5k views &bull; 1 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail4} alt=""/>
      <h2>waterfall..!</h2>
      <h3>World Tour</h3>
      <p>5k views &bull; 8 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail5} alt=""/>
      <h2>Best channel to learn coding..!</h2>
      <h3>code with me</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail6} alt=""/>
      <h2>Best channel to learn coding..!</h2>
      <h3>code with me</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail7} alt=""/>
      <h2>Best channel to learn coding..!</h2>
      <h3>code with me</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    <div className='card'>
      <img src={thumbnail8} alt=""/>
      <h2>Best channel to learn coding..!</h2>
      <h3>code with me</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
    
    
    
    
    
    
    
    </div>
  )
}

export default Feed;

