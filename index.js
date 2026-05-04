// template_72c9hds
//
// thAwhzfkEPN9bQewN

function contact(event) {
  event.preventDefault();
  // emailjs
  // .sendForm(
  //     "service_5kib6jc",
  //     "template_72c9hds",
  //     event.target,
  //     "thAwhzfkEPN9bQewN",
  // )
  // .then(() => {
  //     console.log("this worked1");
  // });
  
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"


  setTimeout(() => {
    loading.classList.remove("modal__overlay--visible")
    success.classList += " modal__overlay--visible"
    console.log("it worked 1");
  }, 1000);
}
