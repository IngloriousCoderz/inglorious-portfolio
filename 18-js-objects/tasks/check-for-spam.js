console.log(checkSpamWithIfs('buy ViAgRA now'));
console.log(checkSpamWithIfs('free xxxxx'));
console.log(checkSpamWithIfs('innocent rabbit'));

function checkSpamWithIfs(str) {
  return (
    str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
  );
}

console.log(checkSpamWithArrays('buy ViAgRA now'));
console.log(checkSpamWithArrays('free xxxxx'));
console.log(checkSpamWithArrays('innocent rabbit'));

function checkSpamWithArrays(str) {
  const spam = ['viagra', 'xxx'];

  // for (let i = 0; i < spam.length; i++) {
  //   let word = spam[i];
  //   if (str.toLowerCase().includes(word)) {
  //     return true;
  //   }
  // }

  for (let word of spam) {
    if (str.toLowerCase().includes(word)) {
      return true;
    }
  }

  return false;
}
