import { randomUUID } from 'crypto'
import * as db from '~/data/whisky.json'

export default defineEventHandler(async (event) => {
    const branch = process.env.VERCEL_GIT_COMMIT_REF
    const access_token = getCookie(event, 'access_token')
    if (!access_token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Not authorized',
        })
    }

    const remoteData = await fetch(`https://api.github.com/repos/vargasmesh/whisky/contents/data/whisky.json?ref=${branch}`, {
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${access_token}`,
            'X-GitHub-Api-Version': '2022-11-28'
        },
    })

    const { sha } = await remoteData.json()

    const whiskies = [...db.whiskies]
    const whisky = await readBody(event)
    const { id } = whisky
    if (id) {
        const index = whiskies.findIndex((whisky) => whisky.id === id)
        whiskies.splice(index, 1, whisky)
    } else {
        whiskies.push({ ...whisky, id: randomUUID() })
    }

    const payload = JSON.stringify({ whiskies }, null, 2)
    const encoded = Buffer.from(payload).toString('base64')
    const body = JSON.stringify({
        message: 'feat: update whisky list',
        content: encoded,
        branch,
        sha,
    })

    const response = await fetch(`https://api.github.com/repos/vargasmesh/whisky/contents/data/whisky.json`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${access_token}`,
            'X-GitHub-Api-Version': '2022-11-28'
        },
        body
    })

    const ret = await response.text()

    return ret
})

