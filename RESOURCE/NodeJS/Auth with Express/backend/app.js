const port = process.env.PORT || 3000

app = require('./app')

app.listen(port, () => {
    console.log("Server is running")
})