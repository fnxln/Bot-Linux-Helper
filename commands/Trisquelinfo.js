const Discord = require("discord.js")

module.exports = {
	name: 'trisquel',
	description: 'Informações do Trisquel Linux!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#393bb8')
	        .setTitle('Acesse o site oficial do Trisquel Linux')
	        .setURL('https://trisquel.info')
	        .setAuthor('O que é o Trisquel?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Antu_distributor-logo-trisquel.svg/1200px-Antu_distributor-logo-trisquel.svg.png')
	        .setDescription("O Trisquel é a distribuição que procura carregar a filosofia do projeto GNU para o computador das pessoas, apesar de existirem outras com proposta semelhante, a distro baseada no Ubuntu é o maior exemplar e mais popular neste segmento.\n\nO Trisquel é um sistema operacional interessante pela sua proposta, baseia-se no Ubuntu, o que por si só já faz com que ele tenha um imenso repositório, mas o principal diferencial dele é mesmo filosófico. O Trisquel GNU/Linux usa por padrão unicamente software livre, isso faz com que seu Kernel seja um pouco diferente do Ubuntu normal.\n\nVários drivers que o sistema da Canonical traz por padrão para garantir a compatibilidade com uma certa gama de hardwares e que são drivers com código proprietário não existem no Trisquel nativamente. Abaixo você vê a review do sistema feita pelo nosso parceiro Ivan Fuzzer do canal Tecnologia Aberta.")
	        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Antu_distributor-logo-trisquel.svg/1200px-Antu_distributor-logo-trisquel.svg.png')
	        .addFields(
				{ name: "Criação", value: '30 de janeiro de 2007', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
