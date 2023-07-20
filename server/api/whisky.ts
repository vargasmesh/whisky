import { whiskies } from '~/data/whisky.json'

export default defineEventHandler(async (event) => {
    const access_token = getCookie(event, 'access_token')
    if (!access_token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Not authorized',
        })
    }

    const { name, brand } = await readBody(event)

    const updatedWhiskyArray = [...whiskies, {
        name,
        brand,
        nose: [],
        palate: [],
    }]

    return {}
})
