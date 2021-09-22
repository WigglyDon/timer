const args = process.argv.slice(2);
const alarm = function (array) {
  if (array.length === 0) {
    return;
  }
  for (let el of array) {
    if (el < 0 || isNaN(el)) {
      console.log('skipping invalid input');
    }
    else {
      setTimeout(() => {
        process.stdout.write('.\n');
      }, el * 1000);
    }
  }
}

alarm(args);
