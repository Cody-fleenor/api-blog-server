const Comment = require ('../models/Comments');

//Get all comments
const getComments = async (req, res) => {
    try{
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (err) {
        res.json({message: err})
    }
}
//Pull specific comment by ID
const getComment = async (req, res) => {
    try{
        const comment = await Comment.findById(req.params.id);
        res.status(200).json(comment);
    } catch (err) {
        res.json({message: err})
    }
}
//Create a new post
const createComment = (req, res) => {
    const comment = new Comment({
        description: req.body.description
    });
    comment.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch (err => {
        res.json({ message: err })
    })
}
//Update Comment Body
const editComment = async (req, res) => {
    try{
        const updatedComment = await Post.updateOne(
            { _id: req.params.id},
            {$set:{description: req.body.description}}
        );
        res.status(200).json(updatedComment);
    } catch {
        res.json({message: err});
    }
};
//Delete Comment by ID
const deleteComment = async (req, res) => {
    Comment.remove({_id: req.params.id})
};

module.exports = {
    getComments, getComment, createComment, editComment, deleteComment
}