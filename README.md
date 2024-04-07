# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Preview](#preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Preview

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub repository](https://github.com/justinconnell/fm-faq-accordion)
- Live Site URL: [Live site](https://justinconnell.github.io/fm-faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - Frontend tooling.
- [React](https://react.dev/) - JavaScript library.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

### What I learned

Using standard HTML buttons automatically provides the ability for keyboard navigation, so the simplest way to achieve the navigation requirements was to employ standard buttons styled to match the design.

Although Vanilla JS could have been used for this project, TypeScript was selected because I am learning TypeScript and TypeScript also allows for defining typed properties as per the interfaces defined below:

```TypeScript

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

```

Separating the app into components reduces code complexity - in this solution the Accordion component is implemented with two simple components:

- Accordion:

```TypeScript
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
```

- AccordionItem:

```TypeScript
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
```

### Continued development

I will be learning more about TS and start employing Tailwind and possibly Shadcn going forward

### Useful resources

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - TypeScript reference.
- [Google web fonts helper](https://gwfh.mranftl.com/fonts) - convert Google fonts to WOFF 2.0 format.

## Author

- GitHub - [Justin](https://github.com/justinconnell)
- Frontend Mentor - [@justinconnell](https://www.frontendmentor.io/profile/justinconnell)
- Twitter - [@justin2code](https://twitter.com/justin2code)
