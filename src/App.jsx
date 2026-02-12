import { useRef, useState } from "react";
import { Heart, HeartCrack } from "lucide-react";
import "./App.css";

const NO_MESSAGES = [
  "Itna bhi kya sochna... bas haan keh do 💞", "Mera dil sirf tumhara hai 💖",
  "Please mana mat karo... 🥹", "Ek choti si haan meri duniya badal degi 🌍❤️",
  "Dil ko itna intezar mat karao ⏳💔", "Tumhari ek smile sab theek kar deti hai 😊💕",
  "Abhi bhi waqt hai... haan keh do ✨", "Mujhe reject mat karo, it hurts 😔❤️",
  "Tum bina sab adhura sa lagta hai 💫", "Bas ek baar haan bol do... please 🥺💗",
  "Dil se pooch lo, jawab haan hi hoga 💓", "Itni berukhi achi nahi lagti 💔",
  "You mean more than you think 💝", "Mera dil fragile hai... sambhal ke 💞",
  "Kya sach mein no? Ek baar phir socho 🥺", "Are you sure? 🥺",
  "Think again! 💔", "Pehle haan kaho! ✨", "Dil tod diya... 😭",
  "Don't do this! ❤️‍🩹", "Wrong answer! 🚫",
];

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [guiltMessage, setGuiltMessage] = useState("");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const moveButton = (e) => {
    // Prevent default touch behavior to stop accidental clicks
    if (e && e.cancelable) e.preventDefault();
    
    const isMobile = window.innerWidth < 600;
    const range = isMobile ? 120 : 200; // Smaller range for mobile screens

    const randomX = Math.floor(Math.random() * range) - (range / 2);
    const randomY = Math.floor(Math.random() * range) - (range / 2);

    setCoords({ x: randomX, y: randomY });
    setGuiltMessage(NO_MESSAGES[Math.floor(Math.random() * NO_MESSAGES.length)]);
  };

  if (yesClicked) {
    return (
      <div className="container success-view">
        <div className="card success-card">
          <div className="final-card">
            <div className="image-frame">
              {/* Using your provided couple image */}
              <img src="/out-3.jpg" alt="Love" />
            </div>
            <h1 className="success-text">I knew you'd say Yes! ❤️</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
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
          <p className="guilt-text">{guiltMessage || "Will you be mine?"}</p> 
        </div>

        <div className="btn-wrapper">
          <button className="yes-btn" onClick={() => setYesClicked(true)}>
            Yes <Heart size={18} fill="currentColor" />
          </button>
          <button 
            className="no-btn" 
            style={{ transform: `translate(${coords.x}px, ${coords.y}px)` }}
            onPointerDown={moveButton} // Works for BOTH touch and mouse
            onMouseEnter={moveButton}  // Backup for desktop
            onClick={(e) => e.preventDefault()} // Blocks the actual click
          >
            No <HeartCrack size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;