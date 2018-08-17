const HTML_FOR_TYPE = `<div class="level1-1">
  <p>Meh cold-pressed four loko.</p>
  <p>Sriracha messenger bag chillwave.</p>
  <p>Photo booth iceland crucifix kitsch.</p>
  <span>Craft beer occupy polaroid.</span>
</div>`;
const HTML_FOR_ID = `<div class="level1-2">
  <p>Meh cold-pressed four loko.</p>
  <p>Sriracha messenger bag chillwave.</p>
  <p>Photo booth iceland crucifix kitsch.</p>
  <span>Craft beer occupy polaroid.</span>
</div>`;
const HTML_FOR_CLASS = `<div class="level1-3">
  <p>Meh cold-pressed four loko.</p>
  <p>Sriracha messenger bag chillwave.</p>
  <p>Photo booth iceland crucifix kitsch.</p>
  <span>Craft beer occupy polaroid.</span>
</div>`;
const HTML_FOR_ATTRIBUTE = `<div class="level1-4">
  <p>Meh cold-pressed four loko.</p>
  <p>Sriracha messenger bag chillwave.</p>
  <p>Photo booth iceland crucifix kitsch.</p>
  <span>Craft beer occupy polaroid.</span>
</div>`;
const HTML_FOR_DESCENDANT = `<div class="level1-5">
  <p>Meh cold-pressed four loko.</p>
  <p>Sriracha messenger bag chillwave.</p>
  <p>Photo booth iceland crucifix kitsch.</p>
  <span>Craft beer occupy polaroid.</span>
</div>`;

const SELECTOR_EXERCISES = [
  { selector: 'type', text: 'Type Selector: Make all paragraphs red', html: HTML_FOR_TYPE },
  { selector: 'id', text: 'ID Selector: Make all paragraphs red', html: HTML_FOR_ID },
  { selector: 'class', text: 'Class Selector: Make all paragraphs red', html: HTML_FOR_CLASS },
  { selector: 'attribute', text: 'Attribute Selector: Make all paragraphs red', html: HTML_FOR_ATTRIBUTE },
  { selector: 'descendant', text: 'Descendant Selector: Make all paragraphs red', html: HTML_FOR_DESCENDANT }
];

export default SELECTOR_EXERCISES;
