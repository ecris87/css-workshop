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
<input type="email" placeholder="gertrude@fancykittens.com" />
<input type="password" placeholder="password" />`;
const HTML_FOR_DESCENDANT = `<article>
  <p>Meh cold-pressed four loko.</p>
  <p>Sriracha messenger bag chillwave.</p>
  <section>
    <p>Photo booth adaptogen master cleanse.</p>
    <p>Etsy portland knausgaard affogato.</p>
  </section>
</article>`;

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
    description: 'Attribute Selector: Make all text inputs have a red background',
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
  }
];

export default SELECTOR_EXERCISES;
