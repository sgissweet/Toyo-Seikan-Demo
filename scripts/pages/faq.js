
import { faqData } from "../data/faqs.js";

const faqAccordion = document.getElementById("faqAccordion");

faqData.forEach((item) => {

  const faqItem = `
    <div class="accordion-item mb-3 border rounded">
      
      <h2 class="accordion-header">
        <button 
          class="accordion-button ${item.show ? "" : "collapsed"}" 
          type="button"
          data-bs-toggle="collapse" 
          data-bs-target="#${item.id}">
          
          ${item.question}
        </button>
      </h2>

      <div 
        id="${item.id}" 
        class="accordion-collapse collapse ${item.show ? "show" : ""}"
        data-bs-parent="#faqAccordion">

        <div class="accordion-body">
          ${item.answer}
        </div>

      </div>
    </div>
  `;

  faqAccordion.innerHTML += faqItem;
});