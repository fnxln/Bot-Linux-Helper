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
        
    ]

    setInterval(function(){
        var status = activities_list[Math.floor(Math.random() * activities_list.length)]
        client.user.setPresence({ activity: {name: status}, status:'online'})
    }, 10000)
});

client.on('message', message => {
    
    if (message.content === '%Ubuntuinfo'){
        client.commands.get('Ubuntuinfo').execute(message)
    }else if (message.content === '%Archinfo'){
        client.commands.get('Archinfo').execute(message)
    }else if (message.content === '%Mintinfo'){
        client.commands.get("Mintinfo").execute(message)
    }else if (message.content === '%UbuntuMateinfo'){
        client.commands.get('UbuntuMateinfo').execute(message)
    }else if (message.content === '%Kaliinfo'){
        client.commands.get('Kaliinfo').execute(message)
    }else if (message.content === '%Elementaryinfo'){
        client.commands.get('Elementaryinfo').execute(message)
    }else if (message.content === '%SteamOSinfo'){
        client.commands.get('SteamOSinfo').execute(message)
    }else if (message.content === '%Debianinfo'){
        client.commands.get('Debianinfo').execute(message)
    }else if (message.content === "%UbuntuMinfo"){
        client.commands.get("UbuntuMinfo").execute(message)
    }else if (message.content === '%Manjaroinfo'){
        client.commands.get("Manjaroinfo").execute(message)
    }else if(message.content === '%MXLinuxinfo'){
        client.commands.get("MXLinuxinfo").execute(message)
    }else if(message.content === '%PopOSinfo'){
        client.commands.get("PopOSinfo").execute(message)
    }else if(message.content === '%Fedorainfo'){
        client.commands.get("Fedorainfo").execute(message)
    }else if(message.content === '%EndeavourOSinfo'){
        client.commands.get("EndeavourOSinfo").execute(message)
    }else if(message.content === '%KDENeoninfo'){
        client.commands.get("KDENeoninfo").execute(message)
    }else if(message.content === '%Solusinfo'){
        client.commands.get("Solusinfo").execute(message)
    }
});