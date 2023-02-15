async function postData(url) {
    
   const response = await fetch(url);
   let data = await response.json();
  return data; // parses JSON response into native JavaScript objects
}


