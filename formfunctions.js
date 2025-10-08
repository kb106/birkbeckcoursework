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
