async function postData(url) {
    
   const response = await fetch(url);
   try{
    let data = await response.json();
    return data;
   } catch (e) {
    console.log(e)
   }
   
   // parses JSON response into native JavaScript objects
}


