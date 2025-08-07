// const nama = "Fauzi";
// let umur = 20;

// console.log(nama);
// console.log("Nama ' saya " + nama);
// console.log('Nama " saya ' + nama + ', umur saya ' + umur + ' tahun.');
// console.log(`Nama saya ${nama}, umur saya ${umur} tahun.`);

// // Algoritma
// // Input
// // Input angka pertama
// const angkaPertama = 10;
// // Input angka kedua
// const angkaKedua = 5;
// // input operator
// const operator = "+";

// // Proses
// let hasil = null;
// if (operator === "+") {
//   hasil = angkaPertama + angkaKedua;
// }

// // Output
// console.log(`Hasil dari ${angkaPertama} ${operator} ${angkaKedua} adalah ${hasil}`);

// console.log(8 === '8');
// 8 or '8'

function proses(parameter = 'Tidak ada parameter') {
  console.log(parameter);
  console.log("Proses 1");
  console.log("Proses 2");
  console.log("Proses 3");
  console.log("Proses 4");
  console.log("Proses 5");
  return 5;
}

const nilai = proses();
console.log(nilai);

// proses();

// proses('Dimulai');

// // DRY Principle
// // Don't Repeat Yourself
// for (let index = 0; index < 100; index++) {
//   console.log((index + 1) + " saya berjanji akan belajar JavaScript");
// }

// // function
// proses('Berakhir');

// const array = [1, 2, 3, 4, 5];
// const color = ["merah", "hijau", "biru", "kuning", "ungu"];
// const cars = ["Toyota", "Honda", "Suzuki", "Daihatsu", "Mitsubishi"];
// const matrix = [
//     [1, 2, 3], // 0
//     [4, 5, 6], // 1
//     [7, 8, 9], // 2
//     // 0 1 2
// ];
// const mobil = [
//   { brand: "toyota", color: "merah" },
//   { brand: "honda", color: "hijau" },
//   { brand: "suzuki", color: "biru" },
// ];
// // console.log(mobil[2]['color']);

// const object = {
//   nama: "Fauzi",
//   umur: 20,
//   alamat: {
//     provinsi: "Jawa Barat",
//     kota: "Bandung",
//     kecamatan: "Cidadap",
//   },
//   golongan: "O",
//   hobby: ["membaca", "menulis", "bermain"],
// };

// object.hobby[2] = "music"
// console.log(object.hobby[2]);

// Contoh API
// console.log({
//     message: "Berhasil",
//     statusCode: 200,
//     status: true,
//     data: {
//       nama: "Fauzi",
//       umur: 20,
//       alamat: {
//         provinsi: "Jawa Barat",
//         kota: "Bandung",
//         kecamatan: "Cidadap",
//       },
//       golongan: "O",
//       hobby: ["membaca", "menulis", "bermain"],
//     },
// });