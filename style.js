
// hr rotation = h*30 + m/2 degrees
// min rotation = m*6 degrees 
// sec rotation = s*6

setInterval(() => {
     d = new Date();
     hr = d.getHours();
     mn = d.getMinutes();
     sc = d.getSeconds();
     hrotation = hr*30 + mn/2;
     mrotation = mn*6;
     srotation = sc*6;

     hour.style.transform = `rotate(${hrotation}deg)`;
     minute.style.transform = `rotate(${mrotation}deg)`;
     second.style.transform = `rotate(${srotation}deg)`;
}, 1000);