import { URLSearchParams } from "url"

const USER = 'vargasmesh'

export default defineEventHandler(async (event) => {
    const { clientSecret, public: { clientId } } = useRuntimeConfig()
    const { code } = await readBody(event)

    if (!code) {
        throw createError({
            statusCode: 400,
            statusMessage: 'code is required',
        })
    }

    const params = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code
    })

    const response = await fetch(`https://github.com/login/oauth/access_token?${params}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    })

    if (response.status !== 200) {
        return {}
    }


    const body = await response.json()
    const { access_token, error, error_description } = body

    if (error) {
        throw createError({
            statusCode: 400,
            statusMessage: error_description,
        })
    }


    const userResponse = await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })

    const { login } = await userResponse.json()


    if (login !== USER) {
        throw createError({
            statusCode: 403,
            statusMessage: 'Only the owner can access this page',
        })
    }

    setCookie(event, 'access_token', access_token, {
        httpOnly: true,
    })

    return { success: true }
})
