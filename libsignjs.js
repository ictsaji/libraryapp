
function validatesign()
  {   


     //variable declarations for pattern check
     var fstname=document.getElementById("fname");
     var lstname=document.getElementById("lname");
     var email=document.getElementById("eml");
     var phno=document.getElementById("phn");
     var cty=document.getElementById("city");
     var cntry=document.getElementById("country");
     var crpas=document.getElementById("crpass");
     var cfpas=document.getElementById("cfpass");
     var passpow=document.getElementById("power");
     var db=document.getElementById ("dob");
     
    
     //pattern definitions
     var fnameexp=/^([A-Za-z]{1,20})$/;
     var lnameexp=/^([A-Za-z]{1,20})$/;                          
     var emlexp=/^([\w\.\-]+)@([a-z]{2,20})\.([a-z]{2,5})(\.[a-z]{2,4})?$/;
     var phnexp=/^([0-9]{3})[\-.]?([0-9]{3})[\-.]?([0-9]{4})$/;
     var dbexp=/^([0-9]{2})[-]([0-9]{2})[-]([0-9]{4})$/;
     var cityexp=/^([A-Za-z]{1,20})$/;
     var countryexp=/^([A-Za-z]{1,20})$/;
     var crpassexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,20}$/;
     var cfpassexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,20}$/;
     
     //javascript validation of form

      // nametest1();
      // function nametest1()
      // {

          if (fstname.value=="" ) 
            { 
                alert("Enter a valid firstname ");
                document.getElementById ("fname").style.borderColor="red";
                document.getElementById ("fname").focus();
              
                return false;}
              
              else if (!fnameexp.test(fstname.value) )
                      { alert("fisrt name  not entered properly");
                        
                        return false;}
                 else 
                      { 
                       return true; }

      
    //   }


    //  nametest2();
    //  function nametest2()
    //  {                  

                       if ( lstname.value=="" ) 
                       { 
                           alert("Enter a valid last name");
                           
                           document.getElementById ("lname").style.borderColor="red";
                           
                           document.getElementById ("lname").focus();
                           return false;}
                         
                      else if (!lnameexp.test(lstname.value))
                                 { alert(" last name not entered properly");
                                
                                   return false;}
                            else 
                                 { 
                                  return true; }



       }

     //email validation
     

        emailtest();
     function emailtest()
      {
               if (!emlexp.test(email.value)) { 
                alert("enter a proper email in format");
                document.getElementById ("eml").style.borderColor="red";
                           
                document.getElementById ("eml").focus();
                
                return false;}
                 else 
                 { 
                       return true; }
       }
     
      

     //mobile validation
        phntest();
       function phntest()
      {
               if (!phnexp.test(phno.value)) { 
                alert("enter a proper mobile in format");
                document.getElementById ("phn").style.borderColor="red";
                           
                document.getElementById ("phn").focus();
                
                return false;}

                 else 
                 { 
                       return true; }
      }
     

      //date of birth validation
        dbtest();
      function dbtest()
      {
               if (!dbexp.test(db.value)) {
                alert("enter a date of birth in format");
                document.getElementById ("dob").style.borderColor="red";
                           
                document.getElementById ("dob").focus(); 
       
                return false;}
                 else 
                 { 
                       return true; }
      }
     
      citytest();
      function citytest()
      {
               if (!cityexp.test(cty.value)) { 
                alert("enter a proper city name ");
                document.getElementById ("city").style.borderColor="red";
                           
                document.getElementById ("city").focus();
                 
                
                return false;}

                 else 
                 { 
                       return true; }
      }


      countrytest();
      function countrytest()
      {
               if (!countryexp.test(cntry.value)) {
                alert("enter a propercountry name");
                document.getElementById ("country").style.borderColor="red";
                           
                document.getElementById ("country").focus();
                                                
                return false;}

                 else 
                 { 
                       return true; }
      }
     
     //password validation
      passtest1();
     function passtest1()
      {
               if (!crpassexp.test(crpas.value)) { 
                alert("enter a proper password in format");
                document.getElementById ("crpass").style.borderColor="red";
                           
                document.getElementById ("crpass").focus();  
      
                return false;}
                 
                else 
                 { 
                       return true; }
     
      }


       passtest2();
      function passtest2()
      {
               if (!cfpassexp.test(cfpas.value)) { 
                alert("confirm  the same  password in the same format");
                document.getElementById ("cfpass").style.borderColor="red";
                           
                document.getElementById ("cfpass").focus();
             
                return false;}

                 else 
                 { 
                       return true; }
     
      }
     
     //password strength
     if (crpas.value.length<5) { passpow.innerText="password is weak";
                               passpow.style.borderColor="red";
                               passpow.style.color="red";
       
                               }
      else if (crpas.value.length>=5 && crpas.value.length<10 ) 
           { passpow.innerText="password is moderate";
                               passpow.style.borderColor="orange";
                               passpow.style.color="orange";
       
          }
     else   { passpow.innerText="password is strong";
                               passpow.style.borderColor="green";
                               passpow.style.color="green";
            }

      

        passtest3();
        function passtest3()
        { 
            if (crpas.value == cfpas.value)
              { 
                return true;}
  
                    else 
                    {  alert("confirm  the same  password in the same format");
                      document.getElementById ("cfpass").style.borderColor="red";
                              
                      document.getElementById ("cfpass").focus();  
            
                      return false; }
           
        }

        
       
 
     
  }
     