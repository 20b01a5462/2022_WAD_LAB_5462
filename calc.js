var calc=require('./super')
calc.div(12,2,(err,result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})
calc.div(12,0,(err,result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})