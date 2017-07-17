/*function comments(){

     var user_comments = $('#user_input').val();
   }

   function setup() {
     $("#submit_button").click();
   }

   $(document).ready(setup)*/
//
   function comments() {
      var user_comments = $('#user_input').val();
      $("#result").append('<div> Your comment: ' + user_comments + '</div>');
  console.log("got here") }

   function setup() {
      $("#submit_button").click(comments);

   }
   $(document).ready(setup)
