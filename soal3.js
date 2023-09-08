function getAngkaTerbesarKedua(dataAngka) {
  if (!dataAngka) {
    return "Error: please input score array ";
  }
  const sorting = dataAngka.sort(function (a, b) {
    return b - a;
  });
  return sorting[1];
}
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

// output
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
