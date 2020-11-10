const Discord = require("discord.js")

module.exports = {
	name: 'arch-bang',
	aliases: ['archbang'],
	description: 'Informações do ArchBang!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#406cff')
	        .setTitle('Acesse o site oficial do ArchBang')
	        .setURL('https://archbang.org')
	        .setAuthor('O que é o Arch Bang?', 'https://images-fe.ssl-images-amazon.com/images/I/41f4z1rLFdL.png')
	        .setDescription('O ArchBang é uma distribuição Linux que combina o leveza do gerenciador de janelas Openbox com os recursos poderosos e velocidade da distribuição Arch Linux. O principal objetivo deste projeto é proporcionar aos usuários uma experiência Arch Linux mais fácil e prática. Ele é distribuído como imagens live CD, apoiando ambas as arquiteturas de 32 bits e de 64 bits.\n\nPara os últimos anos, o ArchBang vem fazendo lançamentos\ interessantes, agora a distribuição conta com novas ISO’s e atualmente existem três, a Lite, Curve a uma com suporte ao OpenRC.\n\nO menu de inicialização do Live CD permite que você inicie o ambiente live que vem com o Openbox, com ou sem o driver VESA, inicialize no modo de recuperação, testar a RAM (memória do sistema) do seu computador, reiniciar, ou ver se os componentes de hardware são suportados por ArchBang.\n\nComo aplicativos padrão incluem o gerenciador de arquivos SpaceFM, navegador Mozilla Firefox, DeaDBeeF como leitor de música, LXTerminal emulador de terminal, ferramenta de monitoramento do sistema Htop, Medit editor de texto, utilitário Galculator calculadora,e o clipit clipboard.\n\nSendo baseado no Arch Linux, esta pequena e rápida distro irá fornecer aos usuários um sistema Rolling Release, o que significa que você sempre terá um sistema com os últimos pacotes lançados, sem a necessidade de baixar uma nova imagem ISO  a cada lançamento evitando reinstalar a distribuição.')
	        .setThumbnail('https://pbs.twimg.com/profile_images/774606291/archbang_glyph_400x400.png')
	        .addFields(
                { name: 'Criador', value: 'Stan McLaren', inline: true },
				{ name: "Criação", value: 'março de 2002', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'pacman', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo pacman -Syu', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
