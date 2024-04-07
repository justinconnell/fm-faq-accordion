import { FC } from "react";
import "./Accordion.css";
import { AccordionProps } from "../../types/App.types";
import Star from "../../assets/images/icon-star.svg";
import AccordionItem from "./AccorionItem";

const Accordion: FC<AccordionProps> = ({ title, faqList }) => {
  return (
    <>
      <header className="header">
        <img className="icon" src={Star} alt="" />
        <h1>{title}</h1>
      </header>
      <section className="accordion">
        <ul>
          {faqList.map(({ questionNumber, question, answer }) => {
            return (
              <AccordionItem
                key={questionNumber}
                question={question}
                answer={answer}
                openState={questionNumber === 1 ? true : false}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Accordion;
