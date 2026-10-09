import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import maggie from "../assets/maggie.png";
import drawing from "../assets/drawing.png";
import timelapse from "../assets/timelapse.mp4";
import "./BirthdayPage.css";

function BirthdayPage() {
    const [showDrawing, setShowDrawing] = useState(false);
    useEffect(() => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) return;

  confetti({
    particleCount: 140,
    spread: 100,
    startVelocity: 35,
    gravity: 0.85,
    scalar: 0.9,
    ticks: 220,

    origin: {
      x: 0.5,
      y: 0.45,
    },

    colors: [
      "#7486A3", 
      "#B98191", 
      "#E7DECC", 
      "#D9B978", 
      "#A3B79B", 
    ],
  });
}, []);
  return (
    <main className="birthday-home">
      <header className="birthday-header">
        <span>♡ Maggie's day</span>
        <span>✿ 2026</span>
      </header>

      <section className="birthday-hero">
        <p className="birthday-eyebrow">
          ✧ A special day for the best girl ✧
        </p>

        <h1>Happy Birthday!</h1>

        <div className="birthday-photo">
            <img src={maggie} alt="Maggie" />
        </div>

        {/* FLOATING DECORATIONS */}
        <div className="birthday-decorations" aria-hidden="true">
          <span className="birthday-balloon balloon-one"></span>
          <span className="birthday-balloon balloon-two"></span>
          <span className="birthday-balloon balloon-three"></span>

          <span className="floating-icon icon-one">✧</span>
          <span className="floating-icon icon-two">♡</span>
          <span className="floating-icon icon-three">✿</span>
          <span className="floating-icon icon-four">✦</span>
          <span className="floating-icon icon-five">♡</span>
        </div>

        <p className="birthday-subtitle">
            - ♡ Maggie ♡ -
        </p>
      </section>
        
    {/* POLAROID + BIRTHDAY MESSAGE */}
    <section className="birthday-memory-section">

    <button
        type="button"
        className="memory-polaroid"
        onClick={() => setShowDrawing(true)}
        aria-label="Open our drawing"
    >
        <div className="polaroid-image-frame">
            <img src={drawing} alt="Drawing of us together" />
        </div>
        <span className="polaroid-caption">June 28, 2025</span>
    </button>

    <div className="birthday-letter">
        <h2>Hi Maggieee, ♡</h2>

        <p>
        Happy birthday to the best girl!
        I'm so grateful for all our memories together.
        </p>

        <p>
        I hope this year brings you so much happiness,
        laughter, and exciting adventures.
        </p>

        <p className="letter-signature">
        From Mariiii, ♡
        </p>
        <p className="letter-ps">
        P.S. I miss you so so much!! I really hope we get to see each other again sometime soon.
        <br/>
        Tap the pic to see timelapse of the drawing hehe ^_^
        </p>
    </div>

    </section>
    
    {/* DRAWING TIMELAPSE */}
    {showDrawing && (
    <div
        className="drawing-overlay"
        onClick={() => setShowDrawing(false)}
    >
        <div
        className="drawing-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Drawing timelapse"
        onClick={(event) => event.stopPropagation()}
        >
        <button
            type="button"
            className="drawing-close"
            onClick={() => setShowDrawing(false)}
            aria-label="Close video"
        >
            ×
        </button>

        <h2>Watch me draw us! ♡</h2>

        <video
            src={timelapse}
            controls
            autoPlay
            playsInline
            preload="metadata"
            poster={drawing}
        >
            Your browser does not support video playback.
        </video>
        </div>
    </div>
    )}
    <div className="birthday-youtube">
        <iframe
            src="https://www.youtube.com/embed/5qm8PH4xAss?start=45&end=59&autoplay=1"
            title="50 Cent - In Da Club"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />
    </div>
    <footer className="birthday-header">
        <span>♡ love youuuu</span>
        <span>✿ Made with lots of love</span>
    </footer>

    </main>
  );
}

export default BirthdayPage;
