document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url:"https://www.google.com/"});
            };
        })();
    }
});


console.log("test");
const searched_term= document.getElementsByTagName("title")[0];

var searched_term1=searched_term.toString();
var words=searched_term1.split(" ");

var food_type=words[0];
var zipcode="78705";