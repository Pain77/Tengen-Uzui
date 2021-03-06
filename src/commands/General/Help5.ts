/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help5",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}tengen`,
		        dm: true,
                        aliases: ['h5','?5','menu5']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const tengen = 
			"https://c.tenor.com/K9c2kybvYhwAAAPo/tengen-uzui-uzui-tengen.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: tengen },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` ⊱•─ {⋅✯ 𝙈𝙀𝘿𝙄𝘼 ✯⋅} ─•⊰
				
🎼 ${this.client.config.prefix}ɪɢᴜꜱᴇʀ 
🎼 ${this.client.config.prefix}ᴋᴀʀᴀᴏᴋᴇ 
🎼 ${this.client.config.prefix}ʟʏʀɪᴄꜱ 
🎼 ${this.client.config.prefix}ᴘʟᴀʏ 
🎼 ${this.client.config.prefix}ꜱᴘᴏᴛɪꜰʏ 
🎼 ${this.client.config.prefix}ʏᴛᴀᴜᴅɪᴏ 
🎼 ${this.client.config.prefix}ʏᴛꜱᴇᴀʀᴄʜ 
🎼 ${this.client.config.prefix}ʏᴛᴠɪᴅᴇᴏ 
🎼 ${this.client.config.prefix}ɪɢ 
🎼 ${this.client.config.prefix}ɪɢᴘᴏsᴛ
🎼 ${this.client.config.prefix}ᴘɪɴᴛᴇʀᴇsᴛ

 ❅────────✧ ✦ ✧────────❅
📬 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
 ❅────────✧ ✦ ✧────────❅

 `,
			}
		);
	};
}
