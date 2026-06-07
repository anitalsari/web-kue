
const NOMOR_WA = "6288291245291"; 

// 2. LOGIKA TOGGLER NAVBAR (Agar menu HP aktif)
let menu = document.querySelector('#toggler');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onchange = () => {
        navbar.classList.toggle('active');
    };
    window.onscroll = () => {
        menu.checked = false;
        navbar.classList.remove('active');
    };
}

// 3. FUNGSI INTERAKTIF: Memunculkan/Sembunyikan Kolom Alamat
function toggleAlamat(produk) {
    let metodeKirim = document.getElementById(`kirim-${produk}`).value;
    let inputAlamat = document.getElementById(`alamat-${produk}`);
    
    if (metodeKirim.includes("GoSend")) {
        inputAlamat.style.display = "block"; // Muncul jika pilih GoSend
        inputAlamat.required = true;
    } else {
        inputAlamat.style.display = "none";  // Sembunyi jika pilih Pickup
        inputAlamat.value = "";              // Kosongkan kembali teksnya
    }
}

// 4. FUNGSI TOMBOL PESAN PRODUK KE WHATSAPP (Lengkap dengan Alamat & Metode Transaksi)
function pesanBirthday() {
    let rasa = document.getElementById('rasa-birthday').value;
    let custom = document.getElementById('custom-birthday').value;
    let tulisan = document.getElementById('tulisan-birthday').value;
    let kirim = document.getElementById('kirim-birthday').value;
    let alamat = document.getElementById('alamat-birthday').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Birthday Cake*:\n\n` +
               `- Rasa: ${rasa}\n` +
               `- Desain: ${custom}\n` +
               `- Tulisan Kue: "${tulisan || '-'}"\n` +
               `- Pengiriman: ${kirim}\n` +
               (alamat ? `- Alamat Kirim: ${alamat}\n` : '') +
               `- Transaksi via: *Transfer Bank / QRIS* (Mohon kirimkan nomor rekening/QRIS ya kak!)\n\n` +
               `Mohon segera diproses ya!`;
    bukaWhatsApp(teks);
}

function pesanMacaron() {
    let rasa = document.getElementById('rasa-macaron').value;
    let porsi = document.getElementById('porsi-macaron').value;
    let kirim = document.getElementById('kirim-macaron').value;
    let alamat = document.getElementById('alamat-macaron').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Macaron*:\n\n` +
               `- Rasa: ${rasa}\n` +
               `- Porsi: ${porsi}\n` +
               `- Pengiriman: ${kirim}\n` +
               (alamat ? `- Alamat Kirim: ${alamat}\n` : '') +
               `- Transaksi via: *Transfer Bank / QRIS / COD saat Pickup*\n\n` +
               `Mohon segera diproses ya!`;
    bukaWhatsApp(teks);
}

function pesanCupcake() {
    let rasa = document.getElementById('rasa-cupcake').value;
    let porsi = document.getElementById('porsi-cupcake').value;
    let kirim = document.getElementById('kirim-cupcake').value;
    let alamat = document.getElementById('alamat-cupcake').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Cupcake*:\n\n` +
               `- Rasa: ${rasa}\n` +
               `- Porsi: ${porsi}\n` +
               `- Pengiriman: ${kirim}\n` +
               (alamat ? `- Alamat Kirim: ${alamat}\n` : '') +
               `- Transaksi via: *Transfer Bank / QRIS / COD saat Pickup*\n\n` +
               `Mohon segera diproses ya!`;
    bukaWhatsApp(teks);
}

function pesanCookies() {
    let rasa = document.getElementById('rasa-cookies').value;
    let porsi = document.getElementById('porsi-cookies').value;
    let kirim = document.getElementById('kirim-cookies').value;
    let alamat = document.getElementById('alamat-cookies').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Cookies*:\n\n` +
               `- Rasa: ${rasa}\n` +
               `- Porsi: ${porsi}\n` +
               `- Pengiriman: ${kirim}\n` +
               (alamat ? `- Alamat Kirim: ${alamat}\n` : '') +
               `- Transaksi via: *Transfer Bank / QRIS / COD saat Pickup*\n\n` +
               `Mohon segera diproses ya!`;
    bukaWhatsApp(teks);
}

function pesanBento() {
    let rasa = document.getElementById('rasa-bento').value;
    let custom = document.getElementById('custom-bento').value;
    let tulisan = document.getElementById('tulisan-bento').value;
    let kirim = document.getElementById('kirim-bento').value;
    let alamat = document.getElementById('alamat-bento').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Bento Cake*:\n\n` +
               `- Rasa: ${rasa}\n` +
               `- Desain: ${custom}\n` +
               `- Tulisan Kue: "${tulisan || '-'}"\n` +
               `- Pengiriman: ${kirim}\n` +
               (alamat ? `- Alamat Kirim: ${alamat}\n` : '') +
               `- Transaksi via: *Transfer Bank / QRIS* (Mohon kirimkan nomor rekening/QRIS ya kak!)\n\n` +
               `Mohon segera diproses ya!`;
    bukaWhatsApp(teks);
}

function pesanDonut() {
    let rasa = document.getElementById('rasa-donut').value;
    let porsi = document.getElementById('porsi-donut').value;
    let kirim = document.getElementById('kirim-donut').value;
    let alamat = document.getElementById('alamat-donut').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Donut*:\n\n` +
               `- Toping: ${rasa}\n` +
               `- Porsi: ${porsi}\n` +
               `- Pengiriman: ${kirim}\n` +
               (alamat ? `- Alamat Kirim: ${alamat}\n` : '') +
               `- Transaksi via: *Transfer Bank / QRIS / COD saat Pickup*\n\n` +
               `Mohon segera diproses ya!`;
    bukaWhatsApp(teks);
}

// 5. JEMBATAN KIRIM DATA KE API WHATSAPP
function bukaWhatsApp(teks) {
    let url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(teks)}`;
    window.open(url, '_blank');
}