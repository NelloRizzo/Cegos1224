document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display')!

    const addDigit: (d: number) => void =
        (n) => {
            const disp = display.innerText + n.toString()
            display.innerText = disp
        }

    Array.from(document.getElementsByClassName('digit'))
        .forEach(d => {
            d.addEventListener('click', (e) => {
                if (e.target instanceof Element) {
                    const digit = e.target.getAttribute("data-id")!
                    addDigit(Number.parseInt(digit))
                }
            })
        })
})