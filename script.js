function tambah(a, b) {
    return a + b;
  }
  
  function kali(a, b) {
    return a * b;
  }
  
  function bagi(a, b) {
    return a / b;
  }
  
  function kurang(a, b) {
    return a - b;
  }
  
  let operator = prompt("masukkan (+) (*) (/) (-)");
  let a = parseInt(prompt("masukkan angka pertama"));
  let b = parseInt(prompt("masukkan angka kedua"));
  
  if (operator == "+") {
    let hasil = a + b;
    console.log(hasil);
  }
  if (operator == "*") {
    let hasil = a * b;
    console.log(hasil);
  }
  if (operator == "/") {
    let hasil = a / b;
    console.log(hasil);
  }
  if (operator == "-") {
    let hasil = a - b;
    console.log(hasil);
  }
  