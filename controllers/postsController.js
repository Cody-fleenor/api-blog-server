const Post = require ('../models/Posts');

//Pull  all posts
const getPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.json({message: err})
    }
}

//Pull specific post by ID
const getPost = async (req, res) => {
    try{
        const post = await Post.findById({_id: req.params.id});
        res.status(200).json(post);
    } catch (err) {
        res.json({message: err})
    }
}

//Create a new post
const createPost = (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch (err => {
        res.json({ message: err })
    })
}

//Update Post 
const editPost = async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.id},
            {$set:{title: req.body.title}},
            {$set:{description: req.body.description}}
        );
        res.status(200).json(updatedPost);
    } catch {
        res.json({message: err});
    }
};

//Delete Post by ID
const deletePost = async (req, res) => {
    Post.remove({_id: req.params.id})
};

module.exports = {
    getPosts, getPost, createPost, editPost, deletePost
}