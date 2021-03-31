const btc_coin = [...document.querySelectorAll('.btc-coin')]
const eth_coin = [...document.querySelectorAll('.eth-coin')]
const ltc_coin = [...document.querySelectorAll('.ltc-coin')]

let y = 0,x = 0,endX = 0,endY = 0

onmousemove = (e) => {
  endX = innerWidth / 2 - e.x
  endY = innerHeight / 2 - e.y
}

function parallax() {
    x += (endX - x) / 20
    y += (endY - y) / 20 
    btc_coin.forEach(item => {
        item.style.transform = `translate(${-x / 20}px, ${-y / 20}px)`
    })
    eth_coin.forEach(item => {
        item.style.transform = `translate(${-x / 50}px, ${-y / 50}px)`
    })
    ltc_coin.forEach(item => {
        item.style.transform = `translate(${-x / 80}px, ${-y / 80}px)`
    })

    requestAnimationFrame(parallax)
}

requestAnimationFrame(parallax)
window.onload = function() {
    document.getElementById("cloud-dog").style.opacity = 1;
    document.getElementById("cloud-dog").style.height = '70%';
    document.getElementById("cloud-dog").style.top = '-40%';
    document.getElementById("cloud-dog").style.animation = 'cloud ease 2s infinite alternate';
}
