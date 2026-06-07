
const NOMOR_WA = "6288291245291"; 

function pesanBirthday() {
    let rasa = document.getElementById('rasa-birthday').value;
    let custom = document.getElementById('custom-birthday').value;
    let tulisan = document.getElementById('tulisan-birthday').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Birthday Cake*:\n\n` +
               `- ${rasa}\n` +
               `- ${custom}\n` +
               `- Tulisan Kue: "${tulisan || '-'}"\n\n` +
               `Mohon diproses ya kak!`;
               
    bukaWhatsApp(teks);
}

function pesanMacaron() {
    let rasa = document.getElementById('rasa-macaron').value;
    let porsi = document.getElementById('porsi-macaron').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Macaron*:\n\n` +
               `- ${rasa}\n` +
               `- ${porsi}\n\n` +
               `Mohon diproses ya kak!`;
               
    bukaWhatsApp(teks);
}

function pesanCupcake() {
    let rasa = document.getElementById('rasa-cupcake').value;
    let porsi = document.getElementById('porsi-cupcake').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Cupcake*:\n\n` +
               `- ${rasa}\n` +
               `- ${porsi}\n\n` +
               `Mohon diproses ya kak!`;
               
    bukaWhatsApp(teks);
}

function pesanCookies() {
    let rasa = document.getElementById('rasa-cookies').value;
    let porsi = document.getElementById('porsi-cookies').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Cookies*:\n\n` +
               `- ${rasa}\n` +
               `- ${porsi}\n\n` +
               `Mohon diproses ya kak!`;
               
    bukaWhatsApp(teks);
}

function pesanBento() {
    let rasa = document.getElementById('rasa-bento').value;
    let custom = document.getElementById('custom-bento').value;
    let tulisan = document.getElementById('tulisan-bento').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Bento Cake*:\n\n` +
               `- ${rasa}\n` +
               `- ${custom}\n` +
               `- Tulisan Kue: "${tulisan || '-'}"\n\n` +
               `Mohon diproses ya kak!`;
               
    bukaWhatsApp(teks);
}

function pesanDonut() {
    let rasa = document.getElementById('rasa-donut').value;
    let porsi = document.getElementById('porsi-donut').value;
    
    let teks = `Halo Bee Bake, saya mau pesan *Donut*:\n\n` +
               `- ${rasa}\n` +
               `- ${porsi}\n\n` +
               `Mohon diproses ya kak!`;
               
    bukaWhatsApp(teks);
}

// Fungsi pembantu untuk mengarahkan ke link WhatsApp
function bukaWhatsApp(teks) {
    let url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(teks)}`;
    window.open(url, '_blank');
}