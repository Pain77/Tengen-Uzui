/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}nino`,
		        dm: true,
                        aliases: ['h','?','menu']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const nino = 
			"https://c.tenor.com/qN1saT1qxW8AAAPo/go-toubun-no-hanayome-nakano-nino.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: nino },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `👋🏻 𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚! *@${M.sender.username}*.
⥤ 𝐖𝐚𝐭𝐚𝐬𝐡𝐢 𝐍𝐨 𝐍𝐚𝐦𝐚𝐞 𝐖𝐚 𝐍𝐚𝐤𝐚𝐧𝐨 𝐍𝐢𝐧𝐨 𝐃𝐞𝐬𝐮 🩰
⥤ 𝐌𝐲 𝐏𝐫𝐞𝐟𝐢𝐱 𝐈𝐬 - "${this.client.config.prefix}"
➽─────────────────────❥
1┊ᴅᴏɴ'ᴛ ᴄᴀʟʟ ᴍᴇ ᴛᴏ ᴀᴠᴏɪᴅ ʙʟᴏᴄᴋɪɴɢ.
2┊ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ ɪɴ ᴅᴍ ᴛᴏ ᴀᴠᴏɪᴅ ʙʟᴏᴄᴋɪɴɢ.
➽─────────────────────❥

-🄼🅈 🄷🄴🄻🄿 🄻🄸🅂🅃-

 ⊱•─ {⋅✯ 𝙒𝙀𝙀𝘽 ✯⋅} ─•⊰

🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴀɴɪᴍᴇ, ᴍᴀɴɢᴀ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ1 [${this.client.config.prefix}ʜ1]
 
 ⊱•─ {⋅✯ 𝙁𝙐𝙉 ✯⋅} ─•⊰
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ꜰᴜɴ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ2 [${this.client.config.prefix}ʜ2]
 
 ⊱•─ {⋅✯ 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 ✯⋅} ─•⊰
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ɢᴇɴᴇʀᴀʟ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ3 [${this.client.config.prefix}ʜ3]

 ⊱•─ {⋅✯ 𝙐𝙏𝙄𝙇𝙎 ✯⋅} ─•⊰

🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴜᴛɪʟꜱ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ4 [${this.client.config.prefix}ʜ4]
 
 ⊱•─ {⋅✯ 𝙈𝙀𝘿𝙄𝘼 ✯⋅} ─•⊰
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴍᴇᴅɪᴀ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ5 [${this.client.config.prefix}ʜ5]
 
 ⊱•─ {⋅✯ 𝙀𝘿𝙐𝘾𝘼𝙏𝙄𝙑𝙀 ✯⋅} ─•⊰
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴇᴅᴜᴄᴀᴛɪᴠᴇ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ6 [${this.client.config.prefix}ʜ6]
 
 ⊱•─ {⋅✯ 𝙈𝙊𝘿𝙀𝙍𝘼𝙏𝙄𝙊𝙉 ✯⋅} ─•⊰
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ7 [${this.client.config.prefix}ʜ7]
 
 ⊱•─ {⋅✯ 𝙉𝙎𝙁𝙒 ✯⋅} ─•⊰
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ɴꜱꜰᴡ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ8 [${this.client.config.prefix}ʜ8]
 
 ⊱•─ {⋅✯ 𝙇𝙊𝙂𝙊 ✯⋅} ─•⊰
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ʟᴏɢᴏ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ9 [${this.client.config.prefix}ʜ9]
 
            ┍━━━━━»•» 🌺 «•«━┑
               © 🄽🄸🄽🄾-🄱🄾🅃 
            ┕━»•» 🌺 «•«━━━━━┙

 `,
			}
		);
	};
}
