const Discord = require("discord.js")

module.exports = {
	name: 'info-artix',
	aliases: ['info-artix-linux', 'info-artixlinux'],
	description: 'Informações do Artix!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#406cff')
	        .setTitle('Acesse o site oficial do Artix')
	        .setURL('https://artixlinux.org/index.php')
	        .setAuthor('O que é o Artix Linux?')
	        .setDescription('Artix Linux ou Artix é uma distribuição de lançamento contínuo baseada no Arch Linux que usa OpenRC, runit ou s6 init em vez de systemd. Artix Linux tem seus próprios repositórios de pacotes, mas, como uma distribuição baseada em pacman, pode usar pacotes de repositórios Arch Linux ou qualquer outra distribuição derivada, mesmo pacotes dependendo explicitamente do systemd. O Arch User Repository (AUR) também pode ser usado. Arch OpenRC começou em 2012 e Manjaro OpenRC foi subsequentemente desenvolvido junto com ele. Em 2017 esses projetos se fundiram para criar o Artix Linux.\n\nArtix inicialmente ofereceu dois ambientes de instalação, uma imagem ISO de linha de comando de base e o instalador gráfico Calamares baseado no desktop LXQt com uma versão i3 posteriormente. Essas primeiras versões apresentavam o sistema de inicialização OpenRC. A mídia de instalação mais recente está disponível em uma variedade de ambientes de desktop como LXDE, XFCE, MATE, Cinnamon e KDE Plasma 5. Além disso, duas edições da comunidade não oficiais com desktops GTK e Qt e uma base de software maior são oferecidas, visando a para personalizar ou usuários menos experientes. Todas as mídias de instalação atuais vêm nas versões OpenRC, runit e s6.')
	        .setImage('https://i.ytimg.com/vi/1mT8AEJs4II/maxresdefault.jpg')
	        .addFields(
				{ name: "Criação", value: '27 de Novembro de 2017', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'pacman', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo pacman -Syu', inline: true },
                { name: "Disponivel para sistemas: ", value: '64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
