const Discord = require('discord.js')

module.exports={
    name:"SteamOSinfo",
    description:"Informações sobre o SteamOS",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#f0a8e7')
            .setTitle("Acesse o site oficial do SteamOS")
            .setURL('https://store.steampowered.com/steamos/')
            .setDescription('Baseado na distribuição Debian do Linux, o Steam OS é um sistema operacional com uma proposta ambiciosa. O sistema operacional da Valve é uma alternativa para os gamers que desejam tranformar o computador em uma Steam Machine. Para isso, a companhia investe em uma versão aprimorada do sistema Big Picture (interface que serve como base para a plataforma) e em um novo controle misterioso, que aposta no fim dos direcionais analógicos como forma de unir as experiências de uso encontradas em computadores e video games tradicionais.\n\nAlém de priorizar hardwares próprios (as já famosas Steam Machines, desenvolvidas junto a diversos parceiros), a Valve também pretende permitir que os consumidores montem suas próprias máquinas. Para isso, foi disponibilizado gratuitamente o download do Steam OS.\n\nEssa distro possui a interface gnome e com o steam ja pré instalado para uso juntamente com drives de CPU e GPU automaticas. Com isso a distribuição ja da tudo o que é preciso para a instalação e a configuração. Porém por ser baseado em Linux, é ja de imaginar que boa parte dos jogos terá que ser executado com o proton. Seus requisitos são exigentes para a perfomace, Processador Intel Core i5-2310 de 2,9 GHz, 8 GB de memória RAM DDR3, Placa de vídeo NVIDIA GeForce GTX 660 com 2 GB de RAM e HD de 1 TB.')
            .setAuthor('O que é o SteamOS?', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36709c4c-ae28-4ce7-a067-7e7c41600e50/d718cal-f0ee0fe6-b054-4d90-9ef7-aa97526c410b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzY3MDljNGMtYWUyOC00Y2U3LWEwNjctN2U3YzQxNjAwZTUwXC9kNzE4Y2FsLWYwZWUwZmU2LWIwNTQtNGQ5MC05ZWY3LWFhOTc1MjZjNDEwYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.TqeXm3SoCjJTIlJQlEvdJQIfNPTIGiSXjDRdPiV205k')
	        .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36709c4c-ae28-4ce7-a067-7e7c41600e50/d718cal-f0ee0fe6-b054-4d90-9ef7-aa97526c410b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzY3MDljNGMtYWUyOC00Y2U3LWEwNjctN2U3YzQxNjAwZTUwXC9kNzE4Y2FsLWYwZWUwZmU2LWIwNTQtNGQ5MC05ZWY3LWFhOTc1MjZjNDEwYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.TqeXm3SoCjJTIlJQlEvdJQIfNPTIGiSXjDRdPiV205k')
	        .addFields(
                { name: 'Empresa', value: 'Valve Corporation', inline: true },
				{ name: "Criação", value: '13 de dezembro de 2013', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}