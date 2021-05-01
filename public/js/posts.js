$(document).ready(function () {
    $(".vote-up").submit(function (e) {
        e.preventDefault();

        var postId = $(this).data("id");
        console.log('Attempting to vote up.')
        $.ajax({
            type: "PUT",
            url: "posts/" + postId + "/vote-up",
            timeout: '10000',
            success: function (data) {
                console.log("voted up!");
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    $(".vote-down").submit(function (e) {
        e.preventDefault();

        var postId = $(this).data("id");
        console.log('Attempting to vote down.')
        $.ajax({
            type: "PUT",
            url: "posts/" + postId + "/vote-down",
            timeout: '10000',
            success: function (data) {
                console.log("voted down!");
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
});