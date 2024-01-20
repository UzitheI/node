const http= require('http')
const fs=require('fs')

const PORT =8000

let server=http.createServer((req,res)=>{
    if(req.url == '/about'){
        fs.readFile('./about.html',(err,html)=>{
            if(err) console.log(err);
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(html);
            res.end();
        })
    }

    else if(req.url == '/'){
        fs.readFile('./index.html',(err,html)=>{
            if(err) console.log(err);
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(html);
            res.end();
        })
    }
    else if(req.url == '/contact'){
        fs.readFile('./contact.html',(err,html)=>{
            if(err) console.log(err);
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(html);
            res.end();
        });
    }
    
    else{
        fs.readFile('./404.html',(err,html)=>{
            if(err) console.log(err);
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(html);
            res.end();
        });
    }
}
)

server.listen(PORT);