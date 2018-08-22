const isCorrect = (cssCode, correctAnswer) => {
  console.log('cssCode:', cssCode);
  let selector = cssCode
    .split('{')[0] // exerices only call for 1 selector
    .trim();

  if (Array.isArray(correctAnswer)) {
    return correctAnswer.every(rule => isSelectorMatch(selector, rule) && isDeclarationsMatch(cssCode, rule));
  }

  return isSelectorMatch(selector, correctAnswer) && isDeclarationsMatch(cssCode, correctAnswer);
};

const isSelectorMatch = (selector, rule) => {
  return selector === rule.selector;
};

const isDeclarationsMatch = (cssCode, rule) => {
  const CSS_DECLARATION_REGEX = /\{([\s\S][^}]*)/gim;
  const WHITESPACE_REGEX = /\s+/gim;
  let matchedCode = CSS_DECLARATION_REGEX.exec(cssCode);
  if (!matchedCode || !matchedCode[1]) {
    console.error('Could not interpret declartions ', matchedCode);
    return;
  }
  let declarations = matchedCode[1].split(';'); // we want the second match because it doesn't include the curly brace
  let providedDeclarations = declarations
    .map(value => value.replace(WHITESPACE_REGEX, ''))
    .filter(cleanValue => cleanValue !== '');

  return rule.declarations.every(value => providedDeclarations.includes(value));
};

export default { isCorrect };
