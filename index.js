// let url ="https://icanhazdadjoke.com/slack";
let joke = document.getElementById("joke");
fetch("https://icanhazdadjoke.com/slack")
.then(response=> response.json())
.then(data => {
    const jokeData = data.attachments[0].text;
    joke.innerHTML = jokeData;
})