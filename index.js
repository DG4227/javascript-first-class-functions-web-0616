function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return runFiveMiles
}

function runFiveMiles() {
  console.log('Go for a five-mile run')
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log(`Nom nom nom, this is delicious!`);
  }
}
