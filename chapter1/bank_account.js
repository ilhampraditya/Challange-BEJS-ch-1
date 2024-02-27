let saldo = 10000;
document.getElementById("saldo").textContent = saldo;

const updateSaldo = (saldo) => {
  document.getElementById("saldo").textContent = saldo;
};

const tambahSaldo = () => {
  let nominal = prompt("Masukan tambahan saldo Anda:");
  saldo += parseInt(nominal);
  updateSaldo(saldo);
};

const kurangiSaldo = () => {
  let nominal = prompt("Masukan pengambilan saldo Anda:");
  if (saldo < nominal) {
    alert("Saldo tidak mencukupi penarikan");
  } else {
    saldo -= parseInt(nominal);
    updateSaldo(saldo);
  }
};
