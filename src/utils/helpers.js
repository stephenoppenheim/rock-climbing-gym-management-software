
export const updateState = (setState, key, id, type, record) => {
    setState(prev =>
        record ?
            type === "add" ? [...prev, record] : prev.map(user => user[key] === id ? record : user) :
            prev.filter(document => document[key] !== id)
    )
}

export const getExpirationDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() + 2);
    today.setUTCHours(0, 0, 0, 0);
    return today.toISOString();
}