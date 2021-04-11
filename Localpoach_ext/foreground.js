
//Scrapes input from searchbar 

console.log("test");
const searched_term= document.getElementsByTagName("title")[0];

var searched_term1=searched_term.toString();
var words=searched_term1.split(" ");

var food_type=words[0];
var zipcode="78705";




const getFive = (term, loc) => {

    //URI is manipulated using inputed term and location.
    var uri = 'https://localhost:3000/res_info';
    //log URI
    console.log(uri);
  
    //stage the request using private bearer !REMOVE TOKEN WHEN PUBLISHING TO GIT!
    //or rip my CC somebody bout to spam 50000 req/s
    var settings = {
        method: 'GET',
        url: uri
     
    };
  
    //using ajax to invoke
    $.ajax(settings).done(function (response) {
    console.log(response);
    });
  }
  
  getFive(food_type,zipcode);
