function searchEmoji() {
    let inputVal = document.getElementById("search_field").value;

    displayResult(inputVal);
}

function displayResult(searchQuery=""){

    let filterdData = emojiList.filter((e) =>{
        if(e.description.indexOf(searchQuery) != -1){
            return true ;
        }

        if(e.tags.some(elem => elem.startsWith(searchQuery))){
            return true;
        }

        if(e.aliases.some(elem => elem.startsWith(searchQuery))){
            return true;
        }
    });

    let parent = document.getElementById("emoji_result");
    parent.innerHTML = "";
    filterdData.forEach((e)=>{
       let newRow = document.createElement("tr");
       let newEmoji = document.createElement("td");
       let newAliases = document.createElement("td");
       let newDisc = document.createElement("td"); 

       newEmoji.innerText = e.emoji ;
       newEmoji.style.padding ="0.7rem";
       newEmoji.style.fontSize = "50px";
       newAliases.innerText = e.aliases ;
       newAliases.style.paddingLeft ="3rem";
       newDisc.innerText = e.description ;
       newDisc.style.paddingLeft ="2rem";


    //    console.log(newEmoji , newAliases , newDisc);

    newRow.appendChild(newEmoji);
    newRow.appendChild(newAliases);
    newRow.appendChild(newDisc);

    parent.appendChild(newRow);
    });
}

document.getElementById("search_field").addEventListener("keyup", searchEmoji);

window.onload = ()=> displayResult();



