function show_para_1(){
   var para_1_data=[]
   for(var i=1;i<=5;i++){
       para_1_data.push(document.getElementById("input_"+i).value)
   }
   document.getElementById("showpara_1").innerHTML=para_1_data.join(".")
}
function show_para_2(){
    var para_2_data=[]
    for(var i=1;i<=5;i++){
        para_2_data.push(document.getElementById("second_input_"+i).value)
    }
    document.getElementById("showpara_2").innerHTML=para_2_data.join(".")
 }



