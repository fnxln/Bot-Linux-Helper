const Discord = require("discord.js")

module.exports = {
	name: 'unixporn',
	aliases: ['pornunix', 'unix-porn'],
	description: 'Gerar logos de linux.',
	execute(message) {

		var redditImageFetcher = require('reddit-image-fetcher')
 
		redditImageFetcher.fetch({type: 'custom', subreddit: ['unixporn']})
		.then(result => {
			const embed = new Discord.MessageEmbed()
			.setTitle('Acesse o Post Original')
			.setAuthor("Post feito por: " + result[0].id)
	        .setURL(result[0].postLink)
	        .setImage(result[0].image)
			.setTimestamp()
			message.channel.send(embed)
			});
    }
}
