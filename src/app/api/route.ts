type TrackMetadata = {
    artist_name: string
    release_name: string
    track_name: string
    music_service_name: string
}
const userName = process.env.LB_USERNAME
export async function GET(request: Request) {
    const response = await fetch(`https://api.listenbrainz.org/1/user/${userName}/playing-now`)
    const data = await response.json()
    const payload = await data.payload
    console.log(payload)

    if (payload.count) {
        const { track_metadata: { artist_name, track_name, additional_info: { music_service_name } } } = payload.listens[0]
        const generatedSVG = generateSVG(track_name, artist_name, music_service_name)
        return new Response(generatedSVG, {
            headers: {
                "Content-Type": "image/svg+xml",
            }
        })

    }
    else {
        const generatedSVG = generateNotPlaying()
        return new Response(generatedSVG, {
            headers: {
                "Content-type": "image/svg+xml",
            }
        })

    }
}


function generateSVG(track_name: string, artist_name: string, music_service_name: string) {
    const svg = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="216.831 170.08 450 150" width="450px" height="150px"><g id="object-8" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"><rect x="216.831" y="170.08" width="450" height="150" style="fill: rgb(51, 51, 51); stroke: rgb(0, 0, 0); stroke-width: 1px;" id="object-0"/><text style="fill: rgb(255, 255, 255); font-family: &quot;Arial&quot;, sans-serif; font-size: 18px; white-space: pre; stroke-width: 1px;" y="-12.92" x="191.831" id="object-7"><tspan style="font-style: italic; word-spacing: 0px; stroke-width: 1px;" x="229.816" y="202.125">Tuned In to</tspan><tspan style="word-spacing: 0px; stroke-width: 1px;"> 🎵 </tspan></text><text style="fill: rgb(255, 255, 255); font-family: &quot;Arial&quot;, sans-serif; font-size: 30px; font-weight: 700; white-space: pre; stroke-width: 1px;" x="229.816" y="253.125" id="object-6">${track_name}</text><text style="fill: rgb(255, 255, 255); font-family: &quot;Arial&quot;, sans-serif; font-size: 15px; white-space: pre; stroke-width: 1px;" x="229.816" y="279.125" id="object-5">${artist_name}</text></g></svg>`
    return svg



}

function generateNotPlaying() {
        const svg = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="216.831 170.08 450 150" width="450px" height="150px"><g id="object-8" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"><rect x="216.831" y="170.08" width="450" height="150" style="fill: rgb(51, 51, 51); stroke: rgb(0, 0, 0); stroke-width: 1px;" id="object-0"/><text style="fill: rgb(255, 255, 255); font-family: &quot;Arial&quot;, sans-serif; font-size: 18px; white-space: pre; stroke-width: 1px;" y="-12.92" x="191.831" id="object-7"><tspan style="font-style: italic; word-spacing: 0px; stroke-width: 1px;" x="229.816" y="202.125">Not Listening To Anything</tspan><tspan style="word-spacing: 0px; stroke-width: 1px;"> 🎵 </tspan></text><text style="fill: rgb(255, 255, 255); font-family: &quot;Arial&quot;, sans-serif; font-size: 30px; font-weight: 700; white-space: pre; stroke-width: 1px;" x="229.816" y="253.125" id="object-6"></text><text style="fill: rgb(255, 255, 255); font-family: &quot;Arial&quot;, sans-serif; font-size: 15px; white-space: pre; stroke-width: 1px;" x="229.816" y="279.125" id="object-5"></text></g></svg>`
    return svg


}