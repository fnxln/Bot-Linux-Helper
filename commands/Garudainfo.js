const Discord = require("discord.js")

module.exports = {
	name: 'garuda',
	aliases: ['garuda-linux'],
	description: 'Informações do Garuda!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#4269f5')
	        .setTitle('Acesse o site oficial da Garuda')
	        .setURL('https://garudalinux.org')
	        .setAuthor('O que é a Garuda?', 'https://fosstorrents.com/img/garuda.png')
	        .setDescription("Garuda Linux é uma distribuição de rolling release baseada no Arch Linux focada apenas no desempenho. Mas, ao contrário do Arch, vem com instalador gráfico Calamares e outras ferramentas avançadas de GUI como Garuda Settings Manager e Garuda Boot Repair para gerenciar o sistema facilmente.\n\nOutro recurso interessante do Garuda é o kernel Linux-zen e Btrfs como sistema de arquivos padrão com compactação Zstd. Surpreendentemente, o Garuda Linux também oferece uma variedade de ambientes de desktop, como KDE, GNOME, Xfce, Wayfire, LXQt-kwin, Deepin e i3, que ainda vem em duas edições: Ultimate e Lite.\n\nOutra grande adição ao Garuda Linux é o pacote AUR pamac-allna edição Ultimate, que traz suporte para o sistema as opções de instalação de programas via Snap e Flatpak.\n\nO sistema vem com aplicativos incluidos como um kernel linux-zen 5,8,5, o Mesa 20.1.6, Nvidia 450.66, firefox e o pacote Libre Office.")
	        .setThumbnail('https://fosstorrents.com/img/garuda.png')
	        .addFields(
				{ name: "Criação", value: '8 de outubro de 2020', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'Pacman', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo pacman -Syu', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
