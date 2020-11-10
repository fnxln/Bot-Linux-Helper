const Discord = require('discord.js')

module.exports = {
    name: 'endeavour',
    aliases: ['endeavouros'],
	description: 'Informações do EndeavourOS!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#793fd1')
            .setTitle('Acesse o site oficial do EndeavourOS')
            .setURL('https://endeavouros.com/')
            .setAuthor('O que é o EndeavourOS?', 'https://images.opencollective.com/endeavouros/f54ace2/logo/256.png')
            .setDescription('EndeavourOS é uma distribuição Linux baseada em Arch Linux, sucessora de Antergos, que foi descontinuada em 2019. Ela, como Antergos, apresenta um instalador gráfico capaz de instalar Xfce, Budgie, Cinnamon, Deepin, GNOME, I3, KDE Plasma 5, LXQt, e MATE.\n\nO mesmo possui um instalador de utilidade simples e faz com que o usuário possa escolher qual ambiente grafico ele quer gerenciador no Desktop principal. Como é baseado em Arch Linux seu gerenciador principal é o Pacman, onde da para efetuar qualquer tipo de instalação de programa no mesmo.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/b/bd/EndeavourOS_Logo.png')
            .addFields(
                { name: 'Criadores', value: '	Bryan Poerwoatmodjo, Fernando Omiechuk Frozi, Johannes Kamprad, Manuel', inline: true },
                { name: "Criação", value: '15 de julho de 2019', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'Pacman', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo Pacman -Syu', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};