var checks;

function createChecks(){
   checks = 
    [
        makeid(30)
    ]
}  

function setUp(){
    document.getElementById("target-value").innerHTML = (getRandomArbitrary(1,10000)).toLocaleString().replace(',','');
    createChecks();
    document.getElementById("textCaptcha1").innerHTML = checks[0];
}

var captchaText;

function check() {
   captchaText=document.getElementById("captchaCheck").value;
  if ( checks[0] == captchaText) {
    document.getElementById("last-name").removeAttribute("disabled");
  } else {
    alert("sorry I don't trust you enough");
    location.reload();
  }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


