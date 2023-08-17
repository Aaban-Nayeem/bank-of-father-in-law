document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawStringField = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawStringField);

  const withdrawAmount = document.getElementById("withdraw-amount");
  const oldWithdrawStringAmount = withdrawAmount.innerText;
  const oldWithdrawAmount = parseFloat(oldWithdrawStringAmount);
  const currentWithdrawAmountTotal = oldWithdrawAmount + newWithdrawAmount;
  withdrawAmount.innerText = currentWithdrawAmountTotal;

  const balanceAmount = document.getElementById("balance-amount");
  const balanceStringAmount = balanceAmount.innerText;
  const oldBalanceAmount = parseFloat(balanceStringAmount);
  const currentBalanceAmount = oldBalanceAmount - newWithdrawAmount;
  balanceAmount.innerText = currentBalanceAmount;
  withdrawField.value = "";
});
