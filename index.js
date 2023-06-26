act();
var prev_type="";
function act() {
  document.getElementById("act").innerHTML = ``;
  fetch("https://www.boredapi.com/api/activity")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
        let activity =   data.activity.charAt(0).toUpperCase() + data.activity.slice(1);
        let type = data.type.charAt(0).toUpperCase() + data.type.slice(1);
        
        document.getElementById("act").innerHTML = `${activity}`;
        document.getElementById("type").innerHTML = `${type}`;

        
      
    });
}

setInterval(() => {
    act()
}, 3000);




setTimeout(() => {
    gif.src="happy.gif"
}, 2000);

setTimeout(() => {
    gif.src="beans.gif"
    gif.style=`width:200px`
}, 4000);

setTimeout(() => {
    gif.src="bored.gif"
    gif.style=`width:50px`
}, 6000);
setInterval(() => {
    
    setTimeout(() => {
        gif.src="happy.gif"
    }, 2000);
    
    setTimeout(() => {
        gif.src="beans.gif"
        gif.style=`width:200px`
    }, 4000);
    
    setTimeout(() => {
        gif.src="bored.gif"
        gif.style=`width:50px`
    }, 6000);
    

},7000);
