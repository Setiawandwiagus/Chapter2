let Data = [
  {
    nama: "melon",
    totalBuah: 10,
    harga: 10000,
  },
  {
    nama: "apel",
    totalBuah: 3,
    harga: 5000,
  },
  {
    nama: "pisang",
    totalBuah: 7,
    harga: 7000,
  },
];

const beliBuah = (buah, jumlah) => {
  Data.map((value) => {
    if (value.nama == buah && value.totalBuah <= jumlah) {
      totalHarga = jumlah * value.harga;
      return console.log(totalHarga);
    } else {
      return console.log("stok barang kurang");
    }
  });
};

beliBuah("pisang", 2);
