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
				caption: `ð® á´á´á´á´Êá´á´á´Êê±\n
â°â¢ âPâAâIâNâ
ðá´á´É´á´á´á´á´: wa.me/919081920038?text=ððð¡ð¡ð¤+á´á´ÉªÉ´
ð»É¢Éªá´Êá´Ê: https://github.com/Pain77

ââââââââââââââââââ
ððð¿ð¿ð¾ðð ð¶ðð¾ðð¿                                        
ð á´Êá´á´ #sá´á´á´á´Êá´ á´É´á´ Êá´á´ á´¡ÉªÊÊ sá´É´á´ sá´á´á´á´Êá´ É¢Êá´á´á´ ÊÉªÉ´á´ ÉªÉ´ Êá´á´Ê á´á´!!!
â¢âââ â½ â¢ â½ ââââ¢`,
			}
		);
	};
}
