function myFunction(){
    var year =document.getElementById('year').value;
    var month =document.getElementById('month').value;
    var date =document.getElementById('date').value;
    var fullDate=year+"/"+month+"/"+date;
    var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    var gender =document.getElementById("gender").value;

    if((date <=0 || date>31) || (month <=0 || month >12)){
        alert("Invalid Data, Please Check your month or date");
    } else if

}