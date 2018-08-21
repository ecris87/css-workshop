const HTML = `<div class="ben" style="width: 300px; background: papayawhip;">
  Hi! I'm supposed to be 300px.
</div>
<div class="jerry" style="width: 300px; background: thistle;">
  I should also be 300px.
</div>`;

const BOX_MODEL_EXERCISE = {
  description: `For the first div - "ben", apply 30px padding and a margin of 20px. 
  For the second div - "jerry", add a 20px margin and a 1px black border. Ensure both remain 300px wide.`,
  html: HTML,
  correctAnswer: [
    {
      selector: '.ben',
      rules: [{ prop: 'padding', value: '30px' }, { prop: 'margin', value: '20px' }]
    },
    {
      selector: '.jerry',
      rules: [{ prop: 'border', value: '1px solid black' }, { prop: 'margin', value: '20px' }]
    }
  ]
};

export default BOX_MODEL_EXERCISE;
