
 if (window.DeviceMotionEvent) {
    console.log('Датчик движения доступен.');

    
    window.addEventListener('devicemotion', event => {
        const accelerometr = event.accelerationIncludingGravity;

     
        const x = accelerometr.x || 0;
        const y = accelerometr.y || 0;

     
        const color1 = Math.min(255, Math.max(0, Math.floor((x + 10) * 12.75)));
        const color2 = Math.min(255, Math.max(0, Math.floor((y + 10) * 12.75)));

   
        document.body.style.backgroundColor = `rgb(${color1}, ${color2}, 150)`;
    });
} else {
    console.log('Датчик движения не поддерживается.')
    document.body.innerHTML = '<div>К сожалению, ваш браузер не поддерживает датчики движения.</div>';
}