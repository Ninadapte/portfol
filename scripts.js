var goneleft = false;
var profile_top = 100;
function scrolled()
{
    var e =  document.getElementById("ninad");
    
    var rect =  e.getBoundingClientRect()
    if (rect.top  ==profile_top && goneleft!=true)
    {
        e.style.visibility = visible;
        e.animate(
            [
                {
                    width: "150px",
                    height: "150px",
                    marginLeft: "45%"
                    
                },
                {
                    width: "50px",
                    height: "50px",
                    marginLeft: "50px",
                    
                }],
                {duration: 600}
            
        );
        e.style.width = 50;
        e.style.height = 50;
       
        e.style.marginLeft = 50;
        goneleft = true;
    }
     if(rect.top  > profile_top+3 && goneleft!=false)
    {
        
        e.animate(
            [
                {
                    width: "50px",
                    height: "50px",
                    marginLeft: "50px"
                    
                },
                {
                    width: "150px",
                    height: "150px",
                    marginLeft: "45%"
                }],
                {duration: 600}
            
        );
        
        e.style.width = 150;
        e.style.height = 150;
        e.style.marginLeft = "45%";
      
        goneleft = false;
        

    }
        
    }


