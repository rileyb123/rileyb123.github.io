var checks;

function setUp(){
    checks = makeid(15)
    document.getElementById("textCaptcha1").innerHTML = checks;
    
}

var captchaText;

function check() {
   captchaText=document.getElementById("captchaCheck").value;
  if ( checks == captchaText) {
    document.getElementById("last-name").removeAttribute("readonly");
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
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function testGEO(){
    var url = 'https://open.mapquestapi.com/nominatim/v1/reverse.php?key=8KsEsIPedqvLbbCeDm4TA5uUxCLAe7Cn&format=json&lat=' + document.getElementById("lat").value + '&lon=' + document.getElementById("long").value;
    fetch(url,{mode: 'cors'}).then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if(data.address.country == null || data.address.country != "United States of America")
        document.getElementById("address").value = "Must be in the US";
       else
         document.getElementById("address").value = data.address.country+','+data.address.hamlet+','+data.address.state+','+'\n'+data.address.road+','+data.address.postcode;
      }).catch(function() {
        console.log("FAIL");
      });
    }


