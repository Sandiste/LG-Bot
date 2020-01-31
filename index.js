const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjcyNTMyNjI1ODY0MjYxNjQz.XjM-eg.lWblmVn5NnuKrkwuZ7Hf1GajJWY");

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "rd mypos"){
        message.channel.send("@dujoueur: #12 - 2500 elo");
    }
    if(message.content === prefix + "rd leaderboard"){
        message.channel.send("#1 - IGNjoueur - elo");
    /*voir comment faire une liste*/
    }
    if(message.content === prefix + "rd win + IGNperdant"){
        message.channel.send("+x elo pour IGNgagnant / -x elo pour IGNperdant");
    }
});