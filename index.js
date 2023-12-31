// to change the activity and its type dynamically
act();
var prev_type = "";
function act() {
  document.getElementById("act").innerHTML = ``;
  fetch("https://www.boredapi.com/api/activity")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let activity =
        data.activity.charAt(0).toUpperCase() + data.activity.slice(1);
      let type = data.type.charAt(0).toUpperCase() + data.type.slice(1);

      document.getElementById("act").innerHTML = `${activity}`;
      document.getElementById("type").innerHTML = `${type}`;
    });
}

// to change the activity every 5 seconds
setInterval(() => {
  act();
}, 5000);


// to initialize the gif playing after 2 seconds in navbar
setTimeout(() => {
    gif.src = "happy.gif";
}, 2000);

setTimeout(() => {
  gif.src = "bored.gif";
}, 4000);

setTimeout(() => {
    gif.src = "wave.gif";
}, 6000);

// to put the gifs in a loop
setInterval(() => {
    setTimeout(() => {
        gif.src = "happy.gif";
    }, 2000);
    
    setTimeout(() => {
        gif.src = "bored.gif";
  }, 4000);
  
  setTimeout(() => {
      gif.src = "wave.gif";
    }, 6000);
}, 7000);


// to initialize the gif playing after 2 seconds below the activity
function mr() {
  setTimeout(() => {
    beans.src = "beans1.gif";
  },2000);
  setTimeout(() => {
    beans.src = "beans2.gif";
  }, 5500);
  setTimeout(() => {
    beans.src = "beans3.gif";
  }, 11500);
  setTimeout(() => {
    beans.src = "beans4.gif";
  }, 17500);
  setTimeout(() => {
    beans.src = "";
  }, 20000);
}
mr();

