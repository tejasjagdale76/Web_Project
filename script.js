function showForm(){

let form=document.getElementById("bookingForm");

form.style.display="block";

form.scrollIntoView({behavior:"smooth"});

}



document.getElementById("bookingForm").addEventListener("submit",function(event){

event.preventDefault();

let name=document.getElementById("name").value;
let guests=document.getElementById("guests").value;
let checkin = document.getElementById("checkin").value;
let checkout = document.getElementById("checkout").value;

if(name==="" || checkin==="" || checkout===""){

alert("Please fill all fields");
return;

}

let booking={
name:name,
guests:guests,
checkin:checkin,
checkout:checkout
};

let bookings=JSON.parse(localStorage.getItem("hotelBookings")) || [];

bookings.push(booking);

localStorage.setItem("hotelBookings",JSON.stringify(bookings));
this.submit();
alert("Booking Stored Successfully");

});