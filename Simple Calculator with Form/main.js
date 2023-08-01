let currentValue = '';
        let operator = '';
        let resultElement = document.getElementById('result');

        function appendValue(value) {
            currentValue += value;
            resultElement.value = currentValue;
        }

        function clearResult() {
            currentValue = '';
            operator = '';
            resultElement.value = '';
        }

        function performOperation(op) {
            operator = op;
            currentValue += ' ' + op + ' ';
        }

        function calculateResult() {
            const expression = currentValue.split(' ');
            const num1 = parseFloat(expression[0]);
            const num2 = parseFloat(expression[2]);
            let result;

            switch (expression[1]) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    result = 'Error';
                    break;
            }

            resultElement.value = result;
            currentValue = result.toString();
            operator = '';
            document.getElementById("disp").innerHTML = resultElement;
        }