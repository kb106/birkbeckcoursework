//JScript for Booker results JOSN parsing
function invoke_booker_winners(){
    //fetch call to parse JSON payload chain then calls for JSON nodes
    fetch("booker.json")
     .then((response) => response.json())     
     .then((data) => {
        //set vars
        let output = "<ul>";
        for(const person of data.booker_prize_winners){
            //iterate and MUST use firstChild for multiple entries where we need 
            //to grab the first node
            output += `<li>${person.year} : &nbsp;&nbsp;${person.winner.author}</li>` ;
        }        //return all nodes in a DIV using ID as target
        document.getElementById("results").innerHTML = `${output}</ul>`;
        });
}
