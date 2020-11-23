var mta=document.getElementById("id1")
function abc(obj)
{
    var jspm=obj.innerHTML;
    if(jspm=="=")
        {
    mta.innerHTML=eval(mta.innerHTML)
        }
    else if (jspm=="AC")
        {
            mta.innerHTML="0";
            
        }
    else if(jspm=="DEL")
    {
        mta.innerHTML=mta.innerHTML.slice(0,-1)
    }
    else
    {
if(mta.innerHTML=="0")
            {
                mta.innerHTML=jspm;
            }
        else{
            
            mta.innerHTML=mta.innerHTML+jspm;
        }
    }
        
}