require("dotenv").config()
const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()
  .then(() => {
    app.listen(3000,()=>{
    console.log(`mai bhi chalega`)
    })
  })
  .catch((error) => {
    console.error("database connection failed:", error.message)
    process.exit(1)
})

