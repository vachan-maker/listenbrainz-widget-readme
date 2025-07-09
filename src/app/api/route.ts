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
<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(0, 0, 0);">
  <rect x="1.6" y="1.848" width="95.88" height="95.88" style="stroke: rgb(0, 0, 0); fill: rgb(51, 51, 51);"/>
  <text style="fill: yellow; font-family: &quot;Arial&quot;, sans-serif; font-size: 28px; font-style: italic; font-weight: 700; text-transform: lowercase; white-space: pre;" transform="matrix(0.238591, 0, 0, 0.22727, 30.100395, 17.420271)" x="6.822999954223633" y="57.96200180053711">listening to</text>
  <text style="fill: rgb(33, 192, 99); font-family: &quot;Arial&quot;, sans-serif; font-size: 28px; font-style: italic; font-weight: 700; text-anchor: middle; white-space: pre;" transform="matrix(0.352341, 0, 0, 0.497911, 47.136147, 21.40827)" x="6.823" y="57.962">${track_name}</text>
  <text style="fill: rgb(33, 192, 99); font-family: &quot;Arial&quot;, sans-serif; font-size: 28px; font-style: italic; font-weight: 700; text-transform: lowercase; white-space: pre;" transform="matrix(0.238591, 0, 0, 0.22727, 25.265982, 53.140553)" x="6.822999954223633" y="57.96200180053711">by ${artist_name}</text>
  <text style="fill: orange; font-family: &quot;Arial&quot;, sans-serif; font-size: 28px; font-style: italic; font-weight: 700; text-transform: lowercase; white-space: pre;" transform="matrix(0.238591, 0, 0, 0.22727, 31.674744, 82.540047)"><tspan style="text-decoration: underline color(srgb 1 1 1 / 0.8);" x="6.823" y="57.962">On ${music_service_name}</tspan></text>
</svg>`
    return svg



}

function generateNotPlaying() {
        const svg = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(0, 0, 0);">
  <rect x="1.6" y="1.848" width="50" height="50" style="stroke: rgb(0, 0, 0); fill: rgb(51, 51, 51);"/>
  <text style="fill: yellow; font-family: &quot;Arial&quot;, sans-serif; font-size: 28px; font-style: italic; font-weight: 700; text-transform: lowercase; white-space: pre;" transform="matrix(0.238591, 0, 0, 0.22727, 30.100395, 17.420271)" x="6.822999954223633" y="57.96200180053711">I am probably sleeping or something</text>
  <text style="fill: rgb(33, 192, 99); font-family: &quot;Arial&quot;, sans-serif; font-size: 28px; font-style: italic; font-weight: 700; text-anchor: middle; white-space: pre;" transform="matrix(0.352341, 0, 0, 0.497911, 47.136147, 21.40827)" x="6.823" y="57.962">Not Listening</text>
  <text style="fill: rgb(33, 192, 99); font-family: &quot;Arial&quot;, sans-serif; font-size: 28px; font-style: italic; font-weight: 700; text-transform: lowercase; white-space: pre;" transform="matrix(0.238591, 0, 0, 0.22727, 25.265982, 53.140553)" x="6.822999954223633" y="57.96200180053711"></text>
  <text style="fill: orange; font-family: &quot;Arial&quot;, sans-serif; font-size: 28px; font-style: italic; font-weight: 700; text-transform: lowercase; white-space: pre;" transform="matrix(0.238591, 0, 0, 0.22727, 31.674744, 82.540047)"><tspan style="text-decoration: underline color(srgb 1 1 1 / 0.8);" x="6.823" y="57.962">On spotify</tspan></text>
</svg>`
    return svg

}