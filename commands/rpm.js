const Discord = require("discord.js")

module.exports = {
	name: 'info-rpm',
	aliases: ['rpm-info'],
	description: 'Informações do gerenciador de pacotes RPM!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#eb3455')
	        .setTitle('O que é RPM?')
	        .setDescription('O  rpm (recursivo acrônimo para RPM Package Manager) é um gerenciador de pacotes que pode ser usado para construir, instalar, consultar, verificar, atualizar e desinstalar pacotes de software. Um pacote consiste em um arquivo de arquivos e informações sobre o pacote, incluindo nome, versão e descrição.\n\nAtrás do gerenciador de pacotes está o banco de dados RPM. Ele consiste de uma lista duplamente ligada que contêm todas as informações de todos os RPMs instalados. O banco de dados lista todos os arquivos que são criados ou modificados quando um usuário instala um programa e facilita a remoção desses arquivos. Se o banco de dados ficar corrompido (o que acontece facilmente se o cliente de RPM é fechado subitamente), as ligações duplas garantem que ele possa ser reconstruído sem nenhum problema. Em computadores com o sistema operacional RedHat instalado, este banco de dados se encontra em /var/lib/rpm')
	        .setImage('https://library.kissclipart.com/20180915/qfq/kissclipart-rpm-package-manager-clipart-rpm-package-manager-yu-b3f0c91a55706fa1.jpg')
	        .addFields(
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Distros que usam RPM', value: 'Baseadas em Red Hat', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
