// Get data
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Nimi: ${fullName.value}<br>
    Email: ${email.value}<br> Tel. nr: ${phone.value}<br> Sõnum: ${mess.value}`;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kristjan@rohkemelus.ee",
    Password : "6649130B554D63E472988BCA1CDE87861303",
    To : 'kristjan@rohkemelus.ee',
    From : "kristjan@rohkemelus.ee",
    Subject : subject.value,
    Body : bodyMessage
    }).then(
  message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  
  function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
  
      event.preventDefault();
    }