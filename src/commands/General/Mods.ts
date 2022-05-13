/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "mods",
			description: "Generally used to check if bot is Up",
			category: "general",
            usage: `${client.config.prefix}mods`,
            dm: true,
            aliases: ['moderators', 'mod', 'owner'],
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const tengen =
			"https://c.tenor.com/4WE8RVRWiNcAAAPo/kimetsu-no-yaiba-demon-slayer.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: tengen },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🏮 ᴍᴏᴅᴇʀᴀᴛᴏʀꜱ\n
╰• ░P░A░I░N░
🎗ᴄᴏɴᴛᴀᴄᴛ: wa.me/919081920038?text=𝙃𝙚𝙡𝙡𝙤+ᴘᴀɪɴ
💻ɢɪᴛʜᴜʙ: https://github.com/Pain77

╰• 𝕵𝖚𝖎𝖈𝖊 𝖂𝕽𝕷𝕯
🎗ᴄᴏɴᴛᴀᴄᴛ: wa.me/263780699988?text=𝙃𝙚𝙡𝙡𝙤+ᴊᴜɪᴄᴇ ᴡʀʟᴅ
──────────────────
🅂🅄🄿🄿🄾🅁🅃 🄶🅁🄾🅄🄿                                        
🎗 ᴛʏᴘᴇ #sᴜᴘᴘᴏʀᴛ ᴀɴᴅ ʙᴏᴛ ᴡɪʟʟ sᴇɴᴅ sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ ʟɪɴᴋ ɪɴ ʏᴏᴜʀ ᴅᴍ!!!
•━━━ ✽ • ✽ ━━━•`,
			}
		);
	};
}
