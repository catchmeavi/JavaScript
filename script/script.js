function concatArray(){
  var hege = ["Cecilie", "Lone"];
  var stale = ["Emil", "Tobias", "Linus"];
  var children = hege.concat(stale);
  document.getElementById("resut").innerHTML = children;
}
function getSummery(){
  const person = { name: 'David Walsh', gender: 'Male' };
  const tools = { computer: 'Mac', editor: 'Atom' };

  const summary = {...person, ...tools};
  document.getElementById("resut1").innerHTML = JSON.stringify(summary);
} 
function concatArraySpread(){
  var hege = ["Cecilie", "Lone"];
  var stale = ["Emil", "Tobias", "Linus"];
  var children = [...hege,...stale ];
  document.getElementById("resut3").innerHTML = children;
}