const USER = 'vargasmesh'

export default defineEventHandler(async (event) => {
    const access_token = getCookie(event, 'access_token')
    if (!access_token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Not authorized',
        })
    }

    const response = await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })

    return await response.json()
})
