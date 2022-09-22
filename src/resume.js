export function handleresumeClick(event) {
    const modal = document.querySelector(".resume-modal")
    modal.style.display = "block";
    const modal1 = document.querySelector(".shadow")
    modal1.style.display = "none";
    const modal2 = document.querySelector(".Background")
    modal2.style.background = "gray";
    modal1.style.display = "none";
    const modal3 = document.querySelector(".hero-container")
    modal3.style.display = "none";
    const modal4 = document.querySelector(".section-title")
    modal4.style.display = "none";
    const modal5 = document.querySelector(".info")
    modal5.style.display = "none";
    const modal6 = document.querySelector(".footer")
    modal6.style.display = "none";
    const modal7 = document.querySelector(".Mainnav")
    modal7.style.display = "none";

  }
  
export function handleresumeClose(event) {
    const modal = document.querySelector(".resume-modal")
    modal.style.display = "none";
    const modal1 = document.querySelector(".shadow")
    modal1.style.display = "block";
    const modal2 = document.querySelector(".Background")
    modal2.style.background = "#f6f9fc";
    const modal3 = document.querySelector(".hero-container")
    modal3.style.display = "block";
    const modal4 = document.querySelector(".section-title")
    modal4.style.display = "block";
    const modal5 = document.querySelector(".info")
    modal5.style.display = "block";
    const modal6 = document.querySelector(".footer")
    modal6.style.display = "block";
    const modal7 = document.querySelector(".Mainnav")
    modal7.style.display = "flex";
    const modal8 = document.querySelector(".hero-description")
    modal8.scrollIntoView();
}
