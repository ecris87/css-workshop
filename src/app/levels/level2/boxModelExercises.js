const HTML = `<div class="ben">
  Hi! I'm supposed to be 300px.
</div>
<div class="jerry">
  I should also be 300px.
</div>`;

const BOX_MODEL_EXERCISE = {
  description: `For the first div - "ben", apply 30px padding and a margin of 20px. 
  For the second div - "jerry", add a 20px margin and a 5px black border. Ensure both remain 300px wide.`,
  html: HTML,
  correctAnswer: {
    expectedWidth: 300,
    expectedPadding: '30px',
    expectedBorder: '5px'
  }
};

export default BOX_MODEL_EXERCISE;
