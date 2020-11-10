const Discord = require('discord.js')

module.exports={
	name:"opensuse",
	aliases: ['open-suse'],
	description:"Um comando que ira exibir informações sobre o OpenSuse.",
	execute(message){
		const embed = new Discord.MessageEmbed()
			.setColor("#7deb34")
			.setTitle("Acesse o site oficila do openSuse")
			.setURL("https://www.opensuse.org/")
			.setAuthor("O que é o openSuse?", 'https://en.opensuse.org/images/c/cd/Button-colour.png')
			.setDescription("openSUSE é um sistema operacional baseado no núcleo Linux, desenvolvido pela comunidade openSUSE de forma gratuita. Após adquirir o SUSE Linux em janeiro de 2004, a Novell, uma empresa norte-americana que na década de 1980 ficou famosa por seu sistema operacional de rede (Netware), após o sucesso lançou o SUSE Linux Professional como um projeto 100% código livre, envolvendo a comunidade no processo de desenvolvimento.\n\n Sendo assim, o openSUSE promove o uso de Linux por toda a parte; pois a comunidade openSUSE disponibiliza, gratuitamente, uma das versões Linux mais usadas em todo mundo. O OpenSUSE é uma ferramenta de configuração completa e intuitiva; tem um grande repositório de pacotes de software e excelente documentação oficial. Em resumo, o openSUSE é uma distribuição projetada para fornecer um sistema operacional estável.\n\n A Interface Gráfica de Usuário (GUI), no openSUSE, é levemente diferente da interface do Windows ou MacOS, mas as diferenças são, em grande parte, cosméticos. O Ambiente de Interface Gráfica K (KDE) (em oposição a GNOME, um ambiente de interface gráfica alternativo) é especialmente semelhante a outras interfaces de usuário: a maioria dos princípios são os mesmos, as janelas são janelas e têm uma moldura e uma barra de título, a janela de configurações de botão à esquerda na barra de título, e o botões minimizar, maximizar e fechar do lado direito da barra de título. Essa configuração padrão pode ser facilmente alterada se o usuário decidir usar um tema diferente, mas os padrões são projetados para permitir aos novos usuários se sentirem em casa no Linux.")
			.setThumbnail('https://kamarada.github.io/assets/icons/other/opensuse.png')
	        .addFields(
                { name: 'Criador', value: 'openSUSE Project', inline: true },
				{ name: "Criação", value: 'Março de 1994 ', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'rpm', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo zypper refresh', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	}
}