const Discord = require("discord.js")

module.exports = {
	name: 'info-ubuntu-mate',
	aliases: ['info-ubuntumate', 'info-mate-ubuntu', 'info-mateubuntu'],
	description: 'Informações do Ubuntu Mate!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('60a802')
	        .setTitle('Acesse o site oficial da Ubuntu Mate')
	        .setURL('https://ubuntu-mate.org/')
	        .setAuthor('O que é o Ubuntu Mate?', 'https://ubuntu-mate.org/images/get-involved/logo-guidelines/Circle_of_MATEs_green.png')
	        .setDescription("O Ubuntu Mate é considerado um dos 'sabores' oficiais do Ubuntu, é uma distribuição estável e fácil de usar com um ambiente de área de trabalho configurável. É ideal para quem deseja o máximo de seus computadores e prefere uma metáfora de desktop tradicional. Com requisitos de hardware modestos, é adequado para estações de trabalho modernas, computadores de placa única e hardware mais antigo. O Ubuntu Mate torna os computadores modernos mais rápidos e os computadores antigos utilizáveis.\n\nNecessitando de apenas 512Mb de RAM, e 10GB de armazenamento o Ubuntu Mate acaba se tornando uma distro bem equilibrada, o mesmo usa a interface MATE que é uma dessas implementações de um ambiente de desktop.\n\nMATE Desktop fornece um ambiente de área de trabalho intuitivo e atraente usando metáforas tradicionais, o que significa que se você já usou o Microsoft Windows ou o macOS da Apple , vai parecer muito familiar. Resumindo, ele é ideal para um novato que está entrando no mundo Linux. e tem om computador fraco.")
	        .setImage("https://ubuntu-mate.org/images/homepage/01_familiar.png")
	        .addFields(
                { name: 'Criadores', value: 'Martin Wimpress e Alan Pope', inline: true },
				{ name: 'Empresa', value: 'Canonical', inline: true},
				{ name: "Criação", value: '23 de outubro de 2014', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
