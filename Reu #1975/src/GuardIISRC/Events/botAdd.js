const Discord = require("discord.js");
module.exports = async(member) => {

    if (member.guild.id !== config.server) return;
    const entry = await member.guild.fetchAuditLogs({ type: 'BOT_ADD' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = member.guild.members.cache.get(id)
    if(id === config.owner) return;
    if(entry.executor.id === GuardLLClient.user.id) return;
    if(guardConfig.safezone.includes(id)) return;
    if(guardConfig.safebots.includes(id)) return;
//////////////////
member.ban({reason: guardConfig.reason})
//////////////////
await user.ban({reason: "BOT EKLEDİ"})
await guardFunctions.closeall(member.guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
  await member.guild.channels.cache.get(guardConfig.log).send(
    new Discord.MessageEmbed()
    .setDescription(`${user} (${user.user.tag}) **Kullanıcısı sunucuya bot eklemeye çalıştı ve beni geçemedi ;)**`)
    .setColor("RANDOM")
    .setFooter(user.id, user.user.avatarURL())
  )
//////////////////
}; 
  module.exports.g2config = {
      name: "guildMemberAdd"
    }