var produk = {
  "action-figure,manga-novel": [
    {
      nama: "Rikka Takanashi",
      image: "assets/Suratlamaran1.jpg",
      desc: "waifu asa fajar, rikka takanashi dari anime chuninbyou",
      harga: 150000,
    },
    {
      nama: "Roronoa Zoro",
      image: "assets/Suratlamaran2.jpg",
      desc: "Rorono zoro dari anime one piece,Rorono zoro dari anime tambah",
      harga: 150000,
    },
    {
      nama: "Uzumaki Naruto",
      image: "assets/Suratlamaran3.jpg",
      desc: "Uzumaki Naruto, Hokage ke 7 konoha Rorono zoro dari anime tambah",
      harga: 200000,
    },
    {
      nama: "Todoroki Shoto",
      image: "assets/Suratlamaran4.jpg",
      desc: "Todoroki Shoto dari anime My hero academy asli bukan kw",
      harga: 200000,
    },
  ],
};

for (var key in produk) {
  var judul = document.createElement("h2");
  judul.className = "mt-3";
  judul.innerHTML = key;
  document.getElementById(key).appendChild(judul);

  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";
  cardGroup.id = `${key}-produk`;
  document.getElementById(key).appendChild(cardGroup);

  for (var i = 0; i < produk[key].length; i++) {
    var namaProduk = produk[key][i].nama;
    var imageProduk = produk[key][i].image;
    var hargaProduk = produk[key][i].harga;
    var descProduk = produk[key][i].desc;

    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src=${imageProduk} class="card-img-top" alt="..." width="150" height="150">
        <div class="card-body">
            <h5 class="card-title">${namaProduk}</h5>
            <p class="card-text">${descProduk}</p>
            <p class="card-text">Harga : ${hargaProduk}</p>
            <a onclick="chatToAdmin('${namaProduk}','${descProduk}','${hargaProduk}')" class="btn btn-primary  d-block">Beli Produk</a>
        </div>`;
    document.getElementById(`${key}-produk`).appendChild(card);
  }
}

function chatToAdmin(nama, desc, harga) {
  var noHp = "+6285693724146";
  window.open(`https://web.whatsapp.com/send?phone=${noHp}?&text=nama-produk:%20${nama}%0Adeskripsi:%20${desc}%0Aharga:%20${harga}%0A%0AThanks%20BRO!`);
}
