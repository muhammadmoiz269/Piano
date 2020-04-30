var white=document.querySelector(".whiteset")
var black=document.querySelector(".blackset")

window.addEventListener("click",function(extrainfo)
{
    
    if(Array.from(extrainfo.target.classList).includes('t'))
    {

        extrainfo.target.classList.add("t-add")

    }
    if(Array.from(extrainfo.target.classList).includes('b'))
    {
        extrainfo.target.classList.add("b-add")
    }
    if(Array.from(extrainfo.target.classList).includes('s'))
    {
        extrainfo.target.classList.add("s-add")
    }

    if(Array.from(extrainfo.target.id))
    {
        const audios = document.querySelector(`audio[data-key="${extrainfo.target.id}"]`);
        if(!audios) return;
        audios.currentTime=0;
        audios.play();
        // console.log(extrainfo.target.id)
        
        
    }
   
  
    
})
window.addEventListener("mouseover",function(extrainfo)
{
    
    extrainfo.target.classList.remove("t-add")
    extrainfo.target.classList.remove("s-add")
    extrainfo.target.classList.remove("b-add")

    

})
window.addEventListener("keydown",function(e)
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    // console.log(e.keyCode)
    if(e.keyCode==192)
    {
        document.querySelector(".b2").classList.add("b-add")

    }
    if(e.keyCode==49)
    {
        document.querySelector(".b4").classList.add("s-add")

    }
    if(e.keyCode==50)
    {
        document.querySelector(".b6").classList.add("b-add")

    }
    if(e.keyCode==51)
    {
        document.querySelector(".b8").classList.add("s-add")

    }
    if(e.keyCode==52)
    {
        document.querySelector(".b10").classList.add("b-add")

    }
    if(e.keyCode==53)
    {
        document.querySelector(".b12").classList.add("s-add")

    }
    if(e.keyCode==54)
    {
        document.querySelector(".b14").classList.add("b-add")

    }
    if(e.keyCode==55)
    {
        document.querySelector(".b16").classList.add("s-add")

    }
    if(e.keyCode==56)
    {
        document.querySelector(".b18").classList.add("b-add")

    }
    if(e.keyCode==57)
    {
        document.querySelector(".b20").classList.add("s-add")


    }
    if(e.keyCode==48)
    {
        document.querySelector(".b22").classList.add("b-add")

    }
    if(e.keyCode==189)
    {
        document.querySelector(".b24").classList.add("s-add")

    }
    if(e.keyCode==187)
    {
        document.querySelector(".b26").classList.add("b-add")

    }

    //for alphabets
    if(e.keyCode==81)
    {
        document.querySelector(".t1").classList.add("t-add")

    }
    if(e.keyCode==87)
    {
        document.querySelector(".t2").classList.add("t-add")

    }
    if(e.keyCode==69)
    {
        document.querySelector(".t3").classList.add("t-add")

    }
    if(e.keyCode==82)
    {
        document.querySelector(".t4").classList.add("t-add")

    }
    if(e.keyCode==84)
    {
        document.querySelector(".t5").classList.add("t-add")

    }
    if(e.keyCode==89)
    {
        document.querySelector(".t6").classList.add("t-add")

    }
    if(e.keyCode==85)
    {
        document.querySelector(".t7").classList.add("t-add")

    }
    if(e.keyCode==73)
    {
        document.querySelector(".t8").classList.add("t-add")

    }
    if(e.keyCode==79)
    {
        document.querySelector(".t9").classList.add("t-add")

    }
    if(e.keyCode==80)
    {
        document.querySelector(".t10").classList.add("t-add")

    }
    if(e.keyCode==65)
    {
        document.querySelector(".t11").classList.add("t-add")

    }
    if(e.keyCode==83)
    {
        document.querySelector(".t12").classList.add("t-add")

    }
    if(e.keyCode==68)
    {
        document.querySelector(".t13").classList.add("t-add")

    }
    if(e.keyCode==70)
    {
        document.querySelector(".t14").classList.add("t-add")

    }
    if(e.keyCode==71)
    {
        document.querySelector(".t15").classList.add("t-add")

    }
    if(e.keyCode==72)
    {
        document.querySelector(".t16").classList.add("t-add")

    }
    if(e.keyCode==74)
    {
        document.querySelector(".t17").classList.add("t-add")

    }
    if(e.keyCode==75)
    {
        document.querySelector(".t18").classList.add("t-add")

    }
    if(e.keyCode==76)
    {
        document.querySelector(".t19").classList.add("t-add")

    }
    if(e.keyCode==77)
    {
        document.querySelector(".t20").classList.add("t-add")

    }
    if(e.keyCode==78)
    {
        document.querySelector(".t21").classList.add("t-add")

    }
    if(e.keyCode==66)
    {
        document.querySelector(".t22").classList.add("t-add")

    }
    if(e.keyCode==86)
    {
        document.querySelector(".t23").classList.add("t-add")

    }
    if(e.keyCode==67)
    {
        document.querySelector(".t24").classList.add("t-add")

    }
    if(e.keyCode==88)
    {
        document.querySelector(".t25").classList.add("t-add")

    }
    if(e.keyCode==90)
    {
        document.querySelector(".t26").classList.add("t-add")

    }
  
   
    

  

    

})
window.addEventListener("keyup",function(e)
{
    document.querySelector(".b2").classList.remove("b-add")
    document.querySelector(".b4").classList.remove("s-add")
    document.querySelector(".b6").classList.remove("b-add")
    document.querySelector(".b8").classList.remove("s-add")
    document.querySelector(".b10").classList.remove("b-add")
    document.querySelector(".b12").classList.remove("s-add")
    document.querySelector(".b14").classList.remove("b-add")
    document.querySelector(".b16").classList.remove("s-add")
    document.querySelector(".b18").classList.remove("b-add")
    document.querySelector(".b20").classList.remove("s-add")
    document.querySelector(".b22").classList.remove("b-add")
    document.querySelector(".b24").classList.remove("s-add")
    document.querySelector(".b26").classList.remove("b-add")


    //for alphabets
    document.querySelector(".t1").classList.remove("t-add")
    document.querySelector(".t2").classList.remove("t-add")
    document.querySelector(".t3").classList.remove("t-add")
    document.querySelector(".t4").classList.remove("t-add")
    document.querySelector(".t5").classList.remove("t-add")
    document.querySelector(".t6").classList.remove("t-add")
    document.querySelector(".t7").classList.remove("t-add")
    document.querySelector(".t8").classList.remove("t-add")
    document.querySelector(".t9").classList.remove("t-add")
    document.querySelector(".t10").classList.remove("t-add")

    document.querySelector(".t11").classList.remove("t-add")
    document.querySelector(".t12").classList.remove("t-add")
    document.querySelector(".t13").classList.remove("t-add")
    document.querySelector(".t14").classList.remove("t-add")
    document.querySelector(".t15").classList.remove("t-add")
    document.querySelector(".t16").classList.remove("t-add")
    document.querySelector(".t17").classList.remove("t-add")
    document.querySelector(".t18").classList.remove("t-add")
    document.querySelector(".t19").classList.remove("t-add")

    document.querySelector(".t20").classList.remove("t-add")
    document.querySelector(".t21").classList.remove("t-add")
    document.querySelector(".t22").classList.remove("t-add")
    document.querySelector(".t23").classList.remove("t-add")
    document.querySelector(".t24").classList.remove("t-add")
    document.querySelector(".t25").classList.remove("t-add")
    document.querySelector(".t26").classList.remove("t-add")
   
    

})