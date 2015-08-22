$(document).ready(function(){
$("#submit").click(function(){
var f_name = $("#f_name").val();
var l_name = $("#l_name").val();
var email = $("#email").val();
var zip = $("#zip").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'f_name='+ f_name + '&l_name='+ l_name + '&email='+ email + '&zip='+ zip;
if(f_name==''||l_name==''||email==''||zip=='')
{
alert("Please Fill All Fields");
}
else
{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "../php/email.php",
data: dataString,
cache: false,
success: function(result){
alert(result);
}
});
}
return false;
});
});