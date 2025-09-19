// Inisialisasi array produk sesuai dengan format yang diberikan
const produkToko = [
	{ id: 1, nama: "Laptop", harga: 7000000, stok: 5 },

	{ id: 2, nama: "Mouse", harga: 200000, stok: 10 },

	{ id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

// menggunakan arrow function karena lebih ringkas dan cocok karena akan buat fungsi yang sederhana
const tambahProduk = (nama, harga, stok) => {
	// cari id maksimum yang ada dan menambahkan 1 untuk id baru
	const id =
		produkToko.length > 0 ? Math.max(...produkToko.map((p) => p.id)) + 1 : 1;
	produkToko.push({ id: id, nama, harga, stok });
};

const hapusProduk = (id) => {
	const index = produkToko.findIndex((produk) => produk.id === id);
	if (index !== -1) {
		produkToko.splice(index, 1);
	}
};

const tampilkanProduk = () => {
	console.log("Daftar Produk Toko:");
	produkToko.forEach((produk) => {
		console.log(
			`ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`
		);
	});
};

hapusProduk(1);
tambahProduk("Monitor", 5000000, 3);
tambahProduk("VGA", 500000, 7);
tambahProduk("SSD", 200000, 15);
tampilkanProduk();
