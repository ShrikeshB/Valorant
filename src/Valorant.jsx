import style from "./style/style.css";
import raze from "./resources/raze.png";
import sage from "./resources/sage.png";
import jett from "./resources/jett.png";
import cypher from "./resources/cypher.png";
import omen from "./resources/omen.png";
import logo from "./resources/logo.png";
import { useRef, useState } from "react";

function Valorant() {
  const c1 = useRef();
  const c2 = useRef();
  const c3 = useRef();
  const c4 = useRef();
  const c5 = useRef();
  const [bgColor, setbgColor] = useState("#FF7233");
  const [title, settitle] = useState("RAZE");

  const expand = (cardId, title) => {
    settitle(title);
    cardId.current.className = "card active";
    // if(prev != cardId)
    // prev.current.className = "card";
    // prev = cardId;

    if (cardId == c1) {
      //raze
      c2.current.className = "card";
      c3.current.className = "card";
      c4.current.className = "card";
      c5.current.className = "card";
      setbgColor("#FF7233");
    } else if (cardId == c2) {
      //sage
      c1.current.className = "card";
      c3.current.className = "card";
      c4.current.className = "card";
      c5.current.className = "card";
      setbgColor("#11D0AA");
    } else if (cardId == c3) {
      // jett
      c2.current.className = "card";
      c1.current.className = "card";
      c4.current.className = "card";
      c5.current.className = "card";
      setbgColor("#74B5BB");
    } else if (cardId == c4) {
      c2.current.className = "card";
      c3.current.className = "card";
      c1.current.className = "card";
      c5.current.className = "card";
      setbgColor("#BDBDC8");
    } else if (cardId == c5) {
      c2.current.className = "card";
      c3.current.className = "card";
      c4.current.className = "card";
      c1.current.className = "card";
      setbgColor("#6868E1");
    }
  };

  return (
    <section>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="bg">
        <div className="left" style={{ backgroundColor: bgColor }}>
          <h1>{title}</h1>
          <h1>AGENTS</h1>
        </div>
        <div class="shape" style={{ backgroundColor: bgColor }}>
          <div className="content">
            <h1>...</h1>
            <h1>...</h1>
          </div>
        </div>
      </div>

      <div className="cards">
        <div
          className="card active"
          ref={c1}
          onMouseOver={(e) => {
            expand(c1, "raze");
          }}
        >
          <div className="img-container">
            <img src={raze} alt="" />
          </div>

          <div className="content">
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              molestiae quis eveniet cum nihil magni.
            </p>
          </div>
        </div>

        <div
          onMouseOver={(e) => {
            expand(c2, "sage");
          }}
          className="card"
          ref={c2}
        >
          <div className="img-container">
            <img src={sage} alt="" />
          </div>
          <div className="content">
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              molestiae quis eveniet cum nihil magni.
            </p>
          </div>
        </div>

        <div
          className="card"
          onMouseOver={(e) => {
            expand(c3, "jett");
          }}
          ref={c3}
        >
          <div className="img-container">
            <img src={jett} alt="" />
          </div>
          <div className="content">
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              molestiae quis eveniet cum nihil magni.
            </p>
          </div>
        </div>

        <div
          className="card"
          onMouseOver={(e) => {
            expand(c4, "cypher");
          }}
          ref={c4}
        >
          <div className="img-container">
            <img src={cypher} alt="" />
          </div>
          <div className="content">
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              molestiae quis eveniet cum nihil magni.
            </p>
          </div>
        </div>
        <div
          className="card"
          onMouseOver={(e) => {
            expand(c5, "omen");
          }}
          ref={c5}
        >
          <div className="img-container">
            <img src={omen} alt="" />
          </div>
          <div className="content">
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              molestiae quis eveniet cum nihil magni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Valorant;
