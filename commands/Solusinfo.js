const Discord = require("discord.js")

module.exports = {
	name: 'solus',
	description: 'Informações do Solus!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#1e4982')
	        .setTitle('Acesse o site oficial do Solus')
	        .setURL('https://getsol.us/home/')
            .setAuthor('O que é o Solus?', 'https://getsol.us/imgs/solus.png')
            .setDescription('Solus é um sistema operacional independente baseado no kernel Linux. Foi criado como sucessor do SolusOS e EvolveOS, ambos sendo criações anteriores de Ikey Doherty. Hoje é oferecido no modelo rolling release e implementa um novo gerenciador de pacotes baseado no PiSi, chamado eopkg.\n\nAo contrário de muitas outras distribuições Linux, que são baseadas em outras (por exemplo, Ubuntu no Debian ou Manjaro no Arch, o Solus é uma distribuição escrita do zero por seu desenvolvedor e pela ajuda da comunidade. Isso tem muitas vantagens, mas também tem desvantagens, como essa, embora tenhamos experiência anterior em Linux, dar o salto para o SolusOS é uma mudança radical.\n\nEssa distribuição usa uma versão derivada do gerenciador de pacotes PiSi, chamado eopkg. Podemos instalar e gerenciar os pacotes usando o terminal com o eopkg comandos , embora o mais prático e rápido seja usar seu próprio centro de software, onde encontraremos praticamente o que precisamos. Quanto à área de trabalho, encontramos uma chamada "Budgie", uma área de trabalho muito rápida, fluida e personalizável, cuja aparência lembra o GNOME 2, embora possua elementos Whisker e Cinnamon. Também podemos encontrar edições no GNOME, MATE e PLASMA desk.')
	        .setThumbnail('https://getsol.us/imgs/solus.png')
	        .addFields(
                { name: 'Criadores', value: 'Ikey Doherty (até 2018), Peter Connor, Joshua Strobl, Stefan Ric, Bryan T. Meyers, Pierre-Yves, Joey Riches e outros', inline: true },
                {name: 'Criação', value:'27 de dezembro de 2015'},
                { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'eopkg', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo eopkg upgrade', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
