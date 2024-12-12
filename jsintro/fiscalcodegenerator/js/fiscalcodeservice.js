const personalData = {
    'firstName': '',
    'lastName': '',
    'birthday': '',
    'gender': '',
    'birthCity': ''
}

const fiscalCodeGenerator = (data) => {
    const separateCV = (text) => {
        let c = ''
        let v = ''
        for (const ch of text.toUpperCase()) {
            if (ch >= 'A' && ch <= 'Z')
                if (ch == 'A' || ch == 'E' || ch == 'O' || ch == 'I' || ch == 'U')
                    v += ch
                else
                    c += ch
        }
        return { vowels: v, consonants: c, originalText: text }
    }
    function handleFirstName(fn) {
        let { consonants, vowels } = separateCV(fn)
        if (consonants.length > 3) consonants = consonants[0] + consonants.slice(2)
        return `${consonants}${vowels}XXX`.slice(0, 3)
    }
    function handleLastName(ln) {
        const { consonants, vowels } = separateCV(ln)
        return `${consonants}${vowels}XXX`.slice(0, 3)
    }
    function handleBirthday(bd, g) {
        const re = /(\d{4})-(\d\d)-(\d\d)/
        const [_, y, m, d] = bd.match(re)
        const month = "ABCDEHLMPRST"[m - 1]
        const day = `0${1 * d + (g == 'm' ? 0 : 40)}`.slice(-2)
        return `${y.slice(-2)}${month}${day}`
    }
    function checkCode(fc) {
        const odds = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23]
        const ZERO = "0".charCodeAt(0)
        const A = 'A'.charCodeAt(0)
        let sum = 0
        for (let i = 0; i < 15; ++i) {
            let ch = fc.charAt(i)
            console.log(ch)
            let depl = ch >= '0' && ch <= '9' ? ch.charCodeAt(0) - ZERO : ch.charCodeAt(0) - A
            sum += (i % 2 === 0) ? odds[depl] : depl
        }
        const res = String.fromCharCode(sum % 26 + A)
        console.log(res, sum, sum % 26 + A)
        return res
    }

    console.log("Data:", data)
    const firstName = handleFirstName(data.firstName)
    const lastName = handleLastName(data.lastName)
    const birthday = handleBirthday(data.birthday, data.gender)
    const fc = `${lastName}${firstName}${birthday}${data.birthCity}`
    return `${fc}${checkCode(fc)}`
}