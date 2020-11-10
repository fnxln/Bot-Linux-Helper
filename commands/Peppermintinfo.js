const Discord = require('discord.js')

module.exports={
    name:"peppermint",
    description:"Informações sobre o Peppermint",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Acesse o site oficial do Peppermint")
            .setURL('https://peppermintos.com')
            .setAuthor('O que é o Peppermint?', 'https://upload.wikimedia.org/wikipedia/commons/6/62/PEPPERMINT.png')
            .setDescription('Peppermint OS é uma distribuição Linux centrada na nuvem com base no Lubuntu, um derivado do Ubuntu que usa o LXDE como ambiente de desktop. Os desenvolvedores do projeto têm escrito sobre seus princípios de proporcionar um ambiente familiar para os recém-chegados para o Linux, que requer relativamente baixos requisitos de hardware.\n\nPeppermint é homônimo de Linux Mint. Os desenvolvedores originalmente queriam fazer uso da configuração e utilitários com origem no Linux Mint , juntamente com um ambiente que foi menos exigente em recursos e mais focada em integração com a web. Eles sentiram que o conceito era uma versão mais "temperada" do Mint então o nome Peppermint foi uma escolha natural.\n\nEnquanto o Linux Mint é conhecida pelo ambiente de desktop Cinnamon, Peppermint usa algo que é significativamente mais leve, com uma área de trabalho padrão que é baseado no LXDE. Esta é uma distro que tem lançado atualizações constantemente em uma boa cadência, pelo menos desde 2010, quando Peppermint 1.0 foi lançado pela primeira vez.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/6/62/PEPPERMINT.png')
	        .addFields(
                { name: 'Criadores', value: 'Peppermint, LLC', inline: true },
				{ name: "Criação", value: '9 de maio de 2010', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}