

const t = document.getElementById('time');
const d = document.getElementById('date');
let btn = document.querySelector('button');




btn.addEventListener('click', function ddd() {
    const dNow = new Date();
    const day = dNow.getDay();
    const month = dNow.getMonth();
    const year = dNow.getFullYear();
    const hour = dNow.getHours().toString().padStart(2, '0');
    const minute = dNow.getMinutes().toString().padStart(2, '0');
    const second = dNow.getSeconds().toString().padStart(2, '0');
    t.textContent = `${hour}:${minute}:${second}`;
    d.textContent = `${day}/${month}/${year}`;
    setInterval(ddd, 1000);
});
