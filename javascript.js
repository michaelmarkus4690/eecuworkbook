// Select Career Option
// Gross Income
function getOption() {
  let selectedOption = document.getElementById("selectacareer").value;
  let selectedOptionElement = document.querySelector(`[value="${selectedOption}"]`);
  let salary = selectedOptionElement.getAttribute("salary")
  document.getElementById("salaryDisplay").innerHTML = "Salary:$" + salary;
  console.log(salary)
  




  let salaryinteger = (parseInt(salary))

  // Gross Monthly Income, GA / 12

  let grossmonthlyincome = Math.round(salaryinteger / 12)
  document.getElementById("gmiDisplay").innerHTML = "Gross Monthly Income:$" + grossmonthlyincome ;
  document.getElementById("gmiboxDisplay").innerHTML = '$' + grossmonthlyincome ;
  document.getElementById("gmiboxDisplay2").innerHTML = '$' + grossmonthlyincome ;
  document.getElementById("gmiboxDisplay3").innerHTML = '$' + grossmonthlyincome ;
  document.getElementById("gmiboxDisplay4").innerHTML = '$' + grossmonthlyincome ;
  document.getElementById("gmiboxDisplay5").innerHTML = '$' + grossmonthlyincome ;
  document.getElementById("gmiboxDisplay6").innerHTML = '$' + grossmonthlyincome ;



// Default Deductions
  let deduction1 = Math.round(grossmonthlyincome * 0.12)
  console.log(deduction1)
  document.getElementById("deduction1Display").innerHTML = '=' +deduction1;

  let deduction2 = Math.round(grossmonthlyincome * 0.07)
  console.log(deduction2)
  document.getElementById("deduction2Display").innerHTML = '=' +deduction2;


  let deduction3 = Math.round(grossmonthlyincome * 0.062)
  console.log(deduction3)
  document.getElementById("deduction3Display").innerHTML = '=' + deduction3;


  let deduction4 = Math.round(grossmonthlyincome * 0.0145)
  console.log(deduction4)
  document.getElementById("deduction4Display").innerHTML = '=' + deduction4;


  let deduction5 = Math.round(grossmonthlyincome * 0.01)
  console.log(deduction5)
  document.getElementById("deduction5Display").innerHTML =  '=' + deduction5;


  let deduction6 = Math.round(grossmonthlyincome * 0.05)
  console.log(deduction6)
  document.getElementById("deduction6Display").innerHTML =  '=' + deduction6;

  let medicalinsurance = Number(180)
  // TD = Sum Of Deductions

  let td = deduction1 + deduction2 + deduction3 + deduction4 + deduction5 + deduction6 + medicalinsurance
  console.log(td)

  document.getElementById("tdDisplay").innerHTML = 'Total Deductions:' + td;
  
  // New Monthly = Gross Monthly - Total Deductions
  let ni = grossmonthlyincome - td
  console.log(ni)
  document.getElementById("niDisplay").innerHTML = 'New Monthly Income:' + ni;

  // Mortgage
  let mc = Math.round(grossmonthlyincome * .33)

}

