import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hsearch',
            description: `Gives you the data of the given Hentai.`,
            aliases: ['hs'],
            category: 'nsfw',
            usage: `${client.config.prefix}hsearch [title]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Give me the hentai tittle š±`))
        const tengen = joined.trim()
        console.log(tengen)
        const { data } = await axios.get(`https://velgrynd.herokuapp.com/api/nhentai?code=${tengen}`)
        if ( !(await this.client.getGroupData(M.from)).nsfw)
            return void M.reply(
                `This is not a NSFW group, Type !act nsfw to enable it š`
            )
        const buffer = await request.buffer(data.result.hasil.cover).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || 'āļø Something went wrong, please try again later āļø',
                    MessageType.image,
                    undefined,
                    undefined,
                    `š *Title:* ${data.result.hasil.title.default}\nš® *ID:* ${data.result.hasil.id}\nšø *Language:* ${data.result.hasil.language}\nš *parodies* :  ${data.result.hasil.details.parodies[0].name}\n${data.result.hasil.details.parodies[0].count}\n${data.result.hasil.details.parodies[0].link}\n š *Artist* : ${data.result.hasil.details.artists[0].name}\nš» Favourites : ${data.result.hasil.favorites}\n š*Uploaded* : ${data.result.hasil.uploadedAt}\n*${data.result.hasil.link}*   `,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`āļø Something went wrong, please try again later āļø`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`āļø Something went wrong, please try again later āļø`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
