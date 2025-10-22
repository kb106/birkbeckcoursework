function invokeWTR_rankings(){
var rows        = 3
var tabletennis = "<table class='divborder'>"
var count       = 0
  while(count < numrows){
    tabletennis += `<tr>
    <td>${count}</td>
    <td>${count*count}</td>
    </tr>`;
    count++;
  }
  document.getElementById('test').innerHTML =
  `${tabletennis}</table>`;
}

function invoke_loadmensresults(){
  //fetch with a promise
  fetch('men-grand-slam-winners.json')
    .then((response) => response.json())
    .then((data) => {
      //set vars
      let output = "<ul>";
      for(const player of data.winner){
          //iterate and MUST use firstChild for multiple entries where we need 
          //to grab the first node
          output += `<li>${player.winner} : &nbsp;&nbsp;${player.winner.runner-up}</li>` ;
      }        //return all nodes in a DIV using ID as target
      document.getElementById("results").innerHTML = `${output}</ul>`;
      });
}

