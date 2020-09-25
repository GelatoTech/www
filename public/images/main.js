//responsive nav
$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.alert .delete') || []).forEach(($delete) => {
      $notification = $delete.parentNode;

      $delete.addEventListener('click', () => {
          $notification.parentNode.removeChild($notification);
      });
  });
});
//owl carousel
jQuery(document).ready(function($) {
  // smooth scrolling
  $("a").click(function() {
      $("html, body").animate({
              scrollTop: $($.attr(this, "href")).offset().top
          },
          500
      );
      return false;
  });


  ("use strict");
  //  TESTIMONIALS CAROUSEL HOOK
  $(".owl-carousel").owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: false,
      autoplayTimeout: 4000,
      smartSpeed: 950,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2
          },
          1170: {
              items: 3
          }
      }
  });
});

//pricing js

function myFunction() {
  var chooseIssue = document.getElementById("select-issue").value;
  var chooseDeviceModel = document.getElementById("select-device-model").value;
  var priceTitle = document.getElementById("total-price-text");
  var warrantyText = document.getElementById("warranty-text");
  var repairtimeText = document.getElementById("repairtime-text");


  var deviceDictionary = {
      iphones: {
          iphone6: {
              screen: {
                  price: "Up-front Price $75",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $50",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $50",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $160-$200",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone6s: {
              screen: {
                  price: "Up-front Price $85",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $50",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $50",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $160-$200",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone6plus: {
              screen: {
                  price: "Up-front Price $85",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $50",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $50",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $160-$200",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone6splus: {
              screen: {
                  price: "Up-front Price $90",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $180-$240",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone7: {
              screen: {
                  price: "Up-front Price $90",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $180-$240",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone7plus: {
              screen: {
                  price: "Up-front Price $109",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $200-$250",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone8: {
              screen: {
                  price: "Up-front Price $109",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $200-$250",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone8plus: {
              screen: {
                  price: "Up-front Price $120",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $55",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $200-$250",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphonex: {
              screen: {
                  price: "Up-front Price $200",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $65",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $65",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $250-$350",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphonexs: {
              screen: {
                  price: "Up-front Price $250",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $65",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $65",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $250-$350",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphonexr: {
              screen: {
                  price: "Up-front Price $200",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $65",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $65",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $250-$350",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphonexsmax: {
              screen: {
                  price: "Up-front Price $280",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $75",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $75",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300 - $450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone11: {
              screen: {
                  price: "Up-front Price $180",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $100",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $100",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$350",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone11pro: {
              screen: {
                  price: "Up-front Price $280",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $100",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $100",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          iphone11pro: {
              screen: {
                  price: "Up-front Price $330",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Up-front Price $100",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Up-front Price $100",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
        }
    }




  var selectDevices = document.getElementById('select-device').value;
  var iphoneDropdown = document.getElementById('iphones');
  var ipadDropdown = document.getElementById('ipads');
  var selectIpadDevice = document.getElementById('select-ipad-model').value;
  var selectColor = document.getElementById('homeButton');
  //DEVICE MODELS RESPONSIVE

  if (selectDevices === "iphone") {
      iphoneDropdown.style.display = "block"
      ipadDropdown.style.display = "none"
  } else if (selectDevices === "ipad") {
      ipadDropdown.style.display = "block"
      iphoneDropdown.style.display = "none"
  }
  if (chooseDeviceModel == "x") {
      selectColor.style.display = "none"
  } else if (chooseDeviceModel == "xs") {
      selectColor.style.display = "none"
  } else if (chooseDeviceModel == "xr") {
      selectColor.style.display = "none"
  } else if (chooseDeviceModel == "xsmax") {
      selectColor.style.display = "none"
  } else {
      selectColor.style.display = "block"
  }
  if (chooseIssue == "battery" && chooseDeviceModel == "11pro") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone11pro"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone11pro"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonepro"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "11pro") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone11pro"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone11pro"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone11pro"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "11pro") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone11pro"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone11pro"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone11pro"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "11pro") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone11pro"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone11pro"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone11pro"]["screen"]["duration"]

  }
  if (chooseIssue == "battery" && chooseDeviceModel == "11") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone11"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone11"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone11"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "11") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone11"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone11"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone11"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "11") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone11"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone11"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone11"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "11") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone11"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone11"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone11"]["screen"]["duration"]

  }

  if (chooseIssue == "battery" && chooseDeviceModel == "x") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonex"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonex"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonex"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "x") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonex"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonex"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonex"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "x") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonex"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonex"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonex"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "x") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonex"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonex"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonex"]["screen"]["duration"]

  } else if (chooseIssue == "screen" && chooseDeviceModel == "xs") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexs"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexs"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexs"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "xs") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexs"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexs"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexs"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "xs") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexs"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexs"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexs"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "xs") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexs"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexs"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexs"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "xr") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexr"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexr"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexr"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "xr") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexr"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexr"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexr"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "xr") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexr"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexr"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexr"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "xr") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexs"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexs"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexs"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "xsmax") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexsmax"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexsmax"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexsmax"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "xsmax") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexsmax"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexsmax"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexsmax"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "xsmax") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexsmax"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexsmax"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexsmax"]["charging"]["duration"]

  } else if (chooseIssue == "water" && chooseDeviceModel == "xsmax") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphonexsmax"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphonexsmax"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphonexsmax"]["water"]["duration"]
  } else if (chooseIssue === "screen" && chooseDeviceModel === "8plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone8plus"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone8plus"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone8plus"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "8plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone8plus"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone8plus"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone8plus"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "8plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone8plus"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone8plus"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone8plus"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "8plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone8plus"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone8plus"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone8plus"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "8") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone8"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone8"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone8"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "8") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone8"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone8"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone8"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "8") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone8"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone8"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone8"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "8") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone8"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone8"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone8"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "7plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone7plus"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone7plus"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone7plus"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "7plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone7plus"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone7plus"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone7plus"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "7plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone7plus"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone7plus"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone7plus"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "7plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone7plus"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone7plus"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone7plus"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "7") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone7"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone7"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone7"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "7") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone7"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone7"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone7"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "7") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone7"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone7"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone7"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "7") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone7"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone7"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone7"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "6splus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6splus"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6splus"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6splus"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "6splus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6splus"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6splus"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6splus"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "6splus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6splus"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6splus"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6splus"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "6splus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6splus"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6splus"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6splus"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "6s") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6s"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6s"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6s"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "6s") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6s"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6s"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6s"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "6s") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6s"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6s"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6s"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "6s") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6s"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6s"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6s"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "6plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6plus"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6plus"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6plus"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "6plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6plus"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6plus"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6plus"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "6plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6plus"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6plus"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6plus"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "6plus") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6plus"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6plus"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6plus"]["water"]["duration"]
  } else if (chooseIssue == "screen" && chooseDeviceModel == "6") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6"]["screen"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6"]["screen"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && chooseDeviceModel == "6") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6"]["battery"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6"]["battery"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && chooseDeviceModel == "6") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6"]["charging"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6"]["charging"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6"]["charging"]["duration"]
  } else if (chooseIssue == "water" && chooseDeviceModel == "6") {
      priceTitle.innerText = deviceDictionary["iphones"]["iphone6"]["water"]["price"]
      warrantyText.innerText = deviceDictionary["iphones"]["iphone6"]["water"]["warranty"]
      repairtimeText.innerText = deviceDictionary["iphones"]["iphone6"]["water"]["duration"]
  }



  var ipadprices = {
      ipads: {
          ipadmini: {
              screen: {
                  price: "Upfront Price $100",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $100",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $100",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadmini2: {
              screen: {
                  price: "Upfront Price $100",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $129",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $100",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadmini3: {
              screen: {
                  price: "Upfront Price $150",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadmini4: {
              screen: {
                  price: "Upfront Price $280",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $180",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $180",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadmini5: {
              screen: {
                  price: "Upfront Price $290",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $190",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $190",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipad2: {
              screen: {
                  price: "Upfront Price $140",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipad3: {
              screen: {
                  price: "Upfront Price $140",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipad4: {
              screen: {
                  price: "Upfront Price $140",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipad5: {
              screen: {
                  price: "Upfront Price $150",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipad6: {
              screen: {
                  price: "Upfront Price $150",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipad7: {
              screen: {
                  price: "Upfront Price $200",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadair: {
              screen: {
                  price: "Upfront Price $150",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadair2: {
              screen: {
                  price: "Upfront Price $300",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $130",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadair3: {
              screen: {
                  price: "Upfront Price $300",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              }, //ipad pro
          },
          ipadpro9: {
              screen: {
                  price: "Upfront Price $250",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $150",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $150",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $300-$450",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadpro2: {
              screen: {
                  price: "Upfront Price $350",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $500-$550",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadpro3: {
              screen: {
                  price: "Upfront Price $350",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $500-$550",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadpro10: {
              screen: {
                  price: "Upfront Price $280",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $150",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $150",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $200-$400",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadpro121: {
              screen: {
                  price: "Upfront Price $450",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $600-$650",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadpro122: {
              screen: {
                  price: "Upfront Price $450",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $230",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $600-$680",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
          ipadpro123: {
              screen: {
                  price: "Upfront Price $550",
                  warranty: "Lifetime Warranty",
                  duration: "Screen Repair takes 15 minutes",
              },
              battery: {
                  price: "Upfront Price $330",
                  warranty: "90 day warranty",
                  duration: "Battery Replacement takes 15 minutes",
              },
              charging: {
                  price: "Upfront Price $330",
                  warranty: "90 day warranty",
                  duration: "Charging-Port Replacement takes 30 minutes",
              },
              water: {
                  price: "Price-range $600-$680",
                  warranty: "90 day warranty",
                  duration: "Repair takes 2-3 business days",
              },
          },
      }
  }


  //ipad if statements
  if (chooseIssue == "screen" && selectIpadDevice == "ipadmini") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadmini") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadmini") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadmini") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadmini2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini2"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini2"]["screeen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini2"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadmini2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini2"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini2"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini2"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadmini2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini2"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini2"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini2"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadmini2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini2"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini2"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini2"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadmini3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini3"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini3"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini3"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadmini3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini3"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini3"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini3"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadmini3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini3"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini3"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini3"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadmini3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini3"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini3"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini3"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadmini4") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini4"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini4"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini4"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadmini4") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini4"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini4"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini4"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadmini4") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini4"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini4"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini4"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadmini4") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini4"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini4"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini4"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadmini5") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini5"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini5"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini5"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadmini5") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini5"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini5"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini5"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadmini5") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini5"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini5"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini5"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadmini5") {
      priceTitle.innerText = ipadprices["ipads"]["ipadmini5"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadmini5"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadmini5"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipad2") {
      priceTitle.innerText = ipadprices["ipads"]["ipad2"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad2"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad2"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipad2") {
      priceTitle.innerText = ipadprices["ipads"]["ipad2"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad2"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad2"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipad2") {
      priceTitle.innerText = ipadprices["ipads"]["ipad2"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad2"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad2"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipad2") {
      priceTitle.innerText = ipadprices["ipads"]["ipad2"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad2"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad2"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipad3") {
      priceTitle.innerText = ipadprices["ipads"]["ipad3"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad3"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad3"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipad3") {
      priceTitle.innerText = ipadprices["ipads"]["ipad3"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad3"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad3"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipad3") {
      priceTitle.innerText = ipadprices["ipads"]["ipad3"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad3"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad3"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipad3") {
      priceTitle.innerText = ipadprices["ipads"]["ipad3"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad3"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad3"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipad4") {
      priceTitle.innerText = ipadprices["ipads"]["ipad4"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad4"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad4"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipad4") {
      priceTitle.innerText = ipadprices["ipads"]["ipad4"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad4"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad4"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipad4") {
      priceTitle.innerText = ipadprices["ipads"]["ipad4"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad4"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad4"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipad4") {
      priceTitle.innerText = ipadprices["ipads"]["ipad4"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad4"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad4"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipad5") {
      priceTitle.innerText = ipadprices["ipads"]["ipad5"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad5"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad5"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipad5") {
      priceTitle.innerText = ipadprices["ipads"]["ipad5"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad5"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad5"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipad5") {
      priceTitle.innerText = ipadprices["ipads"]["ipad5"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad5"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad5"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipad5") {
      priceTitle.innerText = ipadprices["ipads"]["ipad5"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad5"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad5"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipad6") {
      priceTitle.innerText = ipadprices["ipads"]["ipad6"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad6"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad6"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipad6") {
      priceTitle.innerText = ipadprices["ipads"]["ipad6"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad6"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad6"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipad6") {
      priceTitle.innerText = ipadprices["ipads"]["ipad6"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad6"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad6"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipad6") {
      priceTitle.innerText = ipadprices["ipads"]["ipad6"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad6"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad6"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipad7") {
      priceTitle.innerText = ipadprices["ipads"]["ipad7"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad7"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad7"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipad7") {
      priceTitle.innerText = ipadprices["ipads"]["ipad7"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad7"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad7"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipad7") {
      priceTitle.innerText = ipadprices["ipads"]["ipad7"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad7"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad7"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipad7") {
      priceTitle.innerText = ipadprices["ipads"]["ipad7"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipad7"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipad7"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadair") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadair") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadair") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadair") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadair2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair2"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair2"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair2"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadair2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair2"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair2"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair2"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadair2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair2"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair2"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair2"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadair2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair2"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair2"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair2"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadair3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair3"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair3"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair3"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadair3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair3"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair3"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair3"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadair3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair3"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair3"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair3"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadair3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadair3"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadair3"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadair3"]["water"]["duration"]
  } //ipadpro1
  else if (chooseIssue == "screen" && selectIpadDevice == "ipadpro9") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro9"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro9"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro9"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadpro9") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro9"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro9"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro9"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadpro1") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro1"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro1"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro1"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadpro1") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro1"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro1"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro1"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadpro2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro2"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro2"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro2"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadpro2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro2"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro2"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro2"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadpro2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro2"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro2"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro2"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadpro2") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro2"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro2"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro2"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadpro3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro3"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro3"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro3"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadpro3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro3"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro3"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro3"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadpro3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro3"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro3"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro3"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadpro3") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro3"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro3"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro3"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadpro10") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro10"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro10"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro10"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadpro10") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro10"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro10"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro10"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadpro10") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro10"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro10"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro10"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadpro10") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro10"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro10"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro10"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadpro121") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro121"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro121"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro121"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadpro121") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro121"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro121"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro121"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadpro121") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro121"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro121"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro121"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadpro121") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro121"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro121"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro121"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadpro122") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro122"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro122"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro122"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadpro122") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro122"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro122"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro122"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadpro122") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro122"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro122"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro122"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadpro122") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro122"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro122"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro122"]["water"]["duration"]
  } else if (chooseIssue == "screen" && selectIpadDevice == "ipadpro123") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro123"]["screen"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro123"]["screen"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro123"]["screen"]["duration"]
  } else if (chooseIssue == "battery" && selectIpadDevice == "ipadpro123") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro123"]["battery"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro123"]["battery"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro123"]["battery"]["duration"]
  } else if (chooseIssue == "charging" && selectIpadDevice == "ipadpro123") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro123"]["charging"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro123"]["charging"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro123"]["charging"]["duration"]
  } else if (chooseIssue == "water" && selectIpadDevice == "ipadpro123") {
      priceTitle.innerText = ipadprices["ipads"]["ipadpro123"]["water"]["price"]
      warrantyText.innerText = ipadprices["ipads"]["ipadpro123"]["water"]["warranty"]
      repairtimeText.innerText = ipadprices["ipads"]["ipadpro123"]["water"]["duration"]
  }

}

$(function() {
  var d = new Date(),
      h = d.getHours(),
      m = d.getMinutes();
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  $('input[type="time"][value="now"]').each(function() {
      $(this).attr({
          value: h + ":" + m
      });
  });
});

// if (hours < 10) hours = "0" + hours;

// $(document).ready(function myTimer() {
//   var now = new Date(Date.now());
//   var f =
//     leadZero(now.getHours()) +
//     ":" +
//     leadZero(now.getMinutes()) +
//     ":" +
//     leadZero(now.getSeconds());
//   $("input[type=time]").val(f);
// });

// function leadZero(_something) {
//   if (parseInt(_something) < 10) return "0" + _something;
//   return _something; //else
//}