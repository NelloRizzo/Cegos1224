const url = 'https://raw.githubusercontent.com/matteocontrini/comuni-json/refs/heads/master/comuni.json'
const getCities  = async () => {
    const resp = await fetch(url)
    const cities = await resp.json()
    
    return cities
}