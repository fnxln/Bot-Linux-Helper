const Discord = require("discord.js")

module.exports = {
	name: 'arco',
	aliases: ['arcolinux', 'arco-linux'],
	description: 'Informações do Arco Linux!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#406cff')
	        .setTitle('Acesse o site oficial do Arco Linux')
	        .setURL('https://arcolinux.com')
	        .setAuthor('O que é o Arco Linux?', 'https://c6w8h3d4.rocketcdn.me/wp-content/uploads/sites/2/2020/01/2019-arcolinux-1.jpg')
	        .setDescription('O ArcoLinux uma distribuição baseada no Arch Linux. O desenvolvimento ocorre em três filiais - ArcoLinux, ArcoLinuxD e ArcoLinuxB. Ele é uma distribuição completa que é fornecida com a área de trabalho do Xfce (assim como com os gerenciadores de janelas Openbox e i3).\n\n O ArcoLinuxD é uma distribuição mínima que inclui scripts que permitem que usuários avançados instalem qualquer desktop e aplicativo. O ArcoLinuxB é um projeto que dá aos usuários o poder de criar distribuições personalizadas, além de desenvolver várias edições da comunidade com áreas de trabalho pré-configuradas, como Awesome, bspwm, Budgie, Cinnamon, Deepin, GNOME, MATE e KDE Plasma.')
	        .setThumbnail('https://arcolinux.info/wp-content/uploads/2020/06/arcolinux.png')
	        .addFields(
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'pacman', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo pacman -Syu', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
