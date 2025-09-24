import React, { useState } from "react";
import { questions } from "./faq1";

export default function Faqs2() {
  let [currentId, setCurrentId] = useState(questions[0].id);
  let items = questions.map((itemsData, i) => {
    let itemsDetails = {
      itemsData,
      currentId,
      setCurrentId,
    };
    return <FaqItems itemsDetails={itemsDetails} key={i} />;
  });
  return (
    <div>
      <h1>Frequently Asked Questions(FAQs)</h1>
      <div className="faqOuter">{items}</div>
    </div>
  );
}
function FaqItems({ itemsDetails }) {
  let { itemsData, currentId, setCurrentId } = itemsDetails;

  return (
    <div className="faqItems">
      <h1 onClick={() => setCurrentId(itemsData.id)}>{itemsData.question}</h1>
      <p className={currentId === itemsData.id ? "activeAns" : ""}>
        {itemsDetails.itemsData.answer}
      </p>
    </div>
  );
}
