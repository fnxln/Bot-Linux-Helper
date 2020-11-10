const Discord = require('discord.js')

module.exports={
    name:"distro",
    aliases: ['distro-linux', 'linux-distro'],
    description:"gerar infos de uma distribuição qualquer.",
    execute(message) {
        var distros = ['%antix', '%archbang', '%arch', '%centos', '%debian', '%deepin', '%elementary', '%endeavour',
        '%fedora', '%freebsd', '%garuda', '%kali', '%kde', '%linuxfx', '%linuxlite', '%lubuntu', '%manjaro', '%mint',
        '%mxlinux', '%nixos', '%opensuse', '%pclinux', '%peppermint', '%popos', '%puppy', '%slackware', '%solus', '%sparky',
        '%steamos', '%ubuntu', '%ubuntumate', '%ubuntum', '%zorinos']

        var randomDistros = Math.floor(Math.random() * (distros.length))

        message.channel.send(distros[randomDistros])
    }
}