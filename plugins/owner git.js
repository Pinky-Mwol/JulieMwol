/* Copyright (C) 2020 Nikhil-Jr.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Aleena - Nikhil-Jr
*/
const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════PINKY MWOL═════╗*\n           \n *😈═PINKY═😈* \n\n *Owner SHAHID- http://wa.me/919645148582 \n* *\n🔰instagram:-https://www.instagram.com/* \n *╚══════♻️═════╝* \n\n *▷Creator: SHAHID*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═PinkyMwol Owner Shahid═💥*\n\n*💘https://github.com/Pinky-Mwol/Shahi-46*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════PINKY MWOL═════╗*\n           \n *😈═PINKY═😈* \n\n *Owner SHAHID- http://wa.me/919645148582 \n* *\n🔰instagram:-https://www.instagram.com/* \n *╚══════♻️═════╝* \n\n *▷Creator: SHAHID*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           \n*💥═PinkyMwol Owner Shahid═💥*\n\n*💘https://github.com/Pinky-Mwol/Shahi-46*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
