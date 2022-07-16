const Discord = require("discord.js");
const { closeall } = require("../functions");
module.exports = async(oldGuild, curGuild) => {

    if (curGuild.id !== config.server) return;
    const entry = await curGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = curGuild.guild.members.cache.get(id)
    if(id === config.owner) return;
    if(entry.executor.id === client.user.id) return;
    if(id.includes(config.safezone)) return;
    if(id.includes(config.safebots)) return;
//////////////////
if (curGuild.name !== oldGuild.name) {
  curGuild.setName(oldGuild.name);
}
//////////////////
if (curGuild.iconURL({dynamic: true, size: 2048}) !== oldGuild.iconURL({dynamic: true, size: 2048})) {
  curGuild.setIcon(oldGuild.iconURL({dynamic: true, size: 2048}));
}
//////////////////
if (oldGuild.banner !== curGuild.banner) {
  await curGuild.setBanner(oldGuild.bannerURL({ size: 4096 }));
}
//////////////////
if (oldGuild.icon !== curGuild.icon) {
  await curGuild.setIcon(oldGuild.iconURL({ type: 'gif', size: 4096 }));
}
//////////////////
if (oldGuild.region !== curGuild.region) {
}
//////////////////
await user.ban({reason: config.reason})
await closeall(curGuild.guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
  await curGuild.guild.channels.cache.get(config.log).send(
    new Discord.MessageEmbed()
    .setDescription(`${user} (${user.user.tag}) **Kullanıcısı sunucuyu düzenlemeye çalıştı ve beni geçemedi ;)**`)
    .setColor("RANDOM")
    .setFooter(user.id, user.user.avatarURL())
  )
//////////////////
}; 
  module.exports.configuration = {
      name: "guildUpdate"
    }