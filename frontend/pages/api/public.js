export default async function (req, res) {
    await fetch('http://localhost:8080/public')
    .then((response) => {
        return response.json();
    }).then((result) => {
        res.status(200).json(result.text)
    }).catch((error) => {
        res.status(error.status || 400).end(error.message);
    })
}