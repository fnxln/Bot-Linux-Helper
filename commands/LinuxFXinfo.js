const Discord = require("discord.js")

module.exports = {
	name: 'LinuxFXinfo',
	description: 'Informações do LinuxFX!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#406cff')
	        .setTitle('Acesse o site oficial do LinuxFX')
	        .setURL('https://www.linuxfx.org')
	        .setAuthor('O que é o LinuxFX?', 'https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png')
	        .setDescription("Com uma interface simples e intuitiva, o Linuxfx 10 veio para resgatar os usuários orfãos do Windows XP, 7 e 10, trazendo uma ótima compatibilidade com apps do Windows (.exe e .msi), uma interface gráfica reconhecível e facilidades incríveis. Desenvolvido para os clientes da Linuxfx Software e disponibilizado para usuários que estão migrando do Windows, o Linuxfx 10 é um sistema operacional simples e amigável que vai permitir a adaptação imediata de novatos na plataforma Linux.\n\nO Linuxfx é robusto, construído sobre uma base LTS (suporte de longo prazo), garante estabilidade e velocidade para todas as tarefas. Atualizações automáticas, loja de aplicativos e compatibilidade com softwares Windows fazem do Linuxfx a ferramenta perfeita para produção. No entanto, você terá desempenho muito superior se o seu hardware exceder o requisito mínimo. O ponto ideal é pelo menos 4 GB de RAM e 16 GB de espaço livre em disco.\n\nRachid projetou essa distribuição como uma plataforma para alguns dos softwares especializados de sua empresa, mas você pode deixar esses aplicativos de lado e focar no tema do Windows ao se familiarizar com os aplicativos de desktop Linux. Os desenvolvedores incluíram alguns dos melhores recursos na aparência do Windows, fornecendo uma base sólida do Ubuntu Linux.")
	        .setThumbnail('https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png')
	        .addFields(
                { name: 'Criador', value: 'Rafael Rachid', inline: true },
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
