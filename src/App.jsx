import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from '/miffy-gram.png'; 
import miffy_moon from '/miffy_moon.jpg';
import miffy_icon from '/miffy_icon.jpg';
import miffy_birthday from '/miffy_birthday.jpg';
import miffy_flowers from '/miffy_flowers.jpg';
import miffy_music from '/miffy_music.jpg';
import miffy_vacation from '/miffy_vacation.jpg';
import pink_heart from '/pink_heart.webp';
import boris from '/boris.jpg';
import melanie from '/melanie.jpg';
import snuffy from '/snuffy.jpg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="gram_logo">
        <img src={logo} alt="miffy-gram logo" width="557" height="157" />
        <img src={miffy_icon} className="column" alt="miffy-gram icon" height="90"/>
      </div>

      <div>
        <div className="parent">        
          <div className="left_side">
            <div className="polaroid">
              <img src={miffy_moon} className="profile_pic" alt="miffy profile picture"  />
            </div>
            <div>
              <p className="info_section">
                name: miffy <br></br>
                university: bruna university <br></br>
                year: freshman <br></br>
                bio: she is a little girl rabbit <br></br>
                clubs: <br></br>
                <ClubButton clubName={'dutch club'}/>
                <ClubButton clubName={'book club'}/>
                <ClubButton clubName={'gardening club'}/>
              </p>
            </div>    
          </div>

          <div className="mutual_friends_column">
            <p className="headers">mutual friends </p>
            <MutualsCard mutualPic={boris} mutualName={"boris"} mutualUni={"purdue"} mutualYear={"sophomore"}/>
            <MutualsCard mutualPic={melanie} mutualName={"melanie"} mutualUni={"uiuc"} mutualYear={"freshman"}/>
            <MutualsCard mutualPic={snuffy} mutualName={"snuffy"} mutualUni={"ucla"} mutualYear={"junior"}/>               
          </div> 
        </div>
        <div className="recent_posts_row">
          <p className="headers">
            recent posts
          </p>
          <PostCards postImage={miffy_flowers} postText={"miffy: flower power"}/>
          <PostCards postImage={miffy_birthday} postText={"miffy: birthday bunny"}/>
          <PostCards postImage={miffy_music} postText={"miffy: la di da!"}/>
          <PostCards postImage={miffy_vacation} postText={"miffy: jet setter"}/>
        </div>
      </div>
      
    </>
  )
}

function MyButton() {
  return (
    <button>This is a button</button>
  );
}

function ClubButton({clubName}) {
  return (
    <button className="club_button"> {clubName} </button>
  );
}

function PostCards({postImage, postText, likeClick}) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="post_outer">
      <img src={postImage} className="post_photo" alt={postText} />
      <button onClick={handleClick} className='like_button'><img src={pink_heart} alt="like button" width="25"/> {count} </button>
      <p className="schoobell-regular"><br></br>{postText}</p>
    </div>

  );
}

function MutualsCard({mutualPic, mutualName, mutualUni, mutualYear}) {
  return (
    <div className="friend_outer"> 
      <img src={mutualPic} className="friend_pic" alt={mutualName} />
      <p className="friend_info">{mutualName}<br></br> {mutualUni} ({mutualYear})</p> 
    </div>
  )
}



export default App
