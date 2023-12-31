const  whitelist = ['https://mern-todo-xw0p.onrender.com',"http://localhost:3000"]
const corsOptions = {
  origin:   (origin, callback) =>{
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus:200
}


module.exports={corsOptions};