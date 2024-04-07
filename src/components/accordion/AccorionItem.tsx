import { useState } from "react";
import { IAccordionItemProps } from "../../types/App.types";
import "./AccordionItem.css";
import Plus from "../../assets/images/icon-plus.svg";
import Minus from "../../assets/images/icon-minus.svg";

const AccordionItem = ({
  question,
  answer,
  openState = false,
}: IAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(openState);

  return (
    <li className="accordion-item">
      <button className="accordion__title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{question}</h2>
        <img className="open-status" src={isOpen ? Minus : Plus} alt="" />
      </button>
      {isOpen && <p className="accordion__content">{answer}</p>}
    </li>
  );
};

export default AccordionItem;
