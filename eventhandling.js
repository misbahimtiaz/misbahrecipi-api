$(function(){
    $(".del").click(del);
    $(".add").click(add);
    $(".rese").click(rese);
    $(".update").click(update);
    $(".up").prop("disabled", true);
});




function del(){   //to delete the row which is created in html page
        $('#mytable').on('click', ".del", function(){
        $(this).closest ('tr').remove ();
        });
}

function add(){    //to add a row 
    var name=$("#name").val();
    var gender=$("input[name='val']:checked").val();
    var age=$("#age").val();
    var city=$("#city").val();


    if(name!='' && gender!=null && age!=null && city!='') //not add untill add all values
    {
        $("#mytable").append("<tr>"+"<td class='name'>"+name+"</td>"+"<td class='gender'>"+gender+"</td>"+"<td class='age'>"+age+"</td>"+"<td class='city'>"+city+"</td>"+"<td>"+'<button type="button" class="btn btn-warning update">Update</button> <button type="button" class="btn btn-danger del">Delete</button>'+"</td>"+"</tr>");
        
        $("#mytable").off().on('click',".del", function(){  //event binding of del function
            
            $(this).closest ('tr').remove ();
        });

        $("#mytable").off("click",".update").on("click",".update",function(){              //evet binding of update function
            var name=$(this).closest ('tr').find(".name").text();
            var age=$(this).closest ('tr').find(".age").text();
            var city=$(this).closest ('tr').find(".city").text();
            var gender=$(this).closest ('tr').find(".gender").text();
            var index=$(this).closest ('tr').index();


                $("#name").val(name);
                $("#age").val(age);
                $("#city").val(city);
                $("input[name=val][value=" + gender + "]").prop('checked', true); 

                $(".add").prop("disabled", true);
                $(".up").removeAttr('disabled');
        
                $(".up").off().on("click",function(){
                    name=$("#name").val();
                    gender=$("input[name='val']:checked").val();
                    age=$("#age").val();
                    city=$("#city").val();

                    var x = document.getElementById("mytable").rows[index+1].cells;
                    x[0].innerHTML=name;
                    x[1].innerHTML=gender;
                    x[2].innerHTML=age;
                    x[3].innerHTML=city;
        
                    $(".add").removeAttr('disabled');
                    $(".up").prop("disabled", true);
                });

        });
        
    }
    else{
        alert("Please fill whole form to add data");
    }
}

function rese(){                                //reset form values' function
    $("#name").val("");
    $("input[name='val']").prop("checked",false);
    $("#age").val("");
    $("#city").val("");
}

function update(){                                        //update function
    var name=$(this).closest ('tr').find(".name").text();
    var age=$(this).closest ('tr').find(".age").text();
    var city=$(this).closest ('tr').find(".city").text();
    var gender=$(this).closest ('tr').find(".gender").text();
    var index=$(this).closest ('tr').index();

        $("#name").val(name);
        $("#age").val(age);
        $("#city").val(city);
        $("input[name=val][value=" + gender + "]").prop('checked', true);  
    
        $(".add").prop("disabled", true);
        $(".up").removeAttr('disabled');
        
        $(".up").on("click",function(){
            console.log("I am in this");
            var name=$("#name").val();
            var gender=$("input[name='val']:checked").val();
            var age=$("#age").val();
            var city=$("#city").val();

            var x = document.getElementById("mytable").rows[index+1].cells;
            x[0].innerHTML=name;
            x[1].innerHTML=gender;
            x[2].innerHTML=age;
            x[3].innerHTML=city;

            $(".add").removeAttr('disabled');
            $(".up").prop("disabled", true);
        });
}


