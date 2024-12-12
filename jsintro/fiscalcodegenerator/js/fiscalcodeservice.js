const personalData = {
    'firstName': '',
    'lastName': '',
    'birthday': '',
    'gender': '',
    'birthCity': ''
}

const fiscalCodeGenerator = (data) => {
    function handleFirstName(fn) { return "XXX" }
    function handleLastName(ln) { return "XXX" }
    function handleBirthday(bd, g) { return "00X00" }
    function checkCode(fc) { return "X" }
    const firstName = handleFirstName(data.firstName)
    const lastName = handleLastName(data.lastName)
    const birthday = handleBirthday(data.birthday, data.gender)
    const fc = `${lastName}${firstName}${birthday}${data.birthCity}`
    return `${fc}${checkCode(fc)}`
}