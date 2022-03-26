const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send(embed.setDescription(`Bir kullanıcı belirtmelisin.`)).then(x => x.delete({ timeout: 5000 }));
    let kanal = member.voice.channel
    if(!kanal) return message.channel.send(embed.setDescription(`Belirttiğin kişi ses kanalında bulunmuyor.`)).then(x => x.delete({ timeout: 5000 }));
let microphone = member.voice.selfMute ? "<:offline:829036173027704892>" : "<:online:829036173157597234>";
let headphones = member.voice.selfDeaf ? "<:offline:829036173027704892>" : "<:online:829036173157597234>";
let camera = member.voice.selfVideo ? "<:online:829036173157597234>" : "<:offline:829036173027704892>";
let stream = member.voice.streaming ? "<:online:829036173157597234>" : "<:offline:829036173027704892>";;
let sestekiler = message.guild.channels.cache.get(kanal.id).members.map(x => x.user).join(", ")

kanal.createInvite().then(invite =>
message.channel.send(embed.setDescription(`${member} **${kanal.name}** kanalında. \n
Mikrofon Durumu : ${microphone} \n Kulaklık Durumu : ${headphones} \n Ekran Paylaşımı : ${stream} \n Kamera Durumu : ${camera}
 
Kanala gitmek için [tıklaman](https://discord.gg/${invite.code}) yeterli.

**Odadaki Kişiler -** ${sestekiler}`)))
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nerde'],
  permLevel: 0
};

exports.help = {
  name: "nerde"
};