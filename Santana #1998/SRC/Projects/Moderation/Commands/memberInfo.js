const { Discord, MessageEmbed } = require("discord.js");
const moment = require("moment");
module.exports.execute = async(ModerationClient, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let oldnames;


        let status = user.presence.status
        .toString()
        .replace("dnd", `${emojis.dnd} Rahatsız Etmeyin`)
        .replace("online", `${emojis.online} Çevrimiçi`)
        .replace("idle", `${emojis.idle} Boşta`)
        .replace("offline", `${emojis.offline} Çevrimdışı`);
        let discordRegister = moment
        .utc(message.guild.members.cache.get(user.id).user.createdAt)
        .format("**DD/MM/YYYY**")
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`);

        let serverJoin = moment
        .utc(message.guild.members.cache.get(user.id).joinedAt)
        .format("**DD/MM/YYYY**")
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`);

        let names = memberdb.cek(`isimler.${user.id}`);
        oldnames = `Kullanıcının eski isimleri bulunmamaktadır!`
        if(names) { oldnames = names.length > 0 ? names.map((value, index) => ` \`${value.guildName}\` **(<@&${value.Komut}>) [<@${value.Yetkili}>]**`).join("\n") : "Bu Üyenin İsim Geçmişi Bulunamadı.";    }


        moderationfx.embedOlustur(message.author, message.channel, `${user} kullanıcısının sunucu içerisinde ve discord üstündeki bilgisi aşağıda listelenmiştir;

**Genel Bilgileri**
\`Kullanıcı Adı\` ${user.displayName}
\`Aktiflik Durumu\` ${status}
\`Kayıt Tarihi\` ${discordRegister}
\`Katılma Tarihi\` ${serverJoin}

**Eski İsimleri**
${oldnames}`, "RANDOM")
};

module.exports.config = {
    name: "info",
    aliases: ["kb", "kullanicibilgi", "me"],
    usage: "Taslak",
    description: "Taslak Komutu."
};