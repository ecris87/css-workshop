import exerciseValidation from './exerciseValidation';

describe('#isCorrect', () => {
  describe('(single rule-set) for correct selector, correct declarations', () => {
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

  describe('(single rule-set) for incorrect selector', () => {
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

  describe('(single rule-set) for incorrect declarations', () => {
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

  describe('(multiple rule-sets) for correct selectors, correct declarations', () => {
    it('should return true', () => {
      let correctAnswer = [
        {
          selector: '.plate',
          declarations: ['position:relative']
        },
        {
          selector: '.pie',
          declarations: ['position:absolute', 'top:50%', 'left:50%', 'transform:translate(-50%,-50%)']
        }
      ];
      let cssCode = `.plate {
        position: relative;
      }
      .pie {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }`;
      expect(exerciseValidation.isCorrect(cssCode, correctAnswer)).toEqual(true);
    });
  });

  describe('(multiple rule-sets) for incomplete declarations', () => {
    it('should return false', () => {
      let correctAnswer = [
        {
          selector: '.plate',
          declarations: ['position:relative']
        },
        {
          selector: '.pie',
          declarations: ['position:absolute', 'top:50%', 'left:50%', 'transform:translate(-50%,-50%)']
        }
      ];
      let cssCode = `.plate {
        position: relative;
      }
      .pie {
        position: absolute;
        top: 50%;
        left: 50%;
      }`;
      expect(exerciseValidation.isCorrect(cssCode, correctAnswer)).toEqual(false);
    });
  });

  describe('(multiple rule-sets) for incorrect declarations', () => {
    it('should return false', () => {
      let correctAnswer = [
        {
          selector: '.plate',
          declarations: ['position:relative']
        },
        {
          selector: '.pie',
          declarations: ['position:absolute', 'top:50%', 'left:50%', 'transform:translate(-50%,-50%)']
        }
      ];
      let cssCode = `.plate {
        position: relative;
      }
      .pie {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }`;
      expect(exerciseValidation.isCorrect(cssCode, correctAnswer)).toEqual(false);
    });
  });

  describe('(multiple rule-sets) for incomplete selectors', () => {
    it('should return false', () => {
      let correctAnswer = [
        {
          selector: '.plate',
          declarations: ['position:relative']
        },
        {
          selector: '.pie',
          declarations: ['position:absolute', 'top:50%', 'left:50%', 'transform:translate(-50%,-50%)']
        }
      ];
      let cssCode = `.plate {
        position: relative;
      }`;
      expect(exerciseValidation.isCorrect(cssCode, correctAnswer)).toEqual(false);
    });
  });

  describe('(multiple rule-sets) for incorrect selectors', () => {
    it('should return false', () => {
      let correctAnswer = [
        {
          selector: '.plate',
          declarations: ['position:relative']
        },
        {
          selector: '.pie',
          declarations: ['position:absolute', 'top:50%', 'left:50%', 'transform:translate(-50%,-50%)']
        }
      ];
      let cssCode = `.plate {
        position: relative;
      }
      p {
        position: absolute;
      }`;
      expect(exerciseValidation.isCorrect(cssCode, correctAnswer)).toEqual(false);
    });
  });
});
