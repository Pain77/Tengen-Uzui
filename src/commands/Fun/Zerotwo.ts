import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'zerotwo',
            description: 'Chat with Zerotwo.',
            aliases: ['02'],
            category: 'fun',
            usage: `${client.config.prefix}zerotwo (text)`
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('_*Darling 🌸*_')
        const zerotwo = joined.trim()
        await axios.get(`https://api.simsimi.net/v2/?text=${zerotwo}&lc=en`)
        .then((response) => {
                // console.log(response);
                const text = `_*🎈Zero Two:*_  ${response.data.success}`
                M.reply(text);
            }).catch(err => {
                M.reply(`_*Darling 🌸*_`)
            }
            )
    };
}
