import { useState } from "react";
import PopupWindow from "./components/PopupWindow";
import lookingface from "./assets/lookingface.jpg";
import suscat from "./assets/suscat.jpg";
import princess from "./assets/princess.jpg";
import horse from "./assets/horse.jpg";
import cute from "./assets/cute.png";
import crown from "./assets/crown.png";
import dancingCat from "./assets/cat-cat-dance.gif";

import BirthdayPage from "./components/BirthdayPage";
import "./App.css";
 
function App() {
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [page, setPage] = useState("password");
  const [popupIndex, setPopupIndex] = useState(0);

  const handleNumber = (number) => {
    if (password.length < 4) {
      setPassword(password + number);
    }
  };

  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };

  const handleSubmit = () => {
    if (password === import.meta.env.VITE_BIRTHDAY_PASSWORD) {
      setError("");
      setPage("welcome");
    } else {
      setError("Who are you? 🤨");
      setPassword("");
    }
  };

  return (
     <>
    {page === "password" && (
      <main className="password-page">
        
      <section className="password-card">

        <div className="password-layout">

          {/* LEFT IMAGE */}
          <div className="side-image left-image">
            <img src={suscat} alt="" />
          </div>


          {/* PASSWORD */}
          <div className="password-center">

            <h1>Are you Maggie?</h1>

            <div className="password-display">
              {[0, 1, 2, 3].map((index) => (
                <div className="password-box" key={index}>
                  {password[index] ? "♥" : ""}
                </div>
              ))}
            </div>

            <div className="number-pad">

              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button
                  key={number}
                  onClick={() => handleNumber(number.toString())}
                >
                  {number}
                </button>
              ))}

              <button onClick={handleDelete}>
                X
              </button>

              <button onClick={() => handleNumber("0")}>
                0
              </button>

              <button onClick={handleSubmit}>
                Enter
              </button>

            </div>

            {error && (
              <p className="password-error">
                {error}
              </p>
            )}

          </div>


          {/* RIGHT IMAGE */}
          <div className="side-image right-image">
            <img src={lookingface} alt="" />
            <p>what's the<br />password!!!</p>
          </div>

        </div>

      </section>
      </main>
    )}

    {page === "welcome" && (
      <main className="welcome-page">

        {popupIndex === 0 && (
          <PopupWindow onNext={() => setPopupIndex(1)}>
            <h1>
              WELCOME
              <br />
              PRINCESS ♡
            </h1>

            <img
              className="popup-image princess-image"
              src={princess}
              alt=""
            />
          </PopupWindow>
        )}

        {popupIndex === 1 && (
          <PopupWindow onNext={() => setPopupIndex(2)}>
            <h2>
              I HEARD IT'S
              <br />
              SOMEONE'S
              <br />
              BIRTHDAY...
            </h2>

            <img
              className="popup-image horse-image"
              src={horse}
              alt=""
            />
          </PopupWindow>
        )}

        {popupIndex === 2 && (
          <PopupWindow onNext={() => setPopupIndex(3)}>
            <h2>
              SO...
              <br />
              I PUT TOGETHER
              <br />
              A LITTLE SOMETHING
              <br />
              FOR U ♡
            </h2>

            <img
              className="popup-image lookingface-image"
              src={cute}
              alt=""
            />
          </PopupWindow>
        )}

        {popupIndex === 3 && (
          <div className="final-popup-scene">

            <img
              src={dancingCat}
              alt="Dancing cat"
              className="dancing-cat"
            />

            <PopupWindow
              onNext={() => setPage("birthday")}
            >
              <h2>I HOPE U ENJOY IT!</h2>
              <p>Here's your birthday crown 👑</p>

            <img
              className="popup-image crown-image"
              src={crown}
              alt=""
            />

            </PopupWindow>

            <img
              src={dancingCat}
              alt=""
              className="dancing-cat"
            />

           </div>
          
        )}

      </main>
    )}
    {page === "birthday" && <BirthdayPage />}

  </>
);
}

export default App;