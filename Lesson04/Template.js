// Launch School
// JS 101 Lesson 3: Practice Problems
// Easy 1
const readline = require('readline-sync');
const QUESTION = 'QUESTION';
const ANSWER = 'ANSWER';
var divider = "==== ==== ==== ==== ====";
var qs = 1;
var ans = 1;
var code = 'CODE:\n';
function print(arg) {
  switch (arg) {
    case 'qs':
      console.log(`${divider}\n${QUESTION} ${qs}: `);
      break;
    case 'ans':
      console.log(`${divider}\n${ANSWER} ${ans}: `);
      break;
    case 'code':
      console.log(`${code}`);
      break;    
    default:
      console.log(`${divider}\n`);
      break;
  }
}
// START
print('qs'); 
print('ans');
print('code');
print('end');
qs +=1;
ans += 1;

// END
/* ==== ==== ==== ==== */