const HTML_FOR_TYPE = `<article>
  <p>Meh cold-pressed four loko.</p>
  <p>Sriracha messenger bag chillwave.</p>
  <p>Live-edge raclette kombucha.</p>
  <span>Craft beer occupy polaroid.</span>
</article>`;
const HTML_FOR_ID = `<article>
  <p>Meh cold-pressed four loko.</p>
  <p id="fancy">Sriracha messenger bag chillwave.</p>
  <p>Live-edge raclette kombucha.</p>
  <span>Craft beer occupy polaroid.</span>
</article>`;
const HTML_FOR_CLASS = `<article>
  <p class="fancy">Meh cold-pressed four loko.</p>
  <p>Live-edge raclette kombucha.</p>
  <p class="fancy">Sriracha messenger bag chillwave.</p>
  <p>Photo booth adaptogen master cleanse.</p>
</article>`;
const HTML_FOR_ATTRIBUTE = `<input type="number" value="1" />
<input type="text" placeholder="Gertrude Stein" />
<input type="email" disabled placeholder="gertrude@fancykittens.com" />
<input type="password" placeholder="password" />`;
const HTML_FOR_DESCENDANT = `<article>
  <p>Meh cold-pressed four loko.</p>
  <p>Sriracha messenger bag chillwave.</p>
  <section>
    <p>Photo booth adaptogen master cleanse.</p>
    <p>Etsy portland knausgaard affogato.</p>
  </section>
</article>`;
const HTML_FOR_DESCENDANT_AND_ID = `<article>
  <section>
    <p>Meh cold-pressed four loko.</p>
    <p>Sriracha messenger bag chillwave.</p>
  </section>
  <section id="cool">
    <p>Photo booth adaptogen master cleanse.</p>
    <p>Etsy portland knausgaard affogato.</p>
  </section>
</article>`;
const HTML_FOR_CLASS_AND_TYPE = `<article>
  <section class="fancy">
    <p>Meh cold-pressed four loko.</p>
    <p>Sriracha messenger bag chillwave.</p>
  </section>
  <ul class="fancy">
    <li>Photo booth adaptogen master cleanse.</li>
    <li>Etsy portland knausgaard affogato.</li>
  </ul>
</article>
`;
const HTML_FOR_COMMA_AND_UNI = `<h3>Meh cold-pressed four loko.</h3>
<h4>Sriracha messenger bag chillwave.</h4>
<h5>Photo booth adaptogen master cleanse.</h5>
<div>Etsy portland knausgaard affogato.</div>
<div class="fancy">Craft beer occupy polaroid.</div>
`;
const HTML_FOR_SIBLING = `<article>
  <p>Paragraph 1</p>
  <section class="fancy">Section 1</section>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
  <section>Section 2</section>
  <p>Paragraph 4</p>
</article>
`;
const HTML_FOR_CHILD = `<article>
  <section class="cool">
    Cool Section
    <p>Paragraph 1</p>
    <section>
      Inner Section
      <p>Paragraph 2</p>
      <p>Paragraph 3</p>
    </section>
  </section>
  <section>
    Uncool section
    <p>Paragraph 4</p>
  </section>
</article>
`;

const SELECTOR_EXERCISES = [
  {
    selector: 'type',
    description: 'Type Selector: Make all paragraphs have red text',
    html: HTML_FOR_TYPE,
    correctAnswer: {
      selector: 'p',
      declarations: ['color:red']
    }
  },
  {
    selector: 'id',
    description: 'ID Selector: Make the "fancy" paragraphs have blue, center-aligned text',
    html: HTML_FOR_ID,
    correctAnswer: {
      selector: '#fancy',
      declarations: ['color:blue', 'text-align:center']
    }
  },
  {
    selector: 'class',
    description: 'Class Selector: Convert the letters from the "fancy" paragraphs to uppercase',
    html: HTML_FOR_CLASS,
    correctAnswer: {
      selector: '.fancy',
      declarations: ['text-transform:uppercase']
    }
  },
  {
    selector: 'attribute',
    description: 'Attribute Selector: Make all disabled inputs have italic text',
    html: HTML_FOR_ATTRIBUTE,
    correctAnswer: {
      selector: 'input[disabled]',
      declarations: ['font-style:italic']
    }
  },
  {
    selector: 'attribute_value',
    description: 'Attribute Value Selector: Make all text inputs have a red background',
    html: HTML_FOR_ATTRIBUTE,
    correctAnswer: {
      selector: 'input[type="text"]',
      declarations: ['background:red', 'background-color:red']
    }
  },
  {
    selector: 'descendant',
    description: 'Descendant Selector: Make all paragraphs inside the section have red text',
    html: HTML_FOR_DESCENDANT,
    correctAnswer: {
      selector: 'section p',
      declarations: ['color:red']
    }
  },
  {
    selector: 'descendant_and_id',
    description: 'Combined ID & Descendant: Make all paragraphs inside the "cool" section have 30px text',
    html: HTML_FOR_DESCENDANT_AND_ID,
    correctAnswer: {
      selector: '#cool p',
      declarations: ['font-size:30px']
    }
  },
  {
    selector: 'class_and_type',
    description: 'Combined Class & Type: Add padding of 30px to the "fancy" list',
    html: HTML_FOR_CLASS_AND_TYPE,
    correctAnswer: {
      selector: 'ul.fancy',
      declarations: ['padding:30px']
    }
  },
  {
    selector: 'comma',
    description: 'Comma Combinator: Change text color to red for all the headings, the "fancy" div',
    html: HTML_FOR_COMMA_AND_UNI,
    correctAnswer: {
      selector: 'h4, h5, .fancy',
      declarations: ['color:red']
    }
  },
  {
    selector: 'universal',
    description: 'Universal Selector: Make every text on the page underlined',
    html: HTML_FOR_COMMA_AND_UNI,
    correctAnswer: {
      selector: '*',
      declarations: ['text-decoration:underline']
    }
  },
  {
    selector: 'universal_combined',
    description: 'Universal Combined: Make every text inside the section underlined',
    html: HTML_FOR_CLASS_AND_TYPE,
    correctAnswer: {
      selector: 'section *',
      declarations: ['text-decoration:underline']
    }
  },
  {
    selector: 'sibling_adjacent',
    description: 'Adjacent Sibling Selector: Underline paragraphs that directly follow a section',
    html: HTML_FOR_SIBLING,
    correctAnswer: {
      selector: 'section + p',
      declarations: ['text-decoration:underline']
    }
  },
  {
    selector: 'sibling_general',
    description: 'General Sibling Selector: Underline every paragraph that follows a section',
    html: HTML_FOR_SIBLING,
    correctAnswer: {
      selector: 'section ~ p',
      declarations: ['text-decoration:underline']
    }
  },
  {
    selector: 'child_selector',
    description: 'Child Selector: Underline every paragraph that is a direct child of "cool" section',
    html: HTML_FOR_CHILD,
    correctAnswer: {
      selector: '.cool > p',
      declarations: ['text-decoration:underline']
    }
  }
];

export default SELECTOR_EXERCISES;
