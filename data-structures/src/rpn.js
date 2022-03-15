/**
Write a javascript program that takes in a string that 
contains a Reverse Polish Notation expression and 
returns the result of the expression. Use your stack 
and queue implementation to help you with the algorithm.

Examples:
    Input: 4 5 *
    Result: 20
    Input: 3 5 10 + * 
    Result: 45

Note: the expression will always have space separated 
      inputs like "4 5 *" rather than "45*" or "4 4*"
 */

function rpn(expression) {
    let expressionArray = [];
    let builder = '';
    for (let i = 0; i < expression.length; i++) {
        if (expression.charAt(i) != ' '){
            builder += expression.charAt(i);
        } else { 
            expressionArray.push(builder); 
            builder = '';
        }
    }
    expressionArray.push(builder);

    let nums = new Stack();
    expressionArray.forEach((el) => {
        if (el != ' ') {
            if (!isNaN(el)) {
                nums.push(el);
            } else {
                let num1 = parseInt(nums.pop());
                let num2 = parseInt(nums.pop());
                let newNum;

                switch(el) {
                    case '+':
                        newNum = num1 + num2;
                        nums.push(newNum);
                        break;
                    case '-':
                        newNum = num1 - num2;
                        nums.push(newNum);
                        break;
                    case '*':
                        newNum = num1 * num2;
                        nums.push(newNum);
                        break;
                    case '/':
                        newNum = num1 / num2;
                        nums.push(newNum);
                        break;
                }
            }
        }
    });
    return nums.pop();
}
