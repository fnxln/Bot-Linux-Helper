const Discord = require('discord.js')

module.exports = {
    name: 'nixos',
	description: 'Informações do NixOS!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#352fa8')
            .setTitle('Acesse o site oficial do NixOS')
            .setURL('https://nixos.org')
            .setAuthor('O que é o NixOS?', 'https://nixos.wiki/images/thumb/2/20/Home-nixos-logo.png/x207px-Home-nixos-logo.png.pagespeed.ic.38jujIAhx5.png')
            .setDescription('O projeto NixOS entrega ao usuário uma distribuição independente (e diferente) com KDE. Conheça mais um pouco sobre ela e descubra onde baixar a distro. NixOS é uma distribuição GNU/Linux desenvolvida de forma independente e que usa o gerenciador de pacotes Nix para lidar com pacotes e configurações do sistema.\n\nOutras características inovadoras de NixOS incluem atualizações de confiança, reversões, configurações de sistema reprodutíveis, modelo baseado na fonte com os binários e gerenciamento de pacotes multiusuário. NixOS oferece muitos recursos avançados de gerenciamento de pacotes, incluindo roll backs e operações de pacotes atômicos.\n\nO site da NixOS diz: “O Nix constrói pacotes isolados um do outro, o que garante que eles sejam reprodutíveis e não tenham dependências não declaradas, portanto, se um pacote funciona em uma máquina, também funcionará em outra”. O ambiente de área de trabalho padrão é Plasma e o SDDM é o gerenciador de exibição padrão, mas isso não precisa ser o caso, porque é fácil mudar o software no arquivo configuration.nix . Assim, a sua primeira compilação pode ter o que quiser')
            .setThumbnail('https://nixos.wiki/images/thumb/2/20/Home-nixos-logo.png/x207px-Home-nixos-logo.png.pagespeed.ic.38jujIAhx5.png')
            .addFields(
                { name: "Criação", value: '20 de abril de 2003', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: "Gerenciador de Pacotes: ", value: 'Nix package manager' , inline: true},
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};