const Discord = require("discord.js")

module.exports = {
	name: 'easyos',
	aliases: ['easyos-linux', 'easy-os'],
	description: 'Informações do Easy OS!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setTitle('Acesse o site oficial do Easy OS')
	        .setURL('https://easyos.org/')
	        .setAuthor('O que é o Easy OS?')
	        .setDescription('O EasyOS é uma distribuição experimental do Linux que utiliza muitas das tecnologias e formatos de pacote pioneiros no Puppy Linux. A distribuição apresenta a tecnologia de contêiner personalizada chamada Easy Containers, que pode executar aplicativos ou todo o ambiente de desktop em um contêiner.\n\nPacotes, configurações da área de trabalho, rede e compartilhamento de recursos pela rede podem ser controlados por meio de utilitários gráficos. A nova versão continua a extrair pacotes dos repositórios Debian 10 “Buster”, embora use um kernel mais recente (versão 5.4.40)')
	        .addFields(
                { name: "Criação", value: '20 de Dezembro de 2018', inline:true},
                { name: "Criador", value: 'Barry Kauler', inline:true},
		        { name: '\u200B', value: '\u200B' },
                { name: "Disponivel para sistemas: ", value: '32 e 64' , inline: true}
            )
            .setImage('https://i1.wp.com/www.linuxtechnews.com/wp-content/uploads/2019/08/linuxtechnews-com-easyos-linux-1.png?fit=689%2C375&ssl=1&w=640')
	        .setTimestamp()

        message.channel.send(embed)
	},
};
