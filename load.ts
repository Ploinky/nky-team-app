const id = Bun.argv[2]
const match = Bun.argv[3]
const key = process.env.RIOT_API_KEY

fetch('https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_' + id + '?api_key=' + key)
    .then((res) => res.json())
    .then((data) => Bun.write(match + ".json", JSON.stringify(data)))
    .then(() => console.log("wrote match json"))
    .catch((e) => console.error("failed to write match json: ", e))
    

fetch('https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_' + id + '/timeline?api_key=' + key)
    .then((res) => res.json())
    .then((data) => Bun.write(match + "_timeline.json", JSON.stringify(data)))
    .then(() => console.log("wrote match timeline json"))
    .catch((e) => console.error("failed to write match timeline json: ", e))