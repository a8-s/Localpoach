


//Gets Small Business Details from Yelp API
const getFive = (term, loc) => {

    //URI is manipulated using inputed term and location.
    var uri = 'yelp';
    //log URI
    console.log(uri);
  
    //stage the request using private bearer !REMOVE TOKEN WHEN PUBLISHING TO GIT!
    //or rip my CC somebody bout to spam 50000 req/s
    var config = {
        method: 'get',
        url: uri,
        /*headers: {
          'yelp auth'} */
    };
  
    //axios() makes call based off of config, get req
    axios(config)
      .then(function (response) {
        value=JSON.stringify(response.data);
        return value;
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  console.log(getFive("Indian", "78705"));

