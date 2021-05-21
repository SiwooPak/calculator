const calculator = document.querySelector(".calculator"); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector(".calculator__buttons"); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

//const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector(".calculator__operator"); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
//const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
//const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
//const display = document.querySelector('.calculator__display');

// let isNext = false;

function calculate(n1, operator, n2) {
  //let result = 0;
  // console.log(`${n1} ${operator} ${n2}`);
  result = String(eval(n1 + operator + n2));
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  //console.log(result);
  return result;
}

// buttons.addEventListener('click', function (event) {
//   // 버튼을 눌렀을 때 작동하는 함수입니다.

//   const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

//   if (target.matches('button')) {
//     // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
//     // 클릭된 HTML 엘리먼트가 button이면
//     if (action === 'number') {
//       // 그리고 버튼의 클레스가 number이면
//       // 아래 코드가 작동됩니다.
//       if(firstOperend.textContent === '0'){
//         firstOperend.textContent = buttonContent;
//       }else {
//         secondOperend.textContent = buttonContent;
//       }

//     }

//     if (action === 'operator') {
//       operator.textContent = buttonContent;
//       // isNext = true;
//       console.log(buttonContent);
//     }

//     if (action === 'decimal') {

//     }

//     if (action === 'clear') {
//       firstOperend.textContent = '0';
//       operator.textContent  = '+';
//       secondOperend.textContent = '0';
//       calculatedResult.textContent = '0';
//       console.log('초기화 버튼');
//     }

//     if (action === 'calculate') {
//       num1 = firstOperend.textContent;
//       oper = operator.textContent;
//       num2 = secondOperend.textContent;
//       calculatedResult.textContent = calculate(num1,oper,num2);
//       // console.log('계산 버튼');
//       isNext = false;
//     }
//   }
// });

// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector(".calculator__display--for-advanced"); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener("click", function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.

  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches("button")) {
    if (display.textContent === "30") {
      display.textContent = "힘냅시다!";
      let thirtyGroup = setTimeout(function () {
        display.textContent = "30기 화이팅!";
      }, 3000);
    }
    if (action === "number") {
      //console.log('number: '+operator.textContent);
      // display의 text가 0이거나 앞의 실행했던 작업이 operator인 경우
      // displaydml textContent의 새로운 숫자 할당
      // 앞의 실행했던 작업이 숫자입력이거나 decimal 작업인경우
      // 기존의 display의 text에서 숫자를 추가

      if (previousKey === "operator" || display.textContent === "0") {
        //console.log(typeof(buttonContent));
        display.textContent = buttonContent;
        // previousKey = 'number';
      } else if (previousKey === "number" || previousKey === "decimal") {
        display.textContent = display.textContent + buttonContent;
        // previousKey = 'number';
      }
      previousKey = "number";
      //console.log(display.textContent);
    }
    if (action === "operator") {
      //앞의 작업이 숫자버튼 작업이거나
      //연산자 textContent부분에 buttonContent내용 할당
      // oparator.textContent 값이 있고 firstNum >0
      // display.textContent > 0 경우
      console.log(target.classList.length);
      if (target.classList.length > 1) {
        target.classList.remove("isPressed");
      } else {
        target.classList.add("isPressed");
      }

      if (
        firstNum &&
        operator.textContent &&
        previousKey !== "operator" &&
        previousKey !== "calculate"
      ) {
        display.textContent = calculate(
          firstNum,
          operator.textContent,
          display.textContent
        );
        firstNum = display.textContent;
        operator.textContent = buttonContent;
        // previousKey = 'operator';
      } else {
        // previousKey변수에 'operator' 문자열 할당
        // firstNum 에 지금 화면에 보여지는 값 할당
        operator.textContent = buttonContent;
        // previousKey = 'operator';
        firstNum = display.textContent;
      }
      previousKey = "operator";
    }
    if (action === "decimal") {
      // 앞의 작업이 operator인 경우 '0.'문자열을 display에 할당
      // previousKey값엔 'decimal';
      // previouKeydml rkqtdl 'decimal'
      if (previousKey === "operator") {
        display.textContent = "0.";
      } else if (previousKey === "decimal") {
        display.textContent = display.textContent;
      } else {
        display.textContent = display.textContent + ".";
      }
      previousKey = "decimal";
    }
    if (action === "clear") {
      display.textContent = "0";
      operator.textContent = null;
      firstNum = null;
      previousKey = null;
      previousNum = null;
    }
    if (action === "calculate") {
      if (operator.textContent !== "") {
        if (previousKey === "calculate") {
          //console.log('여기!!');
          display.textContent = calculate(
            firstNum,
            operator.textContent,
            previousNum
          );
          firstNum = display.textContent;
        } else {
          previousNum = display.textContent;
          display.textContent = calculate(
            firstNum,
            operator.textContent,
            display.textContent
          );
          firstNum = display.textContent;
        }
      }
      previousKey = "calculate";
    }
  }
});
