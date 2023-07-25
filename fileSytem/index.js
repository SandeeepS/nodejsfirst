var fs = require('fs');

//readfile

/*fs.readFile('./test.text', 'utf-8',function(err,data){
    if(err){
        console.error(err);
    }
    console.log(data);

});*/

//create file

/*fs.writeFile("new text","hello this new file",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file created");
});*/

//rename a file 

/*fs.rename('./test.text','./sample',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file created");
})*/

//delete file 

fs.unlink("./sample",(err)=>{
    if(err){
         console.log(err);
    }
    console.log("file deleted");
})