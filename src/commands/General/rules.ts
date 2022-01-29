import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rule',
            description: `Get rules list`,
            aliases: ['rules'],
            category: 'general',
            usage: `${client.config.prefix}rules`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios
        return void M.reply( await request.buffer(`https://wallpapercave.com/uwp/uwp1738845.jpeg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `---「𝙇𝙤𝙤𝙠 𝙖𝙩 𝙢𝙮 𝙧𝙪𝙡𝙚𝙨 𝙗𝙚𝙛𝙤𝙧𝙚 𝙪𝙨𝙞𝙣𝙜 𝙢𝙚, 𝘿𝙖𝙧𝙡𝙞𝙣𝙜 👠」---


(っ◔◡◔)っ𝙵𝙾𝙻𝙻𝙾𝚆 𝚃𝙷𝙴 𝚁𝚄𝙻𝙴𝚂 𝙲𝙰𝚁𝙴𝙵𝚄𝙻𝙻𝚈 🔖

⎆ ᴀꜱᴋ ᴍᴇ !ꜱᴜᴘ ꜰᴏʀ ᴛʜᴇ ᴏꜰꜰɪᴄɪᴀʟ ɢʀᴏᴜᴘ ʟɪɴᴋ
⎆ ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ Qᴜᴇʀɪᴇꜱ ᴜꜱᴇ !ᴍᴏᴅꜱ ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ᴏᴡɴᴇʀꜱ
⎆ ᴅᴏɴ'ᴛ ꜱᴛʀᴜɢɢʟᴇ ᴡʜɪʟᴇ ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ, ᴜꜱᴇ !ʜᴇʟᴘ ᴛᴏ ɢᴇᴛ ʜᴇʟᴘ ʟɪꜱᴛ
⎆ ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ ᴛʜʀᴏᴜɢʜ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅꜱ. ɪ'ᴍ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ, ɪᴛ ᴍᴇᴀɴꜱ ɪ'ᴍ ᴏꜰꜰʟɪɴᴇ ᴏʀ ᴍʏ ꜱᴇʀᴠᴇʀ'ꜱ ᴅᴏᴡɴ
⎆ ᴅᴏɴ'ᴛ ᴍᴇꜱꜱᴀɢᴇ ᴍᴇ ɪɴ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ

 *🎀 ＮＯＴＥ: REMEMBER TO KEEP RULES IN MIND OTHERWISE YOU'LL BE BANNED IN NO TIME 🚫*

N͜͡o͜͡w͜͡ ͜͡y͜͡o͜͡u͜͡ ͜͡c͜͡a͜͡n͜͡ ͜͡r͜͡i͜͡d͜͡e͜͡ ͜͡m͜͡e͜͡,͜͡ ͜͡D͜͡a͜͡r͜͡l͜͡i͜͡n͜͡g`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`🎀 An error occurred. Please try again later.`))
    }
}
