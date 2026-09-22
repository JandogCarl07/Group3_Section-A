const express = require ('express')
const router = express. Router()
let users = [
    { 
        id : 1,
        name: 'carlos',
        role: 'student'
    },
    { 
        id : 2,
        name: 'shaira',
        role: 'admin'
    }
]

router . get ('/') (req, res) =>{
       let result = users
       if (req.query.role) {
       result = users.filter(user
        => user.role === req. query.role)
    }
     res. status(200).json( {
       success: true,
       data: results,
       meta : {
             timestamp: new 
        Date().toISOString (),
               count: result. length
       }
    })
}

router. get ('/: id',) (req, res) =>
    const user = users. find (
        user => user. id === 
        Number(req. params. id)
 )
    if (!user) {
        return 
    res.status (404).json({
        sucess: false,
        errror: {
        code:'NOT FOUND',
        message:'user not found'
        }
    })
    }

    res.status(200).json(
        {
            success: true,
            data: user
        })

    router.post ('/', (req, res) =>) {
        const { name, role} = req.body
        if (!name || !role) {
            return
        
        res.status(400).json ({
            success: false,
            error: {
                code: 'Bad_Request'
                message: 'name and role are required'
            }
        })
        }
    }








