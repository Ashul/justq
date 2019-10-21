const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket')

function LoginReq(req, res, next) {
    if (req.user) {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  };
//API to Create Ticket

router.post('/create',LoginReq, (req, res)=>{
    let ticket = new Ticket(req.body)
    console.log(ticket)
    ticket.save((err, result)=>{
        if(err){console.log(err)}
        else{res.send(result)}
    })
} )

//API to update Ticket
router.put('/:id/update', LoginReq, (req,res)=>{
    console.log(req.body)
    Ticket.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, status)=>{
        if(err){console.log(err)}
        else{res.send(status)}

    })
})

//API to View Ticket

router.get('/',LoginReq, (req, res)=>{
    Ticket.find({}, (err, result)=>{
        if(err){console.log(err)}
        else{res.send(result)}
    })
})
//API to view Ticket By Id
router.get('/:id',LoginReq, (req,res)=>{
    Ticket.findById(req.params.id, (err, result)=>{
        if(err){
            return res.json({
                message:err
            })
        }else{
            res.send(result)
        }
    })
} )


//API to View Ticket By user

router.post('/data',LoginReq, (req, res)=>{

    Ticket.find({email:req.body.email}, (err, result)=>{
        if(err){console.log(err)}
        else{
            console.log(result)
            res.send(result)}
    })
})


//API to post answer to ticket

router.put('/:id',LoginReq,(req,res)=>{
    console.log(req.body)
    let answertoTicket= req.body
    Ticket.findById(req.params.id,(err, result)=>{
       if(err){console.log(err)}
       else{
           result.answer.push(answertoTicket)
           result.save((err,resultAnswer)=>{
               if(err){console.log(err)}
               else{res.send(resultAnswer)}
           })
        
       }
     })
})

module.exports = router;