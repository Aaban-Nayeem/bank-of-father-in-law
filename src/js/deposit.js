//? step - 01: Add event listener to the to the Deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositStringAmount = depositField.value;
  const newDepositAmount = parseFloat(newDepositStringAmount);

  const depositAmount = document.getElementById("deposit-amount");
  const oldDepositStringAmount = depositAmount.innerText;
  const oldDepositAmount = parseFloat(oldDepositStringAmount);
  const currentAmountTotal = oldDepositAmount + newDepositAmount;
  depositAmount.innerText = currentAmountTotal;

  const balanceAmount = document.getElementById("balance-amount");
  const balanceStringAmount = balanceAmount.innerText;
  const oldBalanceAmount = parseFloat(balanceStringAmount);
  const currentBalanceAmount = oldBalanceAmount + newDepositAmount;
  balanceAmount.innerText = currentBalanceAmount;
  depositField.value = "";
});
