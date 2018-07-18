/*
Building my own assert. So I can test during interviews

assertDeeper takes a function you want to test, an answer you expect, and an a optional custom error message.

assertDeeply will do all of the same but with an optional object to pass if the result is built not to return anything.
*/

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || 'Assertion failed');
    }
}

function assertDeeper(result, answer, message) {
  // edge case... kind of
  if (result == null) throw new Error(`result doesn't return anything`);
  // works with 1-D arrays. Will need helper for deeper arrays which can also replace the lower if conditional
  if (Array.isArray(result) && Array.isArray(answer)) {
    if (result.length != answer.length) {
      throw new Error(message || `Nick your Assertion failed expected ${answer} and got ${result}`);
    } else {
      for (let i = 0; i < result; i++) {
        if (result[i] !== answer[i]) throw new Error(message || `Nick your Assertion failed expected ${answer} and got ${result}`);
      }
    }
  } else if (result == answer) {
    return true;
  } else {
    throw new Error(message || `Nick your Assertion failed expected ${answer} and got ${result}`);
  }
}
