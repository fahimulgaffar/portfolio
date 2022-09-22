export function handleClick(event) {
    const modal = document.querySelector(".mac-modal");
    modal.style.display = "block";
  }

export function handleClose(event) {
  const modal = document.querySelector(".mac-modal");
  modal.style.display = "none";
  }

export function handleMinimize(event) {
  const modal = document.querySelector(".mac-modal_content");
  if(parseInt(modal.style.height.substring(0,3)) < 350 || parseInt(modal.style.width.substring(0,3) < 800)){
    modal.style.height = '350px';
    modal.style.width = '800px';
  }
  else{
    modal.style.height = '300px';
   modal.style.width = '700px';
  }
  }





export function handleappClose(event) {
  const modal = document.querySelector(".application-modal");
  modal.style.display = "none";
  }

export function handleappMinimize(event) {
  const modal = document.querySelector(".application-content");
  if(parseInt(modal.style.height.substring(0,3)) < 400 || parseInt(modal.style.width.substring(0,3) < 650)){
    modal.style.height = '400px';
    modal.style.width = '650px';
  }
  else{
    modal.style.height = '350px';
   modal.style.width = '500px';
  }
  }

export function handleappClick(event) {
    const modal = document.querySelector(".application-modal");
    modal.style.display = "block";
}

export function handletrashClose(event) {
  const modal = document.querySelector(".trash-modal");
  modal.style.display = "none";
  }

export function handletrashMinimize(event) {
  const modal = document.querySelector(".trash-content");
  if(parseInt(modal.style.height.substring(0,3)) < 400 || parseInt(modal.style.width.substring(0,3) < 650)){
    modal.style.height = '400px';
    modal.style.width = '650px';
  }
  else{
    modal.style.height = '350px';
   modal.style.width = '500px';
  }
  }

export function handletrashClick(event) {
    const modal = document.querySelector(".trash-modal");
    modal.style.display = "block";
}






export function timer(){

  setTimeout(function() {
    const modal = document.querySelector(".shadow");
    modal.style.display = "block";
    const modal1 = document.querySelector(".Container");
    modal1.style.display = "block";
    const modal3 = document.querySelector(".nav_bar");
    modal3.style.display = "flex";
  }, 1000);


  setTimeout(function() {
    const modal = document.querySelector(".Welcome");
    modal.style.display = "block";
  }, 2000);

  setTimeout(function() {
    const modal = document.querySelector(".Welcome");
    modal.style.display = "none";
  }, 5000);

  setTimeout(function() {
    const modal1 = document.querySelector(".mac-mini-folder");
    modal1.style.display = "block";
    const modal2 = document.querySelector(".trash-folder");
    modal2.style.display = "block";
  }, 6000);
  
  setTimeout(function() {
    const modal = document.querySelector(".mac-readme");
    modal.style.display = "block";
  }, 7000);

  setTimeout(handleClick, 9000);

};




export function refresh(){
  close();
  timer();
}

export function close(){
  const modal1 = document.querySelector(".Container");
    modal1.style.display = "none";

  const modal = document.querySelector(".nav_bar");
    modal.style.display = "none";

  const modal2 = document.querySelector(".mac-mini-folder");
    modal2.style.display = "none";
  
  const modal3 = document.querySelector(".trash-folder");
    modal3.style.display = "none";

    const modal4 = document.querySelector(".mac-readme");
    modal4.style.display = "none";
  
  const modal5 = document.querySelector(".mac-modal");
    modal5.style.display = 'none'
}



export function scroll(){
  var elmntToView = document.getElementById("contact");
  elmntToView.scrollIntoView(); 
}



