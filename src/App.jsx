import { useState } from "react";
import lookingface from "./assets/lookingface.jpg";
import suscat from "./assets/suscat.jpg";
import "./App.css";
 
function App() {
  const [password, setPassword] = useState("");
  const correctPassword = "1015"; // change this to Maggie's birthday

  const handleNumber = (number) => {
    if (password.length < 4) {
      setPassword(password + number);
    }
  };

  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };

  const handleSubmit = () => {
    if (password === correctPassword) {
      alert("WELCOME PRINCESS ♡");
      // Later this will trigger your first popup!
    } else {
      alert("WHO ARE YOU 🤨");
      setPassword("");
    }
  };

  return (
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
                ←
              </button>

              <button onClick={() => handleNumber("0")}>
                0
              </button>

              <button onClick={handleSubmit}>
                ♡
              </button>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="side-image right-image">
            <img src={lookingface} alt="" />
            <p>what's the<br />password!!!</p>
          </div>

        </div>

      </section>
    </main>
  );
}

export default App;