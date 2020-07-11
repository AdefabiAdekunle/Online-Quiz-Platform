let express=require('express')
let app=express()
let mongojs=require('mongojs')
let bodyParser=require('body-parser')
let db=mongojs('candidatelist1',['candidatelist1'])

app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/candidatelist',(req,res)=>{
    //console.log(req.body)
db.candidatelist1.insert(req.body,(err,doc)=>{
   //console.log(doc)
   res.json(doc) 
})
})
app.get('/candidatelist',(req,res)=>{
    db.candidatelist1.find((err,docs)=>{
        console.log(docs) 
        res.json(docs)
    }) 
    })
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server has started on ${PORT}`))