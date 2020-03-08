// // let userAnswer = prompt("NBA Player Generator")
 document.querySelector('#btn').addEventListener('click', function (){
  let name = document.querySelector('#search').value
  if(!name){
    alert("Please Enter a name")
  }
  // What will the user type in example: ${firstName}${lastName}?
 fetch(`https://swapi.co/api/people`)
   .then(response => response.json())
   .then(res => {
     for (var i = 0; i < res.results.length; i++){
       if(name.toLowerCase() === res.results[i].name.toLowerCase()){
         console.log(res.results[i].hair_color);
         console.log(res.results[i].height);
         console.log(res.results[i].skin_color);
         // this part allows the information to show on the page
         document.querySelector('#hair').innerHTML = res.results[i].hair_color
         document.querySelector('#height').innerHTML = res.results[i].height
         document.querySelector('#skinColor').innerHTML = res.results[i].skin_color
       }

     }

   })
   .catch((error) =>{
     console.log('There was an error', error);
  });
});
