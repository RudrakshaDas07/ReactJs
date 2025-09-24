import "./App.css";
import { useState } from "react";
import { questions } from "./data/faq1";
import Faqs2 from "./data/Faqs2";
import { faBars, faCancel, faCross, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDochub, faLine, faThreads } from "@fortawesome/free-brands-svg-icons";
import { faBarChart, faSquare } from "@fortawesome/free-regular-svg-icons";

function App() {
  let [showAns, setShowAns] = useState(questions[0].id);
  let [modalStatus, setModalStatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="App">
      {/*FAQ2
      <Faqs2 />*/}
      {/*FAQ1
      <div>
        <h1>Frequently Asked Questions(FAQs)</h1>
        <div className="faqOuter">
          {questions.map((faqitems, i) => {
            return (
              <div className="faqItems">
                <h2 onClick={() => setShowAns(faqitems.id)}>
                  {faqitems.question}
                </h2>
                <p className={showAns == faqitems.id ? "activeAns" : ""}>
                  {faqitems.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>*/}
      {/* Modal
      <button className="en" onClick={() => setModalStatus(true)}>
        Enquire Now
      </button>
      <div className={`modalOverlay ${modalStatus ? "modalShow" : ""}`}></div>
      <div className={`Modaldiv ${modalStatus ? "divShow" : ""}`}>
        <h3>
          Enquire now
          <span onClick={() => setModalStatus(false)}>
            <FontAwesomeIcon icon={faRemove} />
          </span>
        </h3>
      </div> */}
     {/* Menu
      <button className="micon" onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? (
          <span>
            <FontAwesomeIcon icon={faRemove} />
          </span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        )}
      </button>
      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div> */}
    </div>
  );
}

export default App;
