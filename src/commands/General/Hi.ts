import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const tengen =
			"https://c.tenor.com/Fm1MsDnIgf8AAAPo/tengen-uzui-tengen.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: tengen },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `*_𝘓𝘪𝘴𝘵𝘦𝘯, 𝘐'𝘮 𝘢 𝘎𝘰𝘥 𝘢𝘯𝘥 𝘺𝘰𝘶 𝘨𝘶𝘺𝘴 𝘢𝘳𝘦 𝘵𝘳𝘢𝘴𝘩 ‼️_*`,
		    }
		);
	};
}
