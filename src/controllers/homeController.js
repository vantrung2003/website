import db from '../models/index'
import CRUD from '../services/CRUDService'
let getHomePage = async (req, res) => {
     try {
          let data = await db.User.findAll()

          return res.render('homepage.ejs', {
               data: JSON.stringify(data)
          })
     } catch (error) {
          console.log('====================================');
          console.log(error);
          console.log('====================================');
     }

}
let readApi = (req, res) => {
     return res.render('readApi.ejs')
}

let createNewUser = async (req, res) => {
     let mess = await CRUD.createNewUser(req.body)
     console.log('====================================');
     console.log(mess);
     console.log('====================================');
     return res.send('Post len thanh cong')
}

module.exports = {
     getHomePage: getHomePage,
     readApi: readApi,
     createNewUser: createNewUser
}