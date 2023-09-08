let kalimat1 = "nicol menyukai warna hitam";
let kalimat2 = "bayu mempunyai hobi bermain sepakbola";

function changeWord(selectedText, changeText, text) {
  let newText = text.replace(selectedText, changeText);
  return newText;
}

hasilKalimat1 = changeWord("nicol", "agus", kalimat1);
hasilKalimat2 = changeWord("sepakbola", "futsal", kalimat2);

console.log(hasilKalimat1);
console.log(hasilKalimat2);
