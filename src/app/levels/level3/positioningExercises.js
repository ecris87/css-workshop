const HTML = `<div class="plate">
  PLATE: I'm not positioned, just following the normal document flow :)
</div>
<div class="pie">
  PIE: I should be positioned 
</div>`;

const HTML_ABSOLUTE = `<div class="plate">
  <span>PLATE</span>
  <section>
    <div class="pie">PIE</div>
  </section>
</div>`;

const POSITIONING_EXERCISES = [
  {
    description: 'Relative Position: move "pie" up by 10px and to the right by 20px',
    descriptionDetails: `"relative" behaves the same as "static" (the default value) unless you add some extra 
    properties that will cause it to be adjusted away from its normal position.`,
    html: HTML,
    correctAnswer: {
      selector: '.pie',
      declarations: ['position:relative', 'left:20px', 'top:-10px']
    }
  },
  {
    description: 'Fixed Position: move "pie" so that its 10px from the bottom of the page, and right is set to 0',
    descriptionDetails: `A "fixed" element is positioned relative to the viewport, which means it always stays in the 
    same place even if the page is scrolled.`,
    html: HTML,
    correctAnswer: {
      selector: '.pie',
      declarations: ['position:fixed', 'bottom:10px', 'right:0']
    }
  },
  {
    description: 'Absolute Position: horizontally and vertically center "pie" inside of "plate"',
    descriptionDetails: `"absolute" is the trickiest position value. It behaves like "fixed" except relative to the 
    nearest positioned ancestor instead of relative to the viewport. If an absolutely-positioned element has no positioned 
    ancestors, it uses the document body, and still moves along with page scrolling.`,
    html: HTML_ABSOLUTE,
    correctAnswer: [
      {
        selector: '.plate',
        declarations: ['position:relative']
      },
      {
        selector: '.pie',
        declarations: ['position:absolute', 'top:50%', 'left:50%', 'transform:translate(-50%, -50%)']
      }
    ]
  },
  {
    description: 'Sticky Position',
    descriptionDetails: `A "sticky" element toggles between "relative" and "fixed", depending on the user's scroll 
    position. It is positioned relative until a given offset position is met in the viewport - then it sticks in 
    place (like position: fixed).`,
    html: HTML
  }
];

export default POSITIONING_EXERCISES;
