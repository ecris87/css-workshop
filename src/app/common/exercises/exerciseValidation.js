const isCorrect = (cssCode, correctAnswer) => {
  const CSS_DECLARATION_REGEX = /\{([\s\S][^}]*)/gim;
  const WHITESPACE_REGEX = /\s+/gim;
  console.log('cssCode:', cssCode);
  let selector = cssCode
    .split('{')[0] // exerices only call for 1 selector
    .trim();
  let isSelectorMatch = selector === correctAnswer.selector;

  let matchedCode = CSS_DECLARATION_REGEX.exec(cssCode);
  if (!matchedCode || !matchedCode[1]) {
    console.error('Could not interpret declartions ', matchedCode);
    return;
  }
  let declarations = matchedCode[1].split(';'); // we want the second match because it doesn't include the curly brace
  let providedDeclarations = declarations
    .map(value => value.replace(WHITESPACE_REGEX, ''))
    .filter(cleanValue => cleanValue !== '');
  let isDeclarationsMatch = correctAnswer.declarations.every(value => providedDeclarations.includes(value));

  console.log(`isSelectorMatch: ${isSelectorMatch} isDeclarationsMatch: ${isDeclarationsMatch}`);
  return isSelectorMatch && isDeclarationsMatch;
};

export default { isCorrect };
