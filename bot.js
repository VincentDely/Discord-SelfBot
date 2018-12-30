const Discord = require('discord.js');
const fs = require('fs');
const requirement = ' ';

const TOKEN = "INSÉRER VOTRE TOKEN";

var bot = new Discord.Client();

bot.on('ready', () => {
	console.log("@ Le bot attend vos instructions.");
})

bot.on('message', message => {
	if (!(message.author.id === "279493399248240640")) return;

	if (message.content.includes(requirement)) {
		
		var embed = new Discord.RichEmbed()
		.setColor(0x0A74D3)
        .setDescription(message.content)
		
		//Ici le bot va tout simplement renvoyer un message dont vous serez l'auteur
    //et de type Embed.
		
        message.channel.send(embed);
	}
})

bot.login(TOKEN);
