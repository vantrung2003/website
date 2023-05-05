var bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10)
import db from '../models/index'

let createNewUser = async (data) => {
     return new Promise(async (resolve, reject) => {
          try {
               let hashPasswordFromBcrypt = await hashUserPassword(data.password)
               await db.User.create({
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender == "1" ? true : false,
                    roleId: data.roleId,
               })
               resolve("Create a new user successful!!")
          } catch (error) {
               reject(error)
          }
     })

}

let hashUserPassword = (password) => {
     return new Promise(async (resolve, reject) => {
          try {
               var hash = await bcrypt.hashSync("B4c0/\/", salt)
               resolve(hash)
          } catch (error) {
               reject(error)
          }

     })
}

module.exports = {
     createNewUser: createNewUser
}