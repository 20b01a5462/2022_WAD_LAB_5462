exports.div=function(a,b,callback){
    if(b==0){
        callback("error division by zero")
    }
    else{
        callback(null,a/b)
    }
}