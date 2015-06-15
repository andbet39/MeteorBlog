/**
 * Created by andreaterzani on 13/06/15.
 */
Meteor.subscribe('posts');

Template.post_list.helpers({
    posts: function() {
        return Posts.find();
    }
});

Template.comment_form.events({
    'submit .comment_form': function (event) {

        event.preventDefault();
        console.log('add comment to : ' + this._id);

        var content = event.target.content.value;
        var comment = {'comment':content,created:new Date()};

        Meteor.call('addComment',this._id,comment);


    }
});