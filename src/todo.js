export function handletodolistClick(event) {
    const modal = document.querySelector(".todolist-modal")
    modal.style.display = "block";
    Start()
  }
  
export function handletodolistClose(event) {
    const modal = document.querySelector(".todolist-modal")
    modal.style.display = "none";
}





function Start(){

    var enterButton = document.getElementById("enter")
    var input = document.getElementById("userInput")
    var ul = document.querySelector("ul")
    var item = document.getElementsByTagName("li")
    var count = 0 

    function inputLength(){
	    return input.value.length
    }   

    function listLength(){
	    return item.length
    }

    function createListElement() {
        if(count < 6){
            var li = document.createElement("li") // creates an element "li"
            li.appendChild(document.createTextNode(input.value)) //makes text from input field the li text
            ul.appendChild(li) //adds li to ul
            input.value = "" //Reset text input field
            count = count + 1
        }
    
            //START STRIKETHROUGH
            // because it's in the function, it only adds it for new items
            function crossOut() {
                li.classList.toggle("done")
            }
    
            li.addEventListener("click",crossOut)
            //END STRIKETHROUGH
    
    
            // START ADD DELETE BUTTON
            var dBtn = document.createElement("button")
            dBtn.appendChild(document.createTextNode("X"))
            li.appendChild(dBtn)
            dBtn.addEventListener("click", deleteListItem)
            // END ADD DELETE BUTTON
    
    
            //ADD CLASS DELETE (DISPLAY: NONE)
            function deleteListItem(){
                li.classList.add("delete")
                count = count - 1 
            }
            //END ADD CLASS DELETE
        
    }   


    function addListAfterClick(){
	    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		    createListElement()
	    }   
    }

    function addListAfterKeypress(event) {
	    if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		    //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		    createListElement()
	    } 
    }

    enterButton.addEventListener("click",addListAfterClick)
    input.addEventListener("keypress", addListAfterKeypress)

}


