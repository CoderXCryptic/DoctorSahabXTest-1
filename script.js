
function btnclick() {
  const docmnam = document.getElementById("name")
  const valueof = docmnam.value
  const docname = document.getElementById("docname")
  docname.innerHTML = valueof
}
const navtag = document.getElementById("navtags")
const fx = document.getElementById("buttonn")
const materialSymbol = document.getElementById("materialSymbol")
materialSymbol.style.display = "none"

const hrButton = document.getElementById("hrButton")
hrButton.style.display = "none"
fx.addEventListener('mouseenter', () => {
  fx.style.accentColor = 'darkred'
  materialSymbol.style.margin = "auto"
  materialSymbol.style.display = "block"
  materialSymbol.style.opacity = "1"
  hrButton.style.display = "block"

})

fx.addEventListener('mouseleave', () => {
  materialSymbol.style.display = "block"
  materialSymbol.style.opacity = "1"
  hrButton.style.display = "none"
})
const signupDoc = document.getElementsByClassName("login");
const signupPat = document.getElementsByClassName("login");
const tickDoc = document.getElementsByClassName("block");
const tickPat = document.getElementsByClassName("block");
tickDoc.style.display = 'none';
signupDoc.addEventListener('mouseenter', () => {
  tickDoc.style.display = "block";
  tickDoc.style.display = "hidden"
});
signupDoc.addEventListener('mouseleave', () => {
  tickDoc.style.display = 'none';
});
signupPat.addEventListener('mouseenter', () => {
  tickPat.style.display = "block";
});
signupPat.addEventListener('mouseleave', () => {
  tickPat.style.display = 'none';
});
let underlineMedical = document.getElementById("underlineMedical");
signupDoc.addEventListner('mouseenter', () => {
  underlineMedical.style.animation = "underlineMedical 1s ease-in-out infinite";
})


function closeOfDialog() {
  var dialog = document.getElementById('dialogCommunity');
  dialog.close();  
}
function openDialog(dialogId) {
  document.getElementById(dialogId).style.display = 'block';
}

function closeDialog() {
  const dialogs = document.querySelectorAll('.dialog');
  dialogs.forEach(dialog => {
      dialog.style.display = 'none';
  });
}

function submitAppointment() {
  const timing = document.getElementById('timing').value;
  const experience = document.getElementById('experience').value;
  const price = document.getElementById('price').value;

  // Here you can add your logic to handle the submitted data
  alert(`Appointment Scheduled!\nTiming: ${timing}\nExperience: ${experience} years\nPrice: $${price}`);
  closeDialog();
}
function openOfDialog() {
  var dialog = document.getElementById('dialogCommunity');
  dialog.style.display = 'flex';  
}
openOfDialog()

// Function to close the modal
function closeOfDialog() {
  var dialog = document.getElementById('dialogCommunity');
  dialog.style.display = 'none'; 
  dialog.style.opacity = '0'
}
