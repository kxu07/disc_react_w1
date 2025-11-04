import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import miffy_moon from '/miffy_moon.jpg';
import miffy_birthday from '/miffy_birthday.jpg';
import miffy_flowers from '/miffy_flowers.jpg';
import miffy_music from '/miffy_music.jpg';
import miffy_vacation from '/miffy_vacation.jpg';
import pink_heart from '/pink_heart.webp';
import boris from '/boris.jpg';
import melanie from '/melanie.jpg';
import snuffy from '/snuffy.jpg';
import NavBar from './NavBar';

function App() {
  const [count, setCount] = useState(0)
  
  /* only run the effect on the initial render  */
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <div className="schoolbell-regular">
          <NavBar>testing </NavBar>
          <Link to="/">Profile Page</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
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

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async() => {
      try {
        const res = await fetch('http://localhost:3005/users');
        const data = await res.json();
        (data) => data.forEach(element => {
          console.log(element)})
        setPeople(data);
      } catch (e) {
        console.error("error getting people", e);
      }
    }

    fetchPeople();
  }, []);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    /*
    <div className="post_outer">
      <img src={postImage} className="post_photo" alt={postText} />
      <button onClick={handleClick} className='like_button'><img src={pink_heart} alt="like button" width="25"/> {count} </button>
      <p className="schoobell-regular"><br></br>{postText}</p>
    </div>*/
      <div className="post_outer">
        {people.map((person) => (
          <div>
            <img src={boris} className="post_photo" alt={person.first_name} />
            <button onClick={handleClick} className='like_button'><img src={pink_heart} alt="like button" width="25"/> {count} </button>
            <p className="schoobell-regular"><br></br>{person.first_name}<br></br>email: {person.email}</p>
          </div>
        ))}
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

function Home() {

  const [people, setPeople] = useState([])

  return (
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
          <PostCards></PostCards>
        </div>
      </div>
  );
}

function About() {
  return <div className="schoolbell-regular"><h2>About Page</h2></div>;
}

function Contact() {
  return <div className="schoolbell-regular"><h2>Contact Page</h2></div>;
}



export default App
