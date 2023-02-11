const photo = {};



async function postData(url) {
    
   const response = await fetch(url);
   let users = await response.json();
  return users; // parses JSON response into native JavaScript objects
}


