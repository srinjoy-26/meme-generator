const jokes = document.getElementById('jk')
const jokebtn = document.getElementById('JokeBtn')



// const generateJoke = () => {
//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com' , setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })

    
// }
const generateJoke = async () => {

try{
    
            const setHeader = {
                headers: {
                    Accept : "application/json"
                }
            }
        const res = await fetch('https://icanhazdadjoke.com/' , setHeader);
        const data = await res.json();
        const {joke} = data;
        console.log(joke);
         jokes.innerHTML = data.joke;
    
}catch(err){
    console.log(err);
}

}

jokebtn.addEventListener('click' , generateJoke)
generateJoke()