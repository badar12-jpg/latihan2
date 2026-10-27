// variabel untuk menyimpan porsi makan kucing
// dengan nilai awal nol (0)
let porsi = 0

function beriMakan() {
  // tambah porsi makan +1
  porsi = porsi + 1
  
  //update angkat porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 12) {
    // ganti gambar kucing menjadi kucing sedang
    document.getElementById('poto-kucing').src = "minigame/kucinggemuk.jpg"
    
    // menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText="Kucing gemuk 😺"
    
  } else if (porsi >= 5) {
    
   
    // ganti gambar kucing menjadi kucing gemuk 
    document.getElementById('poto-kucing').src = "minigame/kucingsedang.jpg"
    
    // menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText="Kucing sedang 😺"
  }
}