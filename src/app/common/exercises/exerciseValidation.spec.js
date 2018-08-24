import exerciseValidation from './exerciseValidation';

describe('#isCorrect', () => {
  describe('for correct selector, correct declarations css code', () => {
    it('should return true', () => {
      let correctAnswer = {
        selector: 'nav',
        declarations: ['position:sticky', 'top:0']
      };
      let cssCode = `nav {
            position: sticky; 
            top: 0;
        }`;
      expect(exerciseValidation.isCorrect(cssCode, correctAnswer)).toEqual(true);
    });
  });

  describe('for incorrect selector, correct declarations css code', () => {
    it('should return false', () => {
      let correctAnswer = {
        selector: 'nav',
        declarations: ['position:sticky', 'top:0']
      };
      let cssCode = `p {
                position: sticky; 
                top: 0;
            }`;
      expect(exerciseValidation.isCorrect(cssCode, correctAnswer)).toEqual(false);
    });
  });

  describe('for correct selector, incorrect declarations css code', () => {
    it('should return false', () => {
      let correctAnswer = {
        selector: 'nav',
        declarations: ['position:sticky', 'top:0']
      };
      let cssCode = `nav {
                position: absolute;
                top: 0;
            }`;
      expect(exerciseValidation.isCorrect(cssCode, correctAnswer)).toEqual(false);
    });
  });
});
