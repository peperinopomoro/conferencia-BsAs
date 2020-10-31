$('body').scrollspy({ target: '#conf-nav',offset:50 });

// modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});


// collapse navbar when item clicked
$('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
});


let continuar = document.querySelector('#continue-btn');
let payButton = document.querySelector('#pay-button');

continuar.addEventListener('click', function(e){
  e.preventDefault();
});




//show date in modal title
const ticketModalHeader = document.getElementById('countdown');

// Set the date we're counting down to
let countDownDate = new Date("Dec 31, 2020 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

// Get today's date and time
let now = new Date().getTime();

// Find the distance between now and the count down date
let distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
ticketModalHeader.innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
clearInterval(x);
ticketModalHeader.innerHTML = "EXPIRED";
}
}, 1000);

// get qty tickets and display amount money

const precioUnitario = 500.0;
let t = document.querySelector('#qty-tickets');
let p = document.querySelector('#purchase-total');

p.textContent = parseInt(t.value) * precioUnitario;
t.addEventListener('input', ()=>{

p.textContent = parseInt(t.value) * precioUnitario;
});

// show pay ok modal after pay-button is clicked
let pb = document.querySelector('#pay-button');

pb.addEventListener('click', function() {
setTimeout(
    function() {
        $('#purchaseOK').modal('toggle');
     },
     0);
 });
