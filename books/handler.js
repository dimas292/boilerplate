const getBookAll = (req, res) => {
    res.send('get all books')
}
const getBookByID = (req, res) => {
    const id = req.params.id
    res.send(`get book by id : ${id}`)
}
export { getBookAll, getBookByID }