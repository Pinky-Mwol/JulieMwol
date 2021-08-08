/* Copyright (C) 2020 shahi-ksd.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');

const Language = require('../language');
const Lang = Language.getString('filters');

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));

Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Mine','Goodbye','Monne','Discount','Thala','Penn','Sad','Tv','Rider','alone','Self','Boys','Joker','Ayn','Ath ann power','Muthee','Ni power','Umbi','Vidhi','Nice','Chank','Pawer','Mindi','Ganam','Bhai','Alamb','Ni matram','Namale','Power','Bgm','Sound','Ponn','Chirikano','night','Ok da','WELCOME','Chunk','Nanban','Varum','Feel','friendship','Name','Chunkzz','Admin','Jeevan','Aval','namale','Sed','Kanappi','Love','Arum ille','Pranth','Aro vannu','Manasil','Good morning','set akka','Dora Buji','Urapp','Ni illa','result','Nik idikana','School','I love u','Ratri','Shadi','love','Sathiyam','Uyir','feel','Rajan','Manas','Kalikar','aval','Premam','Oro all','Tanda','Anu','Chodicho','Mone ba','Nine','problem','Di','Bhagu','Rafi','kgf','Rocky','may I come in','Kgf','kgf mass','Nad','Achan','Group','KGF','Patt','GROUP','Hello','you','ss','Alive','Uff','I love you','kaztro','PUBG','Love you','Single','Moodesh','Bot','Eda','Bgm va','Helo','Hi','Shahi','Endi','chakare','ser','relax','pidicho','vanda','Uploading','Myr','bot','your','Oh','machan','Kundan','Downloading','To','ano','umma','shahi','Ha','cr7','Ndayi','Para','I miss you','Poli','Chel','I love u','Pinealla','Ndakal','Mm','!indta','music','Polik','Ni','Nte','Aa','Msg','video','Ind','subscribe','Subscribe','sub']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

