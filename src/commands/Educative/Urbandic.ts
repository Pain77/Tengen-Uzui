/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import axios from "axios";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "urbandictionary",
			aliases: ["ud"],
			description: "Gives you the definition of the given word. ",
			category: "educative",
			usage: `${client.config.prefix}ur [Word you want to search about]`,
			baseXp: 50,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined) return void M.reply("Please provide a word .");
		const term = joined.trim();
		console.log(term, joined);
		await axios
			.get(`http://api.urbandictionary.com/v0/define?term=${term}`)
			.then((response) => {
				// console.log(response);
				const text = `📒 *Urban dictionary :* ${term}\n\n📑 *Definition :* ${response.data.list[0].definition
					.replace(/\[/g, "")
					.replace(/\]/g, "")}\n\n🔖 *Example :* ${response.data.list[0].example
					.replace(/\[/g, "")
					.replace(/\]/g, "")}`;
				M.reply(text);
			})
			.catch((err) => {
				M.reply(`Sorry, couldn't find any definition related to *${term}*.`);
			});
	};
}
