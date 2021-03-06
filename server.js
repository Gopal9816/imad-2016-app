var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
  'article-one' : {
    title: 'Article One | Gopal M',
    heading: 'Article One',
    date:'September 21, 2016',
    content:`
    <p>
        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
    </p>
     <p>
        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
    </p>
     <p>
        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
    </p>`
},
 'article-two' : {
    title: 'Article Two | Gopal M',
    heading: 'Article Two',
    date:'September 28, 2016',
    content:`
    <p>
                This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
            </p>
            <p>
                This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
            </p>
            <p>
                This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
            </p>`
 },
  'article-three' : {
      title: 'Article Three | Gopal M',
    heading: 'Article Three',
    date:'October 5, 2016',
    content:`
    <p>
                This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.
            </p>
            <p>
                This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.
            </p>
            <p>
                This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.
            </p>`
}
};
    
function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate = 
    `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
       <div class="container">
        <div>
            <a href='/'>Home</a>
            <hr/>
        </div>
        ${heading}
        <div>
            ${date}
        </div>
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
app.get('/:articleName', function (req,res) {
    //articleName == article-one/two/three i.e the : will convert the following text into an parameter(part of express framework)
    var articleName= req.params.articleName; //parameter is entered into an object
    res.send(createTemplate(articles[articleName]));
    //articles[articleName] == articles[article-one/two/three] 
    //here instead of sending the html file it will return the html template created by the function for the article given in the url
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/traditional-wallpaper1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'traditional-wallpaper1.jpg'));
});
app.get('/ui/pro_pic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pro_pic.jpg'));
});
var counter=0;
app.get('/counter', function(req, res) {
    counter = counter+1;
    res.send(counter.toString());
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
