const Discord = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {

    if (!message.member.roles.cache.has(registerConfig.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return registerfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}isim @Richârd/ID <İsim>\``).sil(10000);
    let yazilacakisim;
    let isim = args[1];
    if (!member || !isim) return registerfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}isim <@Richârd/ID> İsim\``).sil(10000);
    if(member === message.member) return registerfx.embedHata(message.author, message.channel, `Kayıt komutlarını kendi üstünde kullanamazsın!`).sil(10000);
    if(!member.bannable) return registerfx.embedHata(message.author, message.channel, `Belirtilen kullanıcı yıkılmaz sallanmaz!`).sil(10000);
    if(message.member.roles.highest.position == member.roles.highest.position) return registerfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının ile aynı roldesiniz!`).sil(10000);
    if(message.member.roles.highest.position <= member.roles.highest.position) return registerfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının rolü senin üstünde!`).sil(10000);

    yazilacakisim = `north face ${isim}`;

       member.setNickname(`${yazilacakisim}`).catch();
       let embed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(settings.footer).setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
       .setDescription(`${member} kişisinin ismi \`${isim}\` olarak değiştirildi!`)
       message.channel.send(embed).sil(5000);
            message.react(emojis.onay)
    registerfx.kayitEt(member, message.author, "isim", isim)


  };

module.exports.registerconfig = {
    name: "isim",
    aliases: ["i", "name", "n"],
    usage: "Taslak",
    description: "Taslak Komutu."
};