function comments() {
   var user_comments = $('#user_input').val();
   $("#result").append('<div> Your comment: ' + user_comments + '</div>');
}

function setup() {
   $("#submit_button").click(comments);

}
$(document).ready(setup)
