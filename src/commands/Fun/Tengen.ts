import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'tengen',
            description: 'Chat with Tengen.',
            aliases: ['uzui'],
            category: 'fun',
            usage: `${client.config.prefix}zerotwo (text)`
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('_*Flamboyant 🌸*_')
        const tengen = joined.trim()
        await axios.get(`https://api.simsimi.net/v2/?text=${tengen}&lc=en`)
        .then((response) => {
                // console.log(response);
                const text = `_*🎈Tengen Uzui:*_  ${response.data.success}`
                M.reply(text);
            }).catch(err => {
                M.reply(`_*Flamboyant 🌸*_`)
            }
            )
    };
}
