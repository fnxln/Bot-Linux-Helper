const Discord = require("discord.js")

module.exports = {
	name: 'info-sparky',
	description: 'Informações do Sparky Linux!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setTitle('Acesse o site oficial do Sparky Linux')
	        .setURL('https://sparkylinux.org')
	        .setAuthor('O que é o Sparky Linux?', 'https://sparkylinux.org/images/sparky-logo7.png')
	        .setDescription('SparkyLinux é uma distribuição rolling release (atualização continua) leve, rápida e simples, baseada no Debian testing. Graças a maneira que é distribuída, ela pode ser usada em computadores modernos e também em PC´s antigos.\n\nO projeto nasceu em outubro de 2011 como um remix do Ubuntu com o Enlightenment como a área de trabalho padrão com o nome ue17r (Ubuntu Enlightenment17 Remix). Após alguns meses de teste, o sistema base foi alterado para Debian e foi renomeado para SparkyLinux.\n\nO SparkyLinux baseia-se no ramo de “teste” do Debian e usa um “ciclo de lançamento contínuo” (rolling-release). Inclui uma coleção de ferramentas e scripts para facilitar a administração do sistema para seus usuários.\n\nSparkyLinux oferece vários ambientes de desktop leves, incluindo o LXDE, Enlightenment, JWM, KDE, LXQt, OpenBox/JWM, MATE, Razor-QT e Xfce, todos ligeiramente personalizados e com plugins multimídia, conjuntos selecionados de apps, além de ferramentas próprias e personalizadas para facilitar diferentes tarefas.')
	        .setImage('https://upload.wikimedia.org/wikipedia/commons/1/1f/Sparky36-lxde.png')
	        .addFields(
				{ name: "Criação", value: '5 de maio de 2012', inline:true},
		        { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualização', value: 'sudo apt update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32-64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
