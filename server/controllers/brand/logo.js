const {brand}=require('../../models');
const fs = require('fs');

module.exports = async (req,res)=>{


    fs.readdir('./image', function(err, files) {
        res.writeHead(200, {"Content-Type": "image/png"});
        console.log(files)

        files.forEach(function(filename){
             const img_data =fs.readFile('./image/'+filename,function(data){
                res.write(img_data);
             })
                console.log(img_data)
            })
            res.end();
    });
}