/*eslint-disable */

let kits = [
    {
        src: "kit-pmm",
        type: "drum",
        title: "PMM (Drum Kit)",
        price: "$25.00"
    },
    {
        src: "kit-aquarela",
        type: "plugin-expansion",
        title: "AQUARELA (Omnisphere Bank)",
        price: "$25.00"
    },
    {
        src: "kit-memeal",
        type: "plugin-expansion",
        title: "MEMEAL (ElectraX Bank)",
        price: "$25.00"
    },
    {
        src: "kit-infinite",
        type: "midi-kit",
        title: "INFINITE (Midi Kit)",
        price: "$25.00"
    },
    {
        src: "kit-astral",
        type: "melody-pack",
        title: "ASTRAL (Melody Pack)",
        price: "$25.00"
    },
];

$( document ).ready(function(){
	if ($(window).width() < 750) {
		$(".pmm-nav").removeClass("justify-content-end");
    	$(".pmm-nav").addClass("justify-content-center");
	}
});

$(window).resize(function() {
    if ($(window).width() < 750) {

        $(".menu").removeClass("col-md-8");
        $(".menu").addClass("col-md-12");
        $(".pmm-nav").removeClass("justify-content-end");
        $(".pmm-nav").addClass("justify-content-center");

    } else {

        $(".menu").addClass("col-md-8");
        $(".menu").removeClass("col-md-12");
        $(".pmm-nav").removeClass("justify-content-center");
        $(".pmm-nav").addClass("justify-content-end");
      }
});

setTimeout(function() {
    $('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:3,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
})
}, 10);

setTimeout(function() {
    $('.kit-content').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:4,
    margin:15,
    stagePadding:30,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
})
}, 5);

kits.forEach( function(kit) {
    $(".drum-kit-container").append(`<div><div class="item kit-item"><a href="kits/${kit.type}/${kit.src}.html"><img class="kit-img" src="img/${kit.src}.jpg"></a></div><a><h4 class="price-kit boxed">${kit.title}</h4></a><span class="price-kit">${kit.price}</span></div>`);
});

kits.forEach( function(kit) {
    if (kit.type === "drum") {
        $("#Drum-kit").append(`<div><div class="item page-kit-item"><a href="kits/${kit.type}/${kit.src}.html"><img class="kit-img" src="img/${kit.src}.jpg"></a></div><a><h4 class="price-kit boxed">${kit.title}</h4></a><span class="price-kit">${kit.price}</span></div>`);
    } else if (kit.type === "plugin-expansion") {
        $("#Plugin-expansion").append(`<div><div class="item page-kit-item"><a href="kits/${kit.type}/${kit.src}.html"><img class="kit-img" src="img/${kit.src}.jpg"></a></div><a><h4 class="price-kit boxed">${kit.title}</h4></a><span class="price-kit">${kit.price}</span></div>`);
    } else if (kit.type === "midi-kit") {
        $("#Midi-kit").append(`<div><div class="item page-kit-item"><a href="kits/${kit.type}/${kit.src}.html"><img class="kit-img" src="img/${kit.src}.jpg"></a></div><a><h4 class="price-kit boxed">${kit.title}</h4></a><span class="price-kit">${kit.price}</span></div>`);
    } else if (kit.type === "melody-pack") {
        $("#Melody-pack").append(`<div><div class="item page-kit-item"><a href="kits/${kit.type}/${kit.src}.html"><img class="kit-img" src="img/${kit.src}.jpg"></a></div><a><h4 class="price-kit boxed">${kit.title}</h4></a><span class="price-kit">${kit.price}</span></div>`);
    }
});