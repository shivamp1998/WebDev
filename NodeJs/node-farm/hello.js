const fs = require('fs');

const textIn  = fs.readFileSync('./txt/input.txt','utf-8');
const textOut = 'This is the worst thing i have seen in my life \n' + textIn + '\ncreated by me';
fs.writeFileSync('./txt/output.txt',textOut)

fs.readFile('./txt/start.txt','utf-8',(err,data) => {
    fs.readFile(`./txt/${data}.txt`,'utf-8', (err,data1)=> {
        console.log(data);
        fs.readFile('./txt/append.txt','utf-8',(err,data2) => {
            fs.writeFile('./txt/final.txt',`${data1}\n${data2}`, (err) => {
                console.log('File has been written')
            })
        })
    })
}) 

