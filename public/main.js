$(document).ready(() =>{
    $('#sub').on('click',()=>{
   var name1=$("#fn").val()
   var phoneNumber1=$("#ph").val()
   var email1=$("#em").val()
   if(name1.length>0&&String(phoneNumber1).length>0&&email1.length>0){
       console.log({name:name1,phoneNumber:phoneNumber1,email:email1})
     $("#form").addClass("d-none")
     $("#alert").removeClass("d-none")
     $.post({
         traditional:true,
         url:"/candidatelist",
         contentType:'application/json',
         data:JSON.stringify({name:name1,phoneNumber:phoneNumber1,email:email1}),
         dataType:'json',
         success:function(response){console.log(response)}})
     }
    })
    $("#log").on("click",()=>{
        $("#form").addClass("d-none")
        $("#form2").removeClass("d-none")     
    })
    $("#alert").on("click",()=>{
        $("#alert").addClass("d-none")
        $("#form2").removeClass("d-none")  
      })
      $('#sub1').on('click',()=>{
      $.get("/candidatelist",
      (data,status)=>{
          console.log(status)
         // console.log(data[0])
          var arrdata=data
          var name2=$("#fn1").val()
          var email2=$("#em1").val()
          //console.log(arrdata)
          //console.log([name2,email2])
          for(var i=0;i<arrdata.length;i++){
            if(arrdata[i].name===name2&&arrdata[i].email===email2)  
            {
            $("#form2").addClass("d-none")
            $("#quiz").removeClass("d-none")
            $("#before").addClass("d-none")
            }
            else{
                $("#before").text("Error! Your details could not be found, click on register to provide your details")
            }
          }

      }) 
      })
})