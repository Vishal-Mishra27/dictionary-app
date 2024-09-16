function fetchWord(){

var word=document.getElementById('input').value
var output=document.getElementById('paragraph')

const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
const requestOptions = {
  method: "GET",
  redirect: "follow",
  input:"input"
};

fetch(url, requestOptions)
  .then((response) => 
    response.json()
).then((result) => {
        // console.log(result[0].meanings[0].synonyms);
        console.log(result)
        // const greet=result[0].meanings[0].synonyms
        // output.innerHTML=greet;
        console.log(result[0].meanings[0].definitions[0].
definition
);
//         console.log(result[0].meanings[0].definitions[1].
// definition);
const  meaning=result[0].meanings[0].definitions[0].
definition
output.innerHTML=meaning;


var definition=result[0].meanings[0].definitions[1].
definition
        output.innerHTML+=`<br>${definition}`;

}).catch((error) => {
  console.log('error is detected'+error)
  output.innerHTML='Please enter a vaild word in english'
});
}
  document.querySelector('#search').addEventListener('click',fetchWord)