const HTML_INLINE_STYLE = `<html>
<head>
  <style>
    #nav-id > ul > li > a.nav-link { 
      color: blue;
    }
  </style> 
</head>
<body>
  <nav id="nav-id">
	<ul> 
	 <li>
      <a class="nav-link" href="/" 
       style="color: red;">
		   Link
      </a>
	 </li>
	</ul>
  </nav>
</body> 
</html>`;

const HTML_ID = `
<section id="article-section">
  <h3>SECTION</h3>
  <p class="article-paragraph">Some text</p>
</section>
`;

const CSS_ID = `/* style.css */

#article-section p {
  font-size: 100px;
}

p.article-paragraph {
  font-size: 10px;
}`;

const SPECIFICITY_EXERCISES = [
  {
    id: 'inline-style',
    html: HTML_INLINE_STYLE,
    description: 'Inline style vs specific selector',
    question: 'Which color is the link?',
    answers: [
      {
        text: 'blue',
        isCorrect: false
      },
      {
        text: 'red',
        isCorrect: true
      }
    ]
  },
  {
    id: 'id',
    html: HTML_ID,
    css: CSS_ID,
    description: 'Class selector vs ID selector',
    question: 'Which font-size will be applied to the paragraph?',
    answers: [
      {
        text: '10px',
        isCorrect: false
      },
      {
        text: '100px',
        isCorrect: true
      }
    ]
  }
];

export default SPECIFICITY_EXERCISES;
