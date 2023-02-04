// Select Career Option
function getOption() {
  let selectedOption = document.getElementById("selectacareer").value;
  let selectedOptionElement = document.querySelector(`[value="${selectedOption}"]`);
  let salary = selectedOptionElement.getAttribute("salary");
  document.getElementById("salaryDisplay").innerHTML = "Salary:$" + salary;

  let grossMonthlyIncome = Number(Number(salary) / 12)
  console.log(grossMonthlyIncome);
}



// Gross Income

// Gross Monthly Income, GA / 12

// Default Deductions

// TD = Sum Of Deductions

// New Monthly = Gross Monthly - Total Deuctions

// Current Balance = NM
