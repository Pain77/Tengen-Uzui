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
				caption: `*_𝙇𝙞𝙨𝙩𝙚𝙣, 𝙄 𝙖𝙢 𝙖 𝙜𝙤𝙙 𝙖𝙣𝙙 𝙮𝙤𝙪 𝙜𝙪𝙮𝙨 𝙖𝙧𝙚 𝙩𝙧𝙖𝙨𝙝‼️_*`,
		    }
		);
	};
}
