const HTML_FOR_TYPE = `<article>
  <p>Meh cold-pressed four loko.</p>
  <p>Sriracha messenger bag chillwave.</p>
  <p>Live-edge raclette kombucha.</p>
  <span>Craft beer occupy polaroid.</span>
</article>`;

const BOX_MODEL_EXERCISES = [
  {
    selector: 'type',
    description: 'Type Selector: Make all paragraphs have red text',
    html: HTML_FOR_TYPE,
    correctAnswer: {
      selector: 'p',
      declarations: ['color:red']
    }
  }
];

export default BOX_MODEL_EXERCISES;
