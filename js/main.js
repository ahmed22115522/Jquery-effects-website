$(document).ready(function() {
    let width = $('#slider').innerWidth()
    if ($('#slider').css('left') == '0px' ) {
        $('#slider').animate({'left' : `-${width}px`}, 1000)
        $('#sideBar').animate({'marginLeft' : `0px`}, 1000)
        $('#sideWord').animate({'marginLeft' : `0px`}, 1000)
    }
    $('.loading-screen').animate({'display' : 'none'}, 1000, () => {
        $(".loading-screen").addClass("d-none")
    })
});

$('#sideBar').click(() => {
    let width = $('#slider').innerWidth()
    if ($('#slider').css('left') == '0px' ) {
        $('#slider').animate({'left' : `-${width}px`}, 1000)
        $('#sideBar').animate({'marginLeft' : `0px`}, 1000)
        $('#sideWord').animate({'marginLeft' : `0px`}, 1000)
    }
    else{
        $('#slider').animate({'left' : `0px`}, 1000)
        $('#sideBar').animate({'marginLeft' : `${width}px`}, 1000)
        $('#sideWord').animate({'marginLeft' : `${width}px`}, 1000)
    }
})
$('#slider i').click(() => {
    let width = $('#slider').innerWidth()
    if ($('#slider').css('left') == '0px' ) {
        $('#slider').animate({'left' : `-${width}px`}, 1000)
        $('#sideBar').animate({'marginLeft' : `0px`}, 1000)
        $('#sideWord').animate({'marginLeft' : `0px`}, 1000)
    }
    else{
        $('#slider').animate({'left' : `0px`}, 1000)
        $('#sideBar').animate({'marginLeft' : `${width}px`}, 1000)
        $('#sideWord').animate({'marginLeft' : `${width}px`}, 1000)
    }
})

$('.singerName').on('click', (e) => {
    let selected = $(e.target).next()[0]
    $(selected).slideToggle();
})

const countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

const x = setInterval(function() {


  const now = new Date().getTime();
    

  const distance = countDownDate - now;
    

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("days").innerHTML = days + 'D'
  document.getElementById("hours").innerHTML = hours + 'H'
  document.getElementById("minutes").innerHTML = minutes + 'M'
  document.getElementById("seconds").innerHTML = seconds + 'S'
    
}, 1000);

$('#comment').on('keyup', (e) => {
    let currentLength = e.currentTarget.value.length
    let maxCharcters = e.target.maxLength
    let charRemaining = maxCharcters - currentLength
    if (charRemaining == 0) {
        $('#allChar').html('<span class="fs-4">No <span class="fs-6">Charcters Remaining</span></span>')
        $('#allChar').addClass("text-danger")
    }
    else{
        $('#char').html(charRemaining)
        $('#allChar').html(`<span id="char" class="fs-4 text-danger fw-bold">${charRemaining}</span>  Charcters remaining`)
        $('#allChar').removeClass("text-danger")
        
    }
})