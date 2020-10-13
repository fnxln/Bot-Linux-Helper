const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	var figlet = require('figlet');
 
    figlet('BOT READY!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
});

client.on('message', message => {
    
    if (message.content === '!UbuntuInfo'){
        client.commands.get('UbuntuInfo').execute(message);
    }else if (message.content === '!ArchInfo'){
        client.commands.get('ArchInfo').execute(message)
    }
});

client.login('token');
