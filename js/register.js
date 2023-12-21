function checkAndSubmit() {
   // Barcha inputlarni olish
   var firstname = document.getElementById('firstname').value;
   var lastname = document.getElementById('lastname').value;
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;
   var confirmPassword = document.getElementById('confirmPassword').value;

   // Agar har bir input to'ldirilmagan bo'lsa, foydalanuvchiga xabar bering
   if (!firstname || !lastname || !username || !password || !confirmPassword) {
       alert('Iltimos, barcha maydonlarni to\'ldiring!');
   } else {
       // Barcha inputlar to'ldirilgan bo'lsa, boshqa sahifaga o'tish
       window.location.href = 'boshqa-sahifa.html';
   }
}