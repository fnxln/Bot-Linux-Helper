const Discord = require("discord.js")

module.exports = {
	name: 'pclinux',
	aliases:['pc-linux-os', 'pclinuxos'],
	description: 'Informações do PcLinuxOS!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#112978')
	        .setTitle('Acesse o site oficial do PcLinuxOS')
	        .setURL('https://www.pclinuxos.com')
	        .setAuthor('O que é o PcLinuxOS?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PCLinuxOS_logo.svg/1200px-PCLinuxOS_logo.svg.png')
	        .setDescription("O PCLinuxOS é uma distribuição (ou distro) do sistema operacional GNU/Linux, desenvolvida para desktops ou laptops com arquitetura x86. O principal objetivo do sistema é ser uma distribuição fácil de usar, oferecendo um LiveCD com um ambiente de trabalho personalizado, que pode ser instalado no HD ou remasterizado rapidamente. Atualmente, é a distribuição mais bem sucedida entre as derivadas do Mandriva. Mas, por utilizar um kernel diferente e incluir algumas modificações nos scripts de boot, ele é capaz de funcionar em algumas máquinas onde o Mandriva não roda adequadamente.\n\nO PCLinuxOS é distribuído como um LiveCD (CD 'bootável') e também pode ser instalado em seu computador. O modo LiveCD, permite que você experimente o PCLinuxOS sem fazer qualquer alteração no seu computador. Os dados do CD são descomprimidos on-the-fly, permitindo até 2 GB de programas e arquivos de sistema em apenas um CD, incluindo um ambiente gráfico e uma grande quantidade de pacotes, mais os plugins. Recomenda-se 256 MB ou mais de RAM e aproximadamente 5 GB de espaço livre para a instalação no HD.\n\nAs versões instaladas do PCLinuxOS utilizam o Advanced Packaging Tool (ou APT), um sistema de gerenciamento de pacotes (originalmente desenvolvido para a distribuição Debian), juntamente com o Synaptic, uma interface gráfica para o APT para fácil instalação de softwares. A versão PCLinuxOS 2010 foi construída a partir do 'zero', usando os pacotes do repositório próprio. Os pacotes no 'Repo' podem ser criações originais, mas também podem conter pacotes reembalados e modificados a partir do Fedora, OpenSuse e Mandriva, distribuídos sob a GPL. Os pacotes do PCLinuxOS também podem conter 'manchas' do Ubuntu, Debian, PLD e Chacra.")
	        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PCLinuxOS_logo.svg/1200px-PCLinuxOS_logo.svg.png')
	        .addFields(
                { name: 'Criador', value: 'Texstar', inline: true},
                { name: 'Criação', value: '24 de outubro de 2003', inline: true },
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
