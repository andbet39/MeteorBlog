Posts = new Mongo.Collection('posts');


Meteor.methods({
    addComment: function (post_id,comment) {

        console.log('addComment method');
        posts = Posts.findOne(post_id);

        var comments = posts.comments;

        comments.push(comment);

        Posts.update(post_id,{  $set:{  comments:comments}}

        )

    }}
);