export interface faq {
  questionNumber: number;
  question: string;
  answer: string;
}

export interface AccordionProps {
  title: string;
  faqList: faq[];
}

export interface IAccordionItemProps {
  question: string;
  answer: string;
  openState: boolean;
}
