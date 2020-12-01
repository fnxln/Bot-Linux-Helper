const Discord = require("discord.js")

module.exports = {
	name: 'absolute',
	aliases: ['absolute-linux', 'absolutelinux'],
	description: 'Informações do Absolute Linux!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setTitle('Acesse o site oficial do Absolute Linux')
	        .setURL('https://www.absolutelinux.org/')
	        .setAuthor('O que é o Absolute Linux?')
	        .setDescription('O Absolute Linux é uma distribuição leve do Linux que funciona em hardware mais antigo e é baseada no Slackware Linux. O cliente foi projetado para o uso diário. Os gerenciadores de arquivos e janelas padrão do Absolute Linux são IceWM e ROX\n\nAlguns dos programas oferecidos por padrão incluem: GIMP, LibreOffice, Firefox, Xfburn, p7zip e qBittorrent. Muitos utilitários de script estão incluídos no Absolute Linux para auxiliar na configuração e manutenção do sistema. Absolute Linux usa uma interface gráfica para XPKGTOOL. O Absolute Linux também inclui o Gsplat, um frontend gráfico para o Slapt-get, que funciona de forma semelhante ao Apt-get.')
	        .setImage('https://news-cdn.softpedia.com/images/news2/based-on-slackware-14-2-absolute-14-2-2-linux-is-out-with-updated-kernel-x-org-510829-2.jpg')
	        .addFields(
				{ name: "Criação", value: '2007', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: ' XPKGTOOL', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
