export const validations = {
  username: {
    warnings: {
      'min-length': 'Username can\'t be shorter than 3 characters.',
      'max-length': 'Username can\'t exceed 16 characters.',
    },
    // Checks username isn't shorter that min. length (3)
    isMinLengthOK: str => str.length >= 3,

    // Checks username doesn't exceed max length (16)
    isMaxLengthOK: str => str.length <= 16
  },
  password: {
    warnings: {
      'no-consecutive': 'Password should include one consecutive three letters. (ex. "abc", "def", etc.)',
      'invalid-letters': 'Password should not include i, O, I letters.',
      'no-pairs': 'Password should include two letter pairs. (ex. "aa", "bb", etc.)',
      'min-length': 'Password can\'t be shorter than 6 characters.',
      'max-length': 'Password can\'t be longer than 32 characters.',
      'only-lowercase': 'Password should be lowercase only.'
    },
    
    // Checks if all characters are lowercase
    isLowerCase: str => {
      const re = /[A-Z]/g;
      return !re.test(str);
    },
    
    // Checks password only includes valid characters
    isCharsValid: str => {
      const re = /[iIO]/g;
      return !re.test(str);
    },
    
    // Checks if there's at least two paired character
    isPairedChars: str => {
      const re = /([a-z])\1/g;
      return str.match(re) && str.match(re).length >= 2;
    },
    
    // Checks if there's at least one set of consecutive characters
    isConsecutiveChars: str => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < alphabet.length - 2; i++) {
        const re = new RegExp(alphabet.substr(i,3));
        if (re.test(str)) {
          return true;
        }
      }
      return false;
    },

    // Checks password isn't shorter that min. length (6)
    isMinLengthOK: str => str.length >= 6,

    // Checks password doesn't exceed max. length (32)
    isMaxLengthOK: str => str.length <= 32
  }
}

export function validate(input, value) {
  let errors = [];
  const rules = validations[input];
  if (input === 'password' && rules) {
    if (!rules.isLowerCase(value)) {
      errors.push(rules.warnings['only-lowercase']);
    }
    if (!rules.isCharsValid(value)) {
      errors.push(rules.warnings['invalid-letters']);
    }
    if (!rules.isPairedChars(value)) {
      errors.push(rules.warnings['no-pairs']);
    }
    if (!rules.isConsecutiveChars(value)) {
      errors.push(rules.warnings['no-consecutive']);
    }
    if (!rules.isMinLengthOK(value)) {
      errors.push(rules.warnings['min-length']);
    }
    if (!rules.isMaxLengthOK(value)) {
      errors.push(rules.warnings['max-length']);
    }
  } else if (input === 'username' && rules) {
      if (!rules.isMinLengthOK(value)) {
        errors.push(rules.warnings['min-length']);
      }
      if (!rules.isMaxLengthOK(value)) {
        errors.push(rules.warnings['max-length']);
      }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  } 
}
