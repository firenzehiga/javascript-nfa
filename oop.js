// Class dasar Kendaraan
class Kendaraan {
	constructor(merk, tipe) {
		this.merk = merk;
		this.tipe = tipe;
	}

	getInfo() {
		return `${this.merk} ${this.tipe}`;
	}
}

// child Mobil yang mewarisi dari Kendaraan
class Mobil extends Kendaraan {
	constructor(merk, tipe, jumlahPintu) {
		super(merk, tipe);
		this.jumlahPintu = jumlahPintu;
	}

	getInfo() {
		return `${super.getInfo()} (${this.jumlahPintu} pintu)`;
	}
}

// child Motor yang mewarisi dari Kendaraan
class Motor extends Kendaraan {
	constructor(merk, tipe, jenis) {
		super(merk, tipe);
		this.jenis = jenis;
	}

	getInfo() {
		return `${super.getInfo()} (${this.jenis})`;
	}
}

// Class dasar untuk Pelanggan
class Pelanggan {
	constructor(nama, nomorTelepon, kendaraanDisewa = null) {
		this.nama = nama;
		this.nomorTelepon = nomorTelepon;
		this.kendaraanDisewa = kendaraanDisewa; // inisialisasi kendaraanDisewa dengan null
	}

	// method untuk tampilkan proses transaksi penyewaan kendaraan
	sewaKendaraan(kendaraan) {
		this.kendaraanDisewa = kendaraan; // set kendaraan yang disewa
		console.log(`${this.nama} menyewa ${kendaraan.getInfo()}`);
	}

	// method untuk tampilkan informasi pelanggan
	getInfo() {
		if (this.kendaraanDisewa) {
			return `${this.nama} - ${
				this.nomorTelepon
			} | Menyewa: ${this.kendaraanDisewa.getInfo()}`;
		} else {
			return `${this.nama} - ${this.nomorTelepon} | Tidak menyewa kendaraan`;
		}
	}
}

// Class untuk manajemen pelanggan
class ManajemenPelanggan {
	constructor() {
		this.pelanggan = [];
	}

	// method untuk menambah pelanggan baru
	tambahPelanggan(pelanggan) {
		this.pelanggan.push(pelanggan);
	}

	// method untuk tampilkan daftar pelanggan yang sedang menyewa
	tampilkanPenyewa() {
		console.log("\n=== Daftar Pelanggan yang Menyewa Kendaraan ===");
		// Loop pelanggan di daftar
		this.pelanggan.forEach((pelanggan) => {
			// Cek apakah pelanggan sedang menyewa kendaraan (kendaraanDisewa tidak null)
			if (pelanggan.kendaraanDisewa) {
				// Jika iya, tampilkan informasi pelanggan
				console.log(pelanggan.getInfo());
			}
		});
	}
}

console.log("=== Sistem Manajemen Transportasi ===");

// buat sistem manajemen
const sistem = new ManajemenPelanggan();

// buat pelanggan
const pelanggan1 = new Pelanggan("Budi", "08123456789");
const pelanggan2 = new Pelanggan("Alice", "08234567890");
const pelanggan3 = new Pelanggan("Bob", "08345678901");

// tambah pelanggan ke sistem (memasukkan pelanggan ke daftar)
sistem.tambahPelanggan(pelanggan1); // tambah Budi ke sistem
sistem.tambahPelanggan(pelanggan2); // tambah Alice ke sistem
sistem.tambahPelanggan(pelanggan3); // tambah Bob ke sistem

// buat kendaraan
const mobil1 = new Mobil("Toyota", "Camry", 4);
const motor1 = new Motor("Honda", "Beat", "Matic");

// tampilkan informasi kendaraan
console.log("\nInformasi Kendaraan:\n");
console.log(`1. ${mobil1.getInfo()}`);
console.log(`2. ${motor1.getInfo()}`);

// tampilkan semua pelanggan (sebelum ada yang menyewa)
console.log("\nDAFTAR PELANGGAN:\n");
console.log(pelanggan1.getInfo());
console.log(pelanggan2.getInfo());
console.log(pelanggan3.getInfo());

// tampilkan proses penyewaan kendaraan
console.log("\n=== Proses Penyewaan ===\n");
pelanggan1.sewaKendaraan(mobil1);
pelanggan3.sewaKendaraan(motor1);

// tampilkan semua pelanggan yang sedang menyewa
sistem.tampilkanPenyewa();

// tampilkan semua pelanggan (setelah ada yang menyewa)
console.log("\nDAFTAR PELANGGAN (setelah ada yang menyewa):\n");
console.log(pelanggan1.getInfo());
console.log(pelanggan2.getInfo());
console.log(pelanggan3.getInfo());
