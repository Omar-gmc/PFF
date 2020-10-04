const {body,validationResult}= require('express-validator')



const registerRules = ()=>[
    body("name","name is Required").notEmpty(),
    body("lastName","lastName is Required").notEmpty(),
    body("password","password must contain at least 6 characters").isLength({
        min:6,
        Max:20,
    }),
    body("email","invalid email").isEmail()
];
const loginRules = () =>[
    body("email","invalid email").isEmail(),
    body("password","password must contain at least 6 characters").isLength({
        min:6,
        Max:20,
    }),
    
];
const validator = (req,res,next)=>
{
    const errors= validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).send({errors: errors.array().map((el)=>({
            msg: el.msg,
            })),
        });
    }
    next();
};
module.exports = {
    validator,
    loginRules,
    registerRules,
}
