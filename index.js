const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

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

    const activities_list = [
        "Explorando o Ubuntu Mate", 
        "Tentando instalar o Arch Linux",
        "Analisando o Ubuntu", 
        "Trabalhando com o Mint",
        "Usando o Kali porque sou hacker",
        "Fujicando no ElementaryOS",
        "Preparando o PC com o SteamOS",
        "Instalando o Ubuntu Minimal no PC de pedra",
        "Desenvolvendo no PopOS_Linux",
        "Jogando no Manjaro",
        "Vendo se o MXLinux é tão bom assim",
        "Arriscando o Gentoo",
        "Rodando o Bot no CentOS"
        
    ]

    setInterval(function(){
        var status = activities_list[Math.floor(Math.random() * activities_list.length)]
        client.user.setPresence({ activity: {name: status}, status:'online'})
    }, 100000)
});

client.on('message', message => {

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`por favor ${timeLeft.toFixed(1)} segundos para executar o \`${command.name}\`.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Erro ao tentar executar esse comando, se o erro persistir denuncie para o desenvolvedor.');
	}
});

client.login(token);