//var format="/.+@.+/"; 

function validatename()
{
	var name;
	var i=0,n=0;
	name=document.getElementById("name").value;
	l=name.length;
	if(name==null || name=="")
	{
		alert("Please write your name");
		//return false;
	}
	else 
	     {  for(i=0;i<l;i++)
	     	{if(name.charAt(i)==" " || name.charAt(i)=="$" || name.charAt(i)=="@")
             n++;
	        }
			if(n>0)
			alert("Name should not contain special chracters and spaces");
			//return false;
		 else return true;
		 }
		 
 } 
		
	
		//}
    function   validatepass()
		{ var pass;
          pass=document.getElementById("pw").value;
			if(pass==null || pass=="")
			 {alert("Please write your password");
              // return false;
		      }
			else if(pass.length<=6)
		         {
			       alert("Password should be greater than 6 letters");
		          // return false;
		         }
		
	             else if(pass.length>=6)
	               {
		              var n=0,c=0,l,i=0,s=0;
		              l=pass.length;
		              for(i=0;i<l;i++)
		              {
			           if(pass.charAt(i)>='0' && pass.charAt(i)<='9')
				        n++;

			           if(pass.charAt(i)>='a' && pass.charAt(i)<='z')
				       c++;
		               if(pass.charAt(i)>='A' && pass.charAt(i)<='Z')
		    	       c++;
		    	       if(pass.charAt(i)=="@" || pass.charAt(i)=="#" || pass.charAt(i)=="$" ||pass.charAt(i)=="&")
		               s++;
		              }
		              if(n==0 || c==0 || s==0)
		    	      {alert("Password must have character ,number and one special character");
		               // return false;
		              }
		              else return true;
		           }
		          
	    } 
           	
	
      function vemail()
           {  var email;
           	  email=document.getElementById("email");
           	  var format=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              	if( email=="" || email==null )
             		{alert("Please write your email ID");
             	    //return false;
             	    }
             	else if(!format.test(email.value))
             	{alert("Invalid email id");

             	}
             	   
             	else return true;       
            }
           
  
      function validatemob() 
     {  var mob;
     	mob=document.getElementById("number").value;
     	if(mob==null ||mob=="")
     	{
     		alert("Please write your mobile number");
           // return false;
     	}
        else if(mob.length!=10)
        		{alert("Please enter 10 digit mobile number");
             //   return false;
                }  
        else return true;              
      }
      
     function validategen() 
     { 
     	if(document.getElementById('genderm').checked) {
           return true;
       }else if(document.getElementById('genderw').checked) {
       return true;  
       }
       else {alert("Please choose gender");
         //    return false;
             }
     }

function samepass()
{
	var sm=document.getElementById("pw").value;
	var sm2=document.getElementById("pw2").value;
	if(sm2==null || sm2=="")
		alert("Please fill in the blank");
	else if(sm===sm2)
		return true;
	else alert("Password do not match");
}


function validate()
{
	validatename();
	vemail();
	validatemob();
	validategen();
	validatepass();
    if(validatename() && validatepass() && vemail() && validatemob() && validategen() )
   {
   	window.location = "login.html";
    return false;
   }
  else alert("Fill all the fields!");
}

    

	
