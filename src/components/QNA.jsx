import React, { useState } from "react";
import './QNA.css'; // Make sure to rename your CSS file

const qnaData = [
  { question: "What is the fee for Patient Examination?", answer: "The private fee starts from £53.00. It's included in both Denplan Care and Denplan Essentials." },
  { question: "How much does a Private Cosmetic Consultation cost?", answer: "A Private Cosmetic Consultation starts from £175.00. This is not included in Denplan Care or Denplan Essentials." },
  { question: "What's the cost for a Private Implant Consultation?", answer: "A Private Implant Consultation starts from £175.00. This is not included in Denplan Care or Denplan Essentials." },
  { question: "How much does a Private Endodontic Consultation cost?", answer: "A Private Endodontic Consultation starts from £175.00. This is not included in Denplan Care or Denplan Essentials." },
  { question: "What's the fee for CBCT Scanner & Scans?", answer: "CBCT Scanner & Scans start from £206.00. This is not included in Denplan Care or Denplan Essentials." },
  { question: "How much do Routine X-rays cost?", answer: "Routine X-rays start from £18.50. They are included in both Denplan Care and Denplan Essentials." },
  { question: "What's the cost for Non-Routine X-rays?", answer: "Non-Routine X-rays start from £18.50. They are included in Denplan Care but not in Denplan Essentials." },
  { question: "How much do Fillings cost?", answer: "Fillings start from £128.00. They are included in Denplan Care but not in Denplan Essentials." },
  { question: "What's the fee for Root Canal Fillings?", answer: "Root Canal Fillings start from £215.00. They are included in Denplan Care but not in Denplan Essentials." },
  { question: "How much do Crowns cost?", answer: "Crowns start from £574.00. For Denplan Care, only the lab fee is charged. They are not included in Denplan Essentials." },
  { question: "What's the cost for Dentures?", answer: "Dentures start from £668.00. For Denplan Care, only the lab fee is charged. They are not included in Denplan Essentials." },
  { question: "How much does a Hygienist consultation cost?", answer: "A Hygienist consultation (45 mins) costs £96.00. It's included in both Denplan Care and Denplan Essentials." },
  { question: "What's the cost for Invisalign treatment?", answer: "Invisalign treatment ranges from £3,638.00 to £4,995.00 for both arches. This is not applicable to Denplan Care or Denplan Essentials." }
];

export const QnA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="qna" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          {/* <p className="intro-text">
            Fees correct as of February 1st 2024<br /><br />
            The fees mentioned below are for guidelines only and are subject to change at the discretion of the Practice.<br />
            Before any treatments take place, you will be supplied with a written treatment plan, including costs.<br /><br />
            If the practice is closed and you have an emergency, please call NHS England's Triage Service on 111
          </p> */}
        </div>
        <div className="qna-list">
          {qnaData.map((item, index) => (
            <div key={index} className="qna-item">
              <div className="question" onClick={() => toggleQuestion(index)}>
                {item.question}
                <span className={`arrow ${activeIndex === index ? 'active' : ''}`}>▼</span>
              </div>
              {activeIndex === index && (
                <div className="answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="section-footer">
          {/* <p>
            The fees mentioned above are for guidance only and are subject to change. Please contact us for the most up-to-date information.<br />
            If you have an emergency and the practice is closed, please call NHS England's Triage Service on 111.
          </p> */}
        </div>
      </div>
    </div>
  );
};