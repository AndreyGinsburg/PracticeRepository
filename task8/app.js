const express = require('express');
const app = express();
const fs = require('fs');
const memory = require('./public/index');
bodyParser = require('body-parser');

app.use(express.static('public'))
app.use(bodyParser.json());

app.get('/getPost/:id', (req, res) => { 
    let photos = JSON.parse(fs.readFileSync('server/data/posts.json'));
    photos.getPost = memory.getPost;
    let post = photos.getPhotoPost(req.params.id);
    post ? res.send(post) : res.status(404).end();
})

app.post('/getPosts', (req, res) => { 
    let photos = JSON.parse(fs.readFileSync('server/data/posts.json'));
    let top = req.query.top;
    let skip = req.query.skip;
    for (let photo in photos) {
        photo.createdAt = new Date(photo.createdAt);
    }
    let filter = req.body;
    photos.getPosts = memory.getPosts;
    let posts = photos.getPhotoPosts(skip, top, filter);
    if (posts) {
        res.status = 200;
        res.json(posts);
    } else {
        res.sendStatus(404);
    }
})

app.get('/getPosts', (req, res) => { 
    let photos = JSON.parse(fs.readFileSync('server/data/posts.json'));
    res.json(photos);
})

app.delete('/removePost/:id', (req, res) => { 
    let photos = JSON.parse(fs.readFileSync('server/data/posts.json'));
    photos.removePost = memory.removePost;
    if (photos.removePhotoPost(req.params.id)) {
        fs.writeFileSync('server/data/posts.json', JSON.stringify(photos));
        res.status = 200;
        res.send("Post was removed");
    } else {
        res.status = 404;
        res.send("Error");
    }
})

app.post('/addPost', (req, res) => {
    let photos = JSON.parse(fs.readFileSync('server/data/posts.json'));
    let post = req.body;
    post.createdAt = new Date();
    photos.addPost = memory.addPost;
    if (photos.addPhotoPost(post)) {
        fs.writeFileSync('server/data/posts.json', JSON.stringify(photos));
        res.status = 200;
        res.send("Post was added");
    } else {
        res.status = 404;
        res.send("Error");
    }
})

app.put('/editPost/:id', (req, res) => {
    let photos = JSON.parse(fs.readFileSync('server/data/posts.json'));
    let post = req.body;
    let id = req.params.id;
    console.log();
    photos.editPost = memory.editPost;
    if (photos.editPhotoPost(id, post)) {
        fs.writeFileSync('server/data/posts.json', JSON.stringify(photos));
        res.status = 200;
        res.send("Post was changed");
    } else {
        res.status = 404;
        res.send("Error");
    }
})

app.listen(3000, () => {
    console.log('Server is running...');
});

app.use((req, res) => {
    res.sendFile('Error.html', {root: 'public' });
});
