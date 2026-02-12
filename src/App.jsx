import { useRef, useState } from "react";
import { Heart, HeartCrack } from "lucide-react";
import "./App.css";

const NO_MESSAGES = [
   "Itna bhi kya sochna... bas haan keh do 💞",
  "Mera dil sirf tumhara hai 💖",
  "Please mana mat karo... 🥹",
  "Ek choti si haan meri duniya badal degi 🌍❤️",
  "Dil ko itna intezar mat karao ⏳💔",
  "Tumhari ek smile sab theek kar deti hai 😊💕",
  "Abhi bhi waqt hai... haan keh do ✨",
  "Mujhe reject mat karo, it hurts 😔❤️",
  "Tum bina sab adhura sa lagta hai 💫",
  "Bas ek baar haan bol do... please 🥺💗",
  "Dil se pooch lo, jawab haan hi hoga 💓",
  "Itni berukhi achi nahi lagti 💔",
  "You mean more than you think 💝",
  "Mera dil fragile hai... sambhal ke 💞",
  "Kya sach mein no? Ek baar phir socho 🥺",
  "Are you sure? 🥺",
  "Think again! 💔",
  "Pehle haan kaho! ✨",
  "Dil tod diya... 😭",
  "Don't do this! ❤️‍🩹",
  "Wrong answer! 🚫",
];

function App() {
  const noRef = useRef(null);
  const [yesClicked, setYesClicked] = useState(false);
  const [guiltMessage, setGuiltMessage] = useState("");

  const moveButton = () => {
    const button = noRef.current;
    // Limit movement to a 200px radius so it stays near the Yes button
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 150) - 75;

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
    setGuiltMessage(
      NO_MESSAGES[Math.floor(Math.random() * NO_MESSAGES.length)],
    );
  };

  if (yesClicked) {
    return (
      <div className="container success-view">
        <div className="card">
          <div className="final-card">
            <div className="image-frame">
              <img
                src="https://ai-image-upload-30-min.s3.eu-north-1.amazonaws.com/uploads/2b93e2c2-c23e-4498-9e35-7cebcbe76c71-happy-valentines-day-quotes-for-friends-lovers-valentine-quotes-friendship-love-couple-wallpaper-hd-25601440-wallpaper-preview.jpg"
                alt="Love"
              />
            </div>
            <h1 className="success-text">I knew you'd say Yes! ❤️</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Background Decor */}
      <div className="hearts-bg">
        {[...Array(15)].map((_, i) => (
          <Heart key={i} className="bg-heart" size={Math.random() * 30 + 10} />
        ))}
      </div>

      <div className="card">
        <h2 className="title">Happy Valentine's Day</h2>
        <p className="subtitle">My Dearest Love</p>

        <div className="message-area">
          <p>All I want in my life</p>
          <span className="highlight-text">is YOU...</span>
        </div>

        <div className="guilt-box">
         <p className="guilt-text">{guiltMessage && <span>{guiltMessage}</span>}</p> 
        </div>

        <div className="btn-wrapper">
          <button className="yes-btn" onClick={() => setYesClicked(true)}>
            Yes <Heart size={18} fill="currentColor" />
          </button>
          <button ref={noRef} className="no-btn" onMouseEnter={moveButton}>
            No <HeartCrack size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
