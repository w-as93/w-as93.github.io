// card 
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 4
        }
    }
  });

  // ارسال الايميلات
function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  email: document.getElementById("email").value,
	  message: document.getElementById("message").value,
	};
  
	const serviceID = "service_gxnp1yr";
	const templateID = "template_r5ww3ni";
  
	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("name").value = "";
		  document.getElementById("email").value = "";
		  document.getElementById("message").value = "";
		  console.log(res);
		  alert("Your message sent successfully!!")
  
	  })
	  .catch(err=>console.log(err));
  }

  // لتفعيل زر المنيو
function toggleMenu() {
  let menu = document.querySelector(".content-section nav");
  let toggleIcon = document.querySelector(".menu-toggle i");

  menu.classList.toggle("active");

  // تبديل الأيقونة مع تأثير دوران ناعم
  if (menu.classList.contains("active")) {
      toggleIcon.classList.remove("bx-menu");
      toggleIcon.classList.add("bx-x");
  } else {
      toggleIcon.classList.remove("bx-x");
      toggleIcon.classList.add("bx-menu");
  }
}
