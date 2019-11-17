const fs= require('fs');
const path=require('path');
fs.readFile('./t.json','utf8',(err, jsonString1) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    var content1 = JSON.parse(jsonString1);
    content1[1].roll1.forEach(sub=>{
fs.readFile((path.join('./frontend/src/',sub.roll +'.json')),'utf8',(err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    
    var content = JSON.parse(jsonString);
    
    
    content.subjects.forEach(element => {

        if(element.name===content1[0].sub)
        {
            element.present=parseInt(element.present)+1;
        }
        
    });
    
    let data = JSON.stringify(content, null, 2);
    fs.writeFile((path.join('./frontend/src/',sub.roll +'.json')), data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
})
})
})
