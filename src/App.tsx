import "./App.css";
import Accordion from "./components/accordion/Accordion";
import { faq } from "./types/App.types";
import FAQs from "./data/faqs";

function App() {
  const faqs: faq[] = FAQs;

  return (
    <main>
      <div className="wrap-layer">
        <section className="card">
          <Accordion title="FAQs" faqList={faqs}></Accordion>
        </section>
      </div>
    </main>
  );
}

export default App;
