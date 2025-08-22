const express = require('express')
const path = require('path')
const Db = require('./Db')
const Blog = require('./model/blog')
const userRoute = require('./routes/user')
const blogRoute = require('./routes/blog')

const cookieParser = require('cookie-parser')
require('dotenv').config();


const { checkAuthenticationCookie } = require('./middleware/authentication')


const app = express()
const PORT =process.env.PORT || 2000;



app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(checkAuthenticationCookie("token"))
app.use(express.static(path.resolve('./public')))


app.get('/', async (req, res) => {
    const allBlogs = await Blog.find({})
    res.render('home', {
        user: req.user,
        blogs: allBlogs,
    })

})
app.use('/user', userRoute)
app.use('/blog', blogRoute)



app.listen(PORT, console.log(`Server Started at PORT:${PORT}`))