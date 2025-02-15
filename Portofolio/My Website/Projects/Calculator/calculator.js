const keys = document.querySelectorAll('#calc span');
const operators = ['+', '-', 'x', '÷'];
let decimalAdded = false;

keys.forEach((key) => {
  key.addEventListener('click', function (e) {
    const input = document.querySelector('.display');
    let inputVal = input.innerHTML;
    const btnVal = this.innerHTML;

    if (btnVal === 'AC') {
      input.innerHTML = '';
      decimalAdded = false;
    } else if (btnVal === 'DEL') {
      input.innerHTML = inputVal.slice(0, -1);
      if (!inputVal.includes('.')) {
        decimalAdded = false;
      }
    } else if (btnVal === '=') {
      let equation = inputVal;
      const lastChar = equation[equation.length - 1];

      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

      if (operators.includes(lastChar) || lastChar === '.') {
        equation = equation.slice(0, -1);
      }

      // Handle percentage calculations
      equation = equation.replace(/(\d+(\.\d+)?)%/g, (match, p1) => {
        return `(${p1} / 100)`;
      });

      try {
        let result = eval(equation);

      
        equation = equation.replace(/(\d+(\.\d+)?)([\+\-\*\/])(\d+(\.\d+)? \* 0.01)/g, (match, base, _, operator, percentage) => {
          const baseValue = parseFloat(base);
          const percentageValue = eval(percentage) * baseValue;
          switch (operator) {
            case '+':
              return baseValue + percentageValue;
            case '-':
              return baseValue - percentageValue;
            case '*':
              return baseValue * percentageValue;
            case '/':
              return baseValue / percentageValue;
            default:
              return match;
          }
        });

        input.innerHTML = eval(equation);
      } catch (error) {
        input.innerHTML = 'Error';
      }

      decimalAdded = false;
    } else if (operators.includes(btnVal)) {
      const lastChar = inputVal[inputVal.length - 1];

      if (inputVal !== '' && !operators.includes(lastChar)) {
        input.innerHTML += btnVal;
      } else if (inputVal === '' && btnVal === '-') {
        input.innerHTML += btnVal;
      } else if (operators.includes(lastChar) && inputVal.length > 1) {
        input.innerHTML = inputVal.slice(0, -1) + btnVal;
      }

      decimalAdded = false;
    } else if (btnVal === '%') {
      const lastChar = inputVal[inputVal.length - 1];

      if (inputVal !== '' && !operators.includes(lastChar) && lastChar !== '.') {
        input.innerHTML += btnVal;
      }
    } else if (btnVal === '.') {
      if (!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    } else {
      input.innerHTML += btnVal;
    }

    e.preventDefault();
  });
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', function (e) {
  document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
});
