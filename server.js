var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {   
    title: 'Article One | Nibu M John',
    heading: 'Article One',
    date: 'Aug 05, 2017',
    content:`
    <p>
             Here I am typing the content of my web page.. Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..
        </p> 
        <p>
             Here I am typing the content of my web page.. Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..
        </p> 
        <p>
             Here I am typing the content of my web page.. Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..
             </p> `
},
    'article-two': {
        title: 'Article Two | Nibu M John',
    heading: 'Article Two',
    date: 'Aug 06, 2017',
    content:`
    <p>
             Here I am typing the content of my web page.. Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..
        </p> 
        <p>
             Here I am typing the content of my web page.. Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..
        </p> 
        `
    },
    'article-three': {
        title: 'Article Three | Nibu M John',
    heading: 'Article Three',
    date: 'Aug 07, 2017',
    content:`
    <p>
             Here I am typing the content of my web page.. Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..
        </p> 
    
        <p>
             Here I am typing the content of my web page.. Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..Here I am typing the content of my web page..
             </p> `
}
};

function createTemplate (data){
  var title = data.title;
  var heading = data.heading;
  var date = data.date;
  var content = data.content;
  

    var htmlTemplate=`
    <html>
        <head>
         <title>
             ${title}
         </title>   
         <meta name="viewport" content="width=device-width, initial=sole=1" />
         <link href="/ui/style.css" rel="stylesheet" />
         <style>
          
             
         </style>
      </head>
    <body>
        <div class="container">
            <div>    
                <a href="/"> Home</a>||
                <a href="article-one"> Article One</a>||
                <a href="article-two"> Article Two</a>||
                <a href="article-three"> Article Three</a>||
            </div>
            <hr/>
            <h2> ${heading}</h2>
            
            <div>
                ${date}
           <div>
              ${content}
           </div>
       </div>
    </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    // artilceName == article-one
    //article[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
