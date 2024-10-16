import { Request, Response } from "express"
import mongoose, { ObjectId } from "mongoose"

const jwt = require('jsonwebtoken')


const getUser = (id: ObjectId, name: string) => {
    
    const payload = {
        id : id , 
        username: name,
    }
    return jwt.sign(payload, process.env.SECRET_KEY);

}
const setUser = () => {
    
}

module.exports = {
    getUser,
    setUser
}