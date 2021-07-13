//Invite Link : https://discord.com/oauth2/authorize?client_id=863480726233939998&permissions=1133584&scope=bot
//DiscordJS Bot
const { Client } = require('discord.js')
require('dotenv').config()
var fs = require('fs')

const client = new Client()

client.on('ready', () => {
  client.user.setPresence({
    status: 'online', //You can show online, idle....
    game: {
      name: 'Using ?help', //The message shown
      type: 'LISTENING', //PLAYING: WATCHING: LISTENING: STREAMING:
    },
  })
})

client.on('message', (message) => {
  if (message.content[0] === '?') {
    if (message.content.split(' ')[0].toLocaleLowerCase() === '?simp')
    {
      if (message.content.toLocaleLowerCase() === '?simp')
      {
        message.channel.send(
          '```\nSend Images to Mats#5320\nrun ?simp help for help \nrun ?simp female for female \nrun ?simp male for male\nrun ?simp invite to get invite link```',
        )
      }else if (message.content.split(' ')[1].toLocaleLowerCase() === 'female') {
        var female = fs.readdirSync(__dirname + '/images/female/')
        let src = female[Math.floor(Math.random() * female.length)]
        if (src == undefined) {
          message.channel.send('We have no images of this genre')
        } else {
          message.channel.send('Simp to this', {
            files: [__dirname + '/images/female/' + src],
          })
        }
      } else if (message.content.split(' ')[1].toLocaleLowerCase() === 'male') {
        var male = fs.readdirSync(__dirname + '/images/male/')
        let src = male[Math.floor(Math.random() * male.length)]
        if (src == undefined) {
          message.channel.send('We have no images of this genre')
        } else {
          message.channel.send('Simp to this', {
            files: [__dirname + '/images/male/' + src],
          })
        }
      } else if (message.content.split(' ')[1].toLocaleLowerCase() === 'help') {
        message.channel.send(
          '```\nSend Images to Mats#5320\nrun ?simp help for help \nrun ?simp female for female \nrun ?simp male for male\nrun ?simp invite to get invite link```',
        )
      } else if (message.content.split(' ')[1].toLocaleLowerCase() === 'invite') {
        message.channel.send('https://discord.com/oauth2/authorize?client_id=863480726233939998&permissions=1133584&scope=bot')
      } else {
        message.channel.send("That's not a command lol")
      }
    }
  }
})

client.login(process.env.TOKEN)
