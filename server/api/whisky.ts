import { whiskies } from '~/data/whisky.json'

export default defineEventHandler(async (event) => {
    const access_token = getCookie(event, 'access_token')
    if (!access_token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Not authorized',
        })
    }

    const { id, name, brand, nose, palate } = await readBody(event)

    return {}
})
