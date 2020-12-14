const Discord = require("discord.js")

module.exports = {
	name: 'info-xubuntu',
	description: 'Informações do Xubuntu!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#393bb8')
	        .setTitle('Acesse o site oficial do Xubuntu')
	        .setURL('https://xubuntu.org')
	        .setAuthor('O que é o Xubuntu?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Xubuntu_logo.svg/1200px-Xubuntu_logo.svg.png')
	        .setDescription("O Xubuntu é um sistema operativo elegante e fácil de usar. O Xubuntu vem com o Xfce, que é um ambiente gráfico de trabalho estável, leve e configurável. É perfeito para aqueles que querem obter o máximo partido dos seus desktops, laptops e netbooks. Possui um visual moderno e recursos suficientes para um uso diário eficiente. Também funciona bem em hardware antigo.\n\nO 'X' no Xubuntu significa Xfce, o ambiente gráfico de trabalho no Xubuntu. Embora a palavra ubuntu denote a dependência e o uso do núcleo do Ubuntu, ela representa também o cerne da filosofia do sistema operativo. Uma tradução aproximada da palavra Ubuntu é 'humanidade para com os outros'. Para mais informações sobre a filosofia e os ideais por trás do Ubuntu e do Xubuntu, além de usar o núcleo do Ubuntu, o Xubuntu também usa a infra-estrutura gentilmente fornecida e patrocinada pela Canonical Ltd., uma empresa fundada por Mark Shuttleworth.\n\nO esquema de numeração das versões do Xubuntu é baseado na data de lançamento da distribuição. A primeira parte do lançamento representa o ano, enquanto a segunda parte representa o mês. Por exemplo, a primeira versão oficial do Xubuntu foi lançada em junho de 2006, portanto o seu número de versão foi 6.06. A mais recente versão de Suporte de Longo Prazo (LTS) é a 16.04, denominada Xenial Xerus.")
	        .setImage("https://www.pcguia.pt/wp-content/uploads/2020/02/padrao.png")
	        .addFields(
				{ name: "Criação", value: '23 de junho de 2006', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
