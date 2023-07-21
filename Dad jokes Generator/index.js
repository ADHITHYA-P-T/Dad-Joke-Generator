const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apikey ="1Z+h5KOuvm1BEpjn1I2kgA==LecyqokpA0DMfZ0O";
const options={
    method : "GET",
    headers:{
        "X-Api-Key" : apikey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        jokeEl.innerText="Updating......";
    btnEl.disabled=true;
    btnEl.innerText="Loading...";
   const response = await fetch(apiURL,options);
   const data=await response.json();


    btnEl.disabled=false;
    btnEl.innerText="TELL ME A JOKE";

  jokeEl.innerText=data[0].joke;
}

  catch (error) {
        jokeEl.innerText="An Error Happened, try again  later";
        console.log(error)
        btnEl.disabled=false;
        btnEl.innerText="TELL ME A JOKE";
    }  
} 
    


btnEl.addEventListener("click",getJoke);