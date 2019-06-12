function na()
{
 var name;
 name=document.getElementById("name").value;
 if(name==null || name=="")
 	alert("Please write your username");
 else return true;

}

function pass()
{
var Password;
Password=document.getElementById("pw").value;
if(Password==null || Password=="")
	alert("Please write your Password");
else return true;
}


function check()
{na();
 pass();
 if(na() && pass())
{	na();
	pass();
	var passi;
 var username;
 passi=document.getElementById("pw").value;
 username=document.getElementById("name").value;
 if ( username == "hi" && passi== "1234"){
alert ("Login successfully");
window.location = "home.html"; // Redirecting to other page.
return false;
}
else alert("Invalid Password or Username");

}
}