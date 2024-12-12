const subjects = ['Paperino', 'Paperone', 'Archimede', 'Gastone', 'Topolino', 'Pippo', 'Basettoni', 'Pluto', 'Minnie']

const data = subjects
    .map((v, i) => ({ id: i, name: v }))

const s = (selector) => {
    const identifier = selector[0]
    switch (identifier) {
        case '.':
            return document.getElementsByClassName(selector.slice(1))
        case '#':
            return document.getElementById(selector.slice(1))
        default:
            return document.getElementsByTagName(selector)
    }
}

const e = (tag) => document.createElement(tag)
const t = (text) => document.createTextNode(text)

window.onload = () => {
    data.forEach(i => {
        const text = t(i.name)
        const div = e('li')
        div.appendChild(text)
        div.classList.add('item')
        div.setAttribute('data-id', i.id)
        s('#content').appendChild(div)
    })
}
