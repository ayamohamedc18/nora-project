// Wedding Date
const intro = document.getElementById("intro");
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", function () {

    music.play()
        .then(() => {
            btn.innerHTML = "⏸";
        })
        .catch(err => {
            console.log(err);
        });

});
const weddingDate = new Date("August 14, 2026 19:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    // Wedding has arrived
    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.querySelector(".ticket-right h5").textContent =
            "NOW SHOWING ❤️";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

// Run immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
var cartona=''
for(var i =0; i<5; i++){
    cartona+=`<div class="col-md-4">
                <div class="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tenetur ullam. Tenetur laudantium enim similique itaque porro, aspernatur aliquid exercitationem quasi optio cumque, repellat, voluptates quo voluptatibus. Ducimus, repellat soluta?</p>
                </div>
        </div>`
        document.getElementById('MyData').innerHTML=cartona
}
var userName=Window.prompt('enter your name')
var userAge=window.prompt('enter your age')
console.log(userName)
console.log(userAge)
function getsum(num1=0,num2=1){
    var total =num1+num2
    return total
}
function getavg(sum){
 var avg=sum/2
 console.log(avg);
}
getavg(getsum(4,2))
var product={
    name: 'toshiba',
    price:100,
    color: 'black',
    onSale: true,
    sayHi : function(username){
        console.log('hiii' +username+ ' test')
    }
}
console.log(product.price)
product.sayHi()
console.log(product.sayHi('hamada'))
var colors = ['red','green','blue','tan','orange']
var updatedarray =colors.sort()
console.log('colors =>',colors)
console.log('updatedarray =>',updatedarray)

