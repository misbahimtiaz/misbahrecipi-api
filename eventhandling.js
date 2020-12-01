  
$(function(){
    $(".del").click(del);
    $(".add").click(add);
    $(".rese").click(rese);
    $(".update").click(update);
    $(".up").prop("disabled", true);
});




function del(){   //to delete the row which is created in html pprice
        $('#mytable').on('click', ".del", function(){
        $(this).closest ('tr').remove ();
        });
}

function add(){    //to add a row 
    var product=$("#product").val();
    var addtocart=$("input[product='val']:checked").val();
    var price=$("#price").val();
    var city=$("#city").val();


    if(product!='' && addtocart !=null && price!=null && city!='') //not add untill add all values
    {
        $("#mytable").append("<tr>"+"<td class='product'>"+product+"</td>"+"<td class='addtocart'>"+addtocart+"</td>"+"<td class='price'>"+price+"</td>"+"<td class='city'>"+city+"</td>"+"<td>"+'<button type="button" class="btn btn-warning update">Update</button> <button type="button" class="btn btn-danger del">Delete</button>'+"</td>"+"</tr>");
        
        $("#mytable").off().on('click',".del", function(){  //event binding of del function
            
            $(this).closest ('tr').remove ();
        });

        $("#mytable").off("click",".update").on("click",".update",function(){              //evet binding of update function
            var product=$(this).closest ('tr').find(".product").text();
            var price=$(this).closest ('tr').find(".price").text();
            var city=$(this).closest ('tr').find(".city").text();
            var addtocart=$(this).closest ('tr').find(".addtocart").text();
            var index=$(this).closest ('tr').index();


                $("#product").val(product);
                $("#price").val(price);
                $("#city").val(city);
                $("input[product=val][value=" + addtocart + "]").prop('checked', true); 

                $(".add").prop("disabled", true);
                $(".up").removeAttr('disabled');
        
                $(".up").off().on("click",function(){
                    product=$("#product").val();
                    addtocart=$("input[product='val']:checked").val();
                    price=$("#price").val();
                    city=$("#city").val();

                    var x = document.getElementById("mytable").rows[index+1].cells;
                    x[0].innerHTML=product;
                    x[1].innerHTML=addtocart;
                    x[2].innerHTML=price;
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
    $("#product").val("");
    $("input[product='val']").prop("checked",false);
    $("#price").val("");
    $("#city").val("");
}

function update(){                                        //update function
    var product=$(this).closest ('tr').find(".product").text();
    var price=$(this).closest ('tr').find(".price").text();
    var city=$(this).closest ('tr').find(".city").text();
    var addtocart=$(this).closest ('tr').find(".addtocart").text();
    var index=$(this).closest ('tr').index();

        $("#product").val(product);
        $("#price").val(price);
        $("#city").val(city);
        $("input[product=val][value=" + addtocart + "]").prop('checked', true);  
    
        $(".add").prop("disabled", true);
        $(".up").removeAttr('disabled');
        
        $(".up").on("click",function(){
            console.log("I am in this");
            var product=$("#product").val();
            var addtocart=$("input[product='val']:checked").val();
            var price=$("#price").val();
            var city=$("#city").val();

            var x = document.getElementById("mytable").rows[index+1].cells;
            x[0].innerHTML=product;
            x[1].innerHTML=addtocart;
            x[2].innerHTML=price;
            x[3].innerHTML=city;

            $(".add").removeAttr('disabled');
            $(".up").prop("disabled", true);
        });
}
