import { randomUUID } from 'crypto'
import * as db from '~/data/whisky.json'

export default defineEventHandler(async (event) => {
    const access_token = getCookie(event, 'access_token')
    if (!access_token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Not authorized',
        })
    }

    const whiskies = [...db.whiskies]
    const whisky = await readBody(event)
    const { id } = whisky
    if (id) {
        const index = whiskies.findIndex((whisky) => whisky.id === id)
        whiskies.splice(index, 1, whisky)
    } else {
        whiskies.push({ ...whisky, id: randomUUID() })
    }


    return {}
})
