// Possible 8 Ball responses
let responses = [ "Without a doubt", "Ask again later", "Don't count on it", "It is certain", "Reply hazy", 
    "try again","It is decidedly so", "My reply is no", "Better not tell you now", "My sources say no",
    "Yes definitely", "Cannot predict now", "Outlook not so good", "You may rely on it", "Concentrate and ask again",
    "Very doubtful", "As I see it, yes", "Most likely", "Outlook good", "Yes"];
let question = (prompt("What do you want to ask the magic 8 ball"));


// Display a randomly chosen response
let randomNum = Math.floor(Math.random() * responses.length);
let randomTime = Math.floor(Math.random() * 10);
const questionCustomer = document.getElementById("questionCustomer");
const answerCustomer = document.getElementById("answerCustomer");
questionCustomer.innerHTML = ("<h2>" + question + "</h2>");
if (randomTime > 2){
    answerCustomer.innerHTML = ("<p>This one is hard... <strong>Can you give me " + randomTime + " seconds</strong>.</p>");
};
setTimeout(thisIsHard, 1000 * randomTime);
function thisIsHard(){
    answerCustomer.innerHTML = ("<p>Magic 8 Ball says... <strong>" + responses[randomNum] + "</strong>.</p>");
}