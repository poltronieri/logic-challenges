const compression = () => {
  let input = '5\naaa3215555saas2344\n332122122222aa\naaaaaaa2sssss3\n454333211\naqsaqws5541';
  input.split('\n').forEach(line => {
    let previousChar = '';
    let currentChar = '';
    let nextChar = '';
    let repeats = 1;
    let result = '';
    if (line.length > 1) {
      let lineByChar = line.split('');
      for (let position in lineByChar) {
        position = parseInt(position);
        currentChar = line[position];
        nextChar = line[position + 1] ? line[position + 1] : 'end';
        if (position === 0) {
          previousChar = currentChar;
        } else {
          if (currentChar == previousChar) {
            repeats++;
            if (line.length === position + 1) {
              result = result.concat(`{${previousChar},${repeats}}`);
            }
          } else if (currentChar == nextChar) {
            if (repeats > 1) {
              result = result.concat(`{${previousChar},${repeats}}`);
            }
          } else {
            if (repeats > 1) {
              result = result.concat(`{${previousChar},${repeats}}`);
              repeats = 1;
            }
            result = result.concat(currentChar);
          }
          previousChar = currentChar;
        }
      }
      console.log(result);
      console.log(line);
    }
  });
};

export default compression;
