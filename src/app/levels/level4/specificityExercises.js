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

const HTML_MIXED = `
<p class="better">This is a paragraph.</p>
<p class="better" id="winning">One selector to rule them all!</p>
`;

const CSS_MIXED = `/* style.css */

#winning {
  border: 1px solid black;
  background: cadetblue;
}

.better {
  border: 0 none !important;
}

p {
  background: peru;
  border: 1px dashed red;
}`;

const HTML_ORDER = `
<p>This is a paragraph.</p>
<p>One selector to rule them all!</p>`;

const CSS_ORDER = `/* style.css */

p {
  color: blue;
}

p {
  color: red;
}`;

const HTML_ORDER2 = `
<p class="cool">This is a paragraph.</p>
<p class="cool">One selector to rule them all!</p>`;

const CSS_ORDER2 = `/* style.css */

.cool {
  color: blue;
}

p {
  color: red;
}`;

const HTML_PSEUDO_CLASS = `
<section>
  <div>
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>`;

const CSS_PSEUDO_CLASS = `/* style.css */

a:hover {
  color: blue;
}

a {
  color: red;
}`;

const HTML_PSEUDO_CLASS2 = `
<section>
  <div>
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>`;

const CSS_PSEUDO_CLASS2 = `/* style.css */

section div li:nth-child(2) a:hover {
  font-size: 25px;
}

div li:nth-child(2) a:hover {
  font-size: 70px;
}`;

const SPECIFICITY_EXERCISES = [
  {
    id: 'mixed',
    html: HTML_MIXED,
    css: CSS_MIXED,
    description: 'Mixed selectors',
    question: 'Which border will be applied to the paragraph with the id "winning"?',
    answers: [
      {
        text: '1px solid black',
        isCorrect: false
      },
      {
        text: '1px dashed red',
        isCorrect: false
      },
      {
        text: 'no border',
        isCorrect: true
      }
    ]
  },
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
  },
  {
    id: 'order',
    html: HTML_ORDER,
    css: CSS_ORDER,
    description: 'Element selectors',
    question: 'Which color will be applied?',
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
    id: 'order_specificity',
    html: HTML_ORDER2,
    css: CSS_ORDER2,
    description: 'Element and class selectors',
    question: 'Which color will be applied?',
    answers: [
      {
        text: 'blue',
        isCorrect: true
      },
      {
        text: 'red',
        isCorrect: false
      }
    ]
  },
  {
    id: 'pseudo_classes',
    html: HTML_PSEUDO_CLASS,
    css: CSS_PSEUDO_CLASS,
    description: 'Pseudo-class selectors',
    question: 'Which color will be applied on hover?',
    answers: [
      {
        text: 'blue',
        isCorrect: true
      },
      {
        text: 'red',
        isCorrect: false
      }
    ]
  },
  {
    id: 'elements_and_pseudo_classes',
    html: HTML_PSEUDO_CLASS2,
    css: CSS_PSEUDO_CLASS2,
    description: 'Element and pseudo-class selectors',
    question: 'Which font-size will be applied on hover?',
    answers: [
      {
        text: '25px',
        isCorrect: true
      },
      {
        text: '70px',
        isCorrect: false
      }
    ]
  },
];

export default SPECIFICITY_EXERCISES;
