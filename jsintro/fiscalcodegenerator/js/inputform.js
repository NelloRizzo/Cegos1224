document.addEventListener('DOMContentLoaded', async () => {
    const cities = await getCities()


    const getCitiesByProvince = (acronym) =>
        cities.filter(c => c.sigla === acronym)
            .map(c => ({
                name: c.nome,
                acronym: c.acronym,
                code: c.codiceCatastale
            }))

    const selectCities = (acronym) => {
        const cities = getCitiesByProvince(acronym)
        const ce = document.getElementById('birth-city')
        Array.from(ce).forEach(c => ce.removeChild(c))
        cities.forEach(c => {
            const opt = document.createElement('option')
            opt.setAttribute('value', c.code)
            opt.innerText = c.name
            ce.appendChild(opt)
        })
    }

    const allProvinces =
        cities
            .map(c => ({ acronym: c.sigla, name: c.provincia.nome }))

    const provincesMap = new Map()
    allProvinces.forEach(p => provincesMap.set(p.acronym, p))

    const provinces = Array.from(provincesMap.values())
    provinces.sort((p1, p2) => p1.name > p2.name ? 1 : -1)

    const pe = document.getElementById('birth-province')
    provinces.forEach(p => {
        const opt = document.createElement('option')
        opt.setAttribute('value', p.acronym)
        opt.innerText = p.name
        pe.appendChild(opt)
    })
    selectCities(pe.value)

    pe.addEventListener('change', () => selectCities(pe.value))
})