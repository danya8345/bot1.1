const Discord = require('discord.js')
const robot = new Discord.Client()
const fetch = require('node-fetch')
const fs = require('fs')
const prefix = config.prefix
const token = config.token
client.on('ready', () => {
  console.log(`Good`)
})
// message
client.on('message', (msg) => {
  if (msg.author.bot || !msg.content.startswith(prefix)) return
  const args = msg.content.slice(prefix.length).split(/ +/)
  const cmd = argsshift().tolowercase()
  // embed
})
if (cmd === 'help') {
  const helpEmbed = new Discord.MessageEmbed()
    .setTitle('Leaderboard')
    .setAuthor({
      name: 'bot by danya',
      iconURL: 'https://cdn.betterttv.net/emote/5a5e0e8d80f53146a54a516b/3x',
    })
    .setTimestamp()
  msg.channel.send(helpEmbed)
}
// Удалить сообщения канала
if (cmd === 'clear') {
  if (!msg.member.hasPermission('MANAGE_MESSAGES'))
    return msg.channel.send('cant delete(permission)')
  if (!args[0]) return msg.channel.send('cant delete(0)')
  var countwords = parseInt(args[0], 10)
  if (isNaN(number)) return msg.channel.send('cant delete(not number)')
  if (number > 100) return msg.channel.send('cant delete(too big number)')
  if (number < 1) return msg.channel.send('cant delete(too small number)')
  try {
    msg.channel.bulkDelete(number + 1)
  } catch (e) {
    msg.channel.send('cant delete(404)')
    console.log(e)
  }
}

if (cmd === 'ping') {
  msg.reply(`ping\n ${date.now() - msg.createdtimestamp}ms`)
}

bot.login(process.env.token)
//bot.login("")
