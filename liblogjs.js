 
  
  
  
  
  function validlogin()

  {
      var ln=document.getElementById ("username").value;
      var lp=document.getElementById ("password").value;
      var storename="lib@123";
      var storepass="LIB@123";

      if ( (ln==storename) && (lp==storepass))
      { alert("login successful");
      return true;
    
      }

      else
      { alert (" invalid username or password");
         return false;

      }
      
    }
        

      