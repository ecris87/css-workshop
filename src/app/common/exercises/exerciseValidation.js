const isCorrect = (cssCode, correctAnswer) => {
  const CSS_DECLARATION_REGEX = /(\{[\s\S][^}]*})/gim;
  let selectors = cssCode.replace(CSS_DECLARATION_REGEX, '|').split('|');

  if (Array.isArray(correctAnswer)) {
    return correctAnswer.every(
      (rule, index) => isSelectorMatch(selectors[index], rule) && isDeclarationsMatch(cssCode, rule, index)
    );
  }

  return isSelectorMatch(selectors[0], correctAnswer) && isDeclarationsMatch(cssCode, correctAnswer);
};

const isSelectorMatch = (selector, rule) => {
  return selector.trim() === rule.selector;
};

const isDeclarationsMatch = (cssCode, rule, index = 0) => {
  const CSS_DECLARATION_REGEX = /(\{[\s\S][^}]*})/gim;
  const CURLY_BRACES = /[{}]/g;
  const WHITESPACE_REGEX = /\s+/gim;
  let matched;
  for (let i = 0; i <= index; i++) {
    matched = CSS_DECLARATION_REGEX.exec(cssCode)[0];
  }
  if (!matched) {
    console.error('Could not interpret declartions ', matched);
    return;
  }
  let matchedArray = matched.replace(CURLY_BRACES, '').split(';');
  let providedDeclarations = matchedArray
    .map(value => value.replace(WHITESPACE_REGEX, ''))
    .filter(cleanValue => cleanValue !== '');

  let isDeclarationsMatch = rule.declarations.every(expectedDeclaration => {
    return providedDeclarations.includes(expectedDeclaration);
  });
  return isDeclarationsMatch;
};

export default { isCorrect };
