// first card...............

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const addMoney = document.getElementById("add-money-field").value;

    const currentBalance = document.getElementById("donate-money").innerText;

    if (addMoney < 0 || isNaN(addMoney)) {
      alert("please correct amount and try again");
    } else {
      const newAddMoney = parseFloat(addMoney);
      const newCurrentBalance = parseFloat(currentBalance);
      const sumBalance = newAddMoney + newCurrentBalance;
      console.log(sumBalance);
      document.getElementById("donate-money").innerText = sumBalance;

      const bankBalance = document.getElementById("bank-balance").innerText;

      const newBankBalance = parseFloat(bankBalance);
      const remainingBalance = newBankBalance - sumBalance;
      console.log(remainingBalance);
      document.getElementById("bank-balance").innerText = remainingBalance;
    }
  });

// second card......................

document
  .getElementById("second-add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const addFeniMoney = document.getElementById(
      "second-add-money-field"
    ).value;

    const currentMoney = document.getElementById(
      "second-donate-money"
    ).innerText;

    if (addFeniMoney < 0 || isNaN(addFeniMoney)) {
      alert("please correct amount and try again");
    } else {
      const newAddMoney = parseFloat(addFeniMoney);
      const newCurrentMoney = parseFloat(currentMoney);
      const sumMoney = newAddMoney + newCurrentMoney;
      console.log(sumMoney);
      document.getElementById("second-donate-money").innerText = sumMoney;

      const bankMoney = document.getElementById("bank-balance").innerText;

      const newBankBalance = parseFloat(bankMoney);
      const remainingMoney = newBankBalance - sumMoney;
      console.log(remainingMoney);
      document.getElementById("bank-balance").innerText = remainingMoney;
    }
  });

// 3rd Card...................

document
  .getElementById("third-add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const addQuotaMoney = document.getElementById(
      "third-add-money-field"
    ).value;

    const currentBalance =
      document.getElementById("third-donate-money").innerText;

    if (addQuotaMoney < 0 || isNaN(addQuotaMoney)) {
      alert("please correct amount and try again");
    } else {
      const newAddMoney = parseFloat(addQuotaMoney);
      const newCurrentBalance = parseFloat(currentBalance);
      const sumTaka = newAddMoney + newCurrentBalance;
      console.log(sumTaka);
      document.getElementById("third-donate-money").innerText = sumTaka;

      const bankBalance = document.getElementById("bank-balance").innerText;

      const newBankBalance = parseFloat(bankBalance);
      const remainingBalance = newBankBalance - sumTaka;
      console.log(remainingBalance);
      document.getElementById("bank-balance").innerText = remainingBalance;
    }
  });
