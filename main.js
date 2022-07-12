var form = document.getElementById("my-form");
let know = document.getElementById("know");
let name = document.getElementById("name");
let status = document.getElementById("my-form-status");
let message = document.getElementById("message");
let unknowbtn = document.getElementById("unknowbtn");
let knowbtn = document.getElementById("knowbtn");
let subment = document.getElementById("my-form-button");
let resetbtn = document.getElementById("resetbtn");
let resetp = document.getElementById("resetbtnp");

async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Done, Your message is sended";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

function knowrange(){
  document.getElementById("name").style.opacity = "1";
  document.getElementById("knowbtn").style.backgroundColor = "red";
  document.getElementById("unknowbtn").style.backgroundColor = "darkslateblue";
  document.getElementById("unknowbtn").style.color = "white";
  document.getElementById("unknowbtn").style.opacity = "1";
  document.getElementById("knowbtn").style.opacity = "0";
  status.innerHTML="Now, You can send a knowen message";
  document.getElementById("message").style.opacity = "1";
  name.value="";
  document.getElementById("my-form-button").style.opacity = '1';
  document.getElementById("resetbtn").style.opacity = '1';
}
function unknowrange(){
  document.getElementById("name").style.opacity = "0";
  status.innerHTML="Now, You can send a unknowen message";
  document.getElementById("unknowbtn").style.backgroundColor = "red";
  document.getElementById("unknowbtn").style.opacity = "0";
  document.getElementById("knowbtn").style.backgroundColor = "darkslateblue";
  document.getElementById("knowbtn").style.color = "white";
  document.getElementById("knowbtn").style.opacity = "1";
  document.getElementById("message").style.opacity = "1";
  name.value="unknow";
  document.getElementById("resetbtn").style.opacity = '1';
  document.getElementById("my-form-button").style.opacity = '1';

}
function restartbage(){
  document.getElementById("unknowbtn").style.backgroundColor = "darkslateblue";
  document.getElementById("unknowbtn").style.opacity = "1";
  document.getElementById("knowbtn").style.backgroundColor = "darkslateblue";
  document.getElementById("knowbtn").style.opacity = "1";
  document.getElementById("knowbtn").style.color = "white";
  document.getElementById("unknowbtn").style.color = "white";
  status.innerHTML="Chose how you want to send a message";
  document.getElementById("message").style.opacity = "0";
  document.getElementById("resetbtn").style.opacity = '0';
  document.getElementById("my-form-button").style.opacity = '0';
  document.getElementById("name").style.opacity = "0";
  message.value="";
  name.value="";

}