function myFunction(){
    var year =document.getElementById('year').value;
    var month =document.getElementById('month').value;
    var date =document.getElementById('date').value;
    var 
    if((date <=0 || date>31) || (month <=0 || month >12)){
        alert("Invalid Data, Please Check your month or date");
    }

}