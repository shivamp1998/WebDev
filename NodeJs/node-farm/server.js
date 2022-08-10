const http = require('http');
const url = require('url');
const fs = require('fs');
const data = fs.readFileSync(`./dev-data/data.json`,'utf-8');
const tempOverview = fs.readFileSync(`./templates/overview.html`,'utf-8');
const tempCard = fs.readFileSync(`./templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`./templates/template-product.html`,'utf-8');

const dataObj = JSON.parse(data);
const replaceTemplate = (temp,product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%FROM%}/g,product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    if(!product.organic) output = output.replace(/{%NOTORGANIC%}/, 'not-organic');
    return output;
}
const server = http.createServer((req,res) => {
    const {pathname,query} = url.parse(req.url, true);
    if(pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        const cardHTML = dataObj.map((data) => replaceTemplate(tempCard,data)).join('')
        const newtempOverview = tempOverview.replace(/{%OVERVIEW%}/g, cardHTML)
        res.end(newtempOverview);
    }else if(pathname === '/product') {
        console.log(query.id)
        const product = dataObj.find((product) => product.id == query.id );
        const output = replaceTemplate(tempProduct,product);
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        res.end(output)
    }else if (pathname === '/api') {
        res.writeHead(200, {
            'Content-Type' : 'application/json'
        })
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-Type' : 'text/html',
            'header' : 'hello-world'
        });
        res.end('<h1> Page Not Found </h1>')
    }
});


server.listen(3001,() => {
    console.log(`Server Running on PORT 3000`)
}) 
