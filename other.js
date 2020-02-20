const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true, maxMessagesCache: 1});
const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const moment = require('moment');
var Canvas = require('canvas')
var jimp = require('jimp')
const ms = require("ms");
let done = {};
const prefix = 's'



//By FROSTY

//colors
Canvas.registerFont('./jooza.ttf', {family: 'Joza'})
client.on("message", message => {
    if (message.content == "الوان") {
        var fsn = require('fs-nextra');
        fs.readdir('./img/colors', async (err, files) => {
            var f = files[Math.floor(Math.random() * files.length)];
            var {
                Canvas
            } = require('canvas-constructor');
            var x = 0;
            var y = 0;
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                x += 100;
                if (x > 100 * 12) {
                    x = 100;
                    y += 80;
                }
            });
            var image = await fsn.readFile(`./img/colors/${f}`);
            var xd = new Canvas(100 * 11, y + 250)
                .addBeveledImage(image, 0, 0, 100 * 11, y + 250, 50)
                .setTextBaseline('middle')
                .setTextFont('30px Joza')
                .setColor('white')
                .setTextSize(60)
                .addText(`≈S3 community≈`, 325, 46);
            x = 0;
            y = 150;
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                x += 75;
                if (x > 100 * 10) {
                    x = 75;
                    y += 80;
                }
                xd
                    .setTextBaseline('middle')
                    .setTextFont('Joza')
                    .setTextAlign('center')
                    .setColor(role.hexColor)
                    .addBeveledRect(x, y, 60, 60, 15)
                    .setColor('white');
                if (`${role.name}`.length > 2) {
                    xd.setTextFont('Joza')
                    xd.setTextSize(25);
                } else if (`${role.name}`.length > 1) {
                    xd.setTextFont('Joza')
                    xd.setTextSize(35);
                } else {
                    xd.setTextFont('Joza')
                    xd.setTextSize(45);
                }
                xd.addText(role.name, x + 30, y + 30);
            });
            message.channel.sendFile(xd.toBuffer());
        });
    }
})

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if(message.content.startsWith("لون") ){
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**There's No Color With This Number** :x: `)
      .setColor(`ff0000`);

    if (!isNaN(args) && args.length > 0)
      if (!message.guild.roles.find("name", `${args}`))
        return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args}`);
    if (!a) return;
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args}`));
  }
});

client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.content === "cc") {
    if (message.member.hasPermission("MANAGE_ROLES")) {
      setInterval(function() {});
      message.channel.send("يتم انشاء   100لون انتضر | ▶️");
    } else {
      message.channel.send("ما معاك البرمشن المطلوب |❌🚫");
    }
  }
});

client.on("message", message => {
  if (message.content === "cc") {
    if (!message.channel.guild) return;
    if (message.member.hasPermission("MANAGE_ROLES")) {
      setInterval(function() {});
      let count = 0;
      let ecount = 0;
      for (let x = 0; x < 150; x++) {
        message.guild.createRole({ name: x, color: "RANDOM" });
      }
    }
  }
});
client.on('message', message => {
  if (message.content.startsWith ("دعواتي")) {
   if(!message.channel.guild) return message.reply('** This command only for servers **');
       var mentionned = message.mentions.users.first();
      var os;
    if(mentionned){
        var os = mentionned.id;
    } else {
        var os = message.author.id;
        
    }
        var oss;
    if(mentionned){
        var oss = mentionned;
    } else {
        var oss = message.author;
        
    }
message.guild.fetchInvites()
.then(invites =>{
if(!invites.find(invite => invite.inviter.id === `${os}`)) return message.channel.send(`**${oss.username}, Does't Have Invites ❌**`);
message.channel.send(`**__${invites.find(invite => invite.inviter.id === `${os}`).uses}__ Member Joined By ${oss.username} !** 📈 `)

})



}

});
 



client.login("NjcyODM5ODU0MjIwMTE1OTY4.XjbRvA.jWtGv4mICiaF9xAwz0FeDhMV0v4")
