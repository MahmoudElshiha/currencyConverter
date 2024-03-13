// Define currency conversion rates
const ratio = {
  USD: {
    EGP: 48.45,
    SAR: 3.75,
    JPY: 147.72,
    KWD: 0.31,
    AED: 3.67,
  },
  EGP: {
    USD: 0.021,
    SAR: 0.077,
    JPY: 3.05,
    KWD: 0.0063,
    AED: 0.076,
  },
  SAR: {
    USD: 0.27,
    EGP: 12.92,
    JPY: 39.38,
    KWD: 0.082,
    AED: 0.98,
  },
  JPY: {
    USD: 0.0068,
    EGP: 0.33,
    SAR: 0.025,
    KWD: 0.0021,
    AED: 0.025,
  },
  KWD: {
    USD: 3.26,
    EGP: 157.74,
    SAR: 12.21,
    JPY: 480.85,
    AED: 11.96,
  },
  AED: {
    USD: 0.27,
    EGP: 13.19,
    SAR: 1.02,
    JPY: 40.21,
    KWD: 0.084,
  },
};

function convertCurrency() {
  var amount = parseFloat(document.getElementById("amount").value);
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;

  if (amount <= 0 || !amount) {
    alert("PLease Enter a valid number ...");
    return;
  }

  if (from === to) {
    var convertedAmount = amount;
  } else {
    var convertedAmount = amount * ratio[from][to];
  }

  result = document.getElementById("result");
  result.innerText = `${amount} ${from} => ${convertedAmount} ${to}`;
}
