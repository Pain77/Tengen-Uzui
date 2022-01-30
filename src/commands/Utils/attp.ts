import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import { Sticker, Categories, StickerTypes } from 'wa-sticker-formatter'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'attp',
            aliases: ['ap'],
            description: 'Search sticker. ',
            category: 'utils',
            dm: true,
            usage: `${client.config.prefix}stickerserach [keywords]`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('Give me the name of sticker you want to search 🐱')
        const tengen = joined.trim()
        console.log(tengen)
        
       const { data } = await axios.get(`https://api.xteam.xyz/attp?file&text=${tengen}`)
        
//f ((data as { error: string }).error) return void (await M.reply('Sorry, couldn\'t find'))
        //const i = Math.floor(Math.random() * data.result.length)
const b = data

        const sticker: any = await new Sticker(b, {
			pack: "ᴵ’ᵐ ᴬ ᴳᵒᵈ",
			author: "ʙʏ 𝙏𝙚𝙣𝙜𝙚𝙣 ",
			quality: 90,
			type: "crop",
			categories: ["🎊"],
		});

      await M.reply(
			await sticker.build(),
			MessageType.sticker,
			Mimetype.webp,)
}





}
