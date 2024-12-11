const stepsDisplay = document.getElementById('steps');
const speedDisplay = document.getElementById('speed');
const resetButton = document.getElementById('reset');

let stepCount = 0; 
let lastAcceleration = 0; 
let lastStepTime = 0; 
let averageStepTime = 0; 

const stepLength = 0.7; 


if (window.DeviceMotionEvent) {
    console.log('Начинаем отслеживание шагов...');
    window.addEventListener('devicemotion', event => {
        const acceleration = event.accelerationIncludingGravity;

        
        const currentAcceleration = Math.sqrt(
            (acceleration.x || 0) ** 2 + 
            (acceleration.y || 0) ** 2 + 
            (acceleration.z || 0) ** 2
        );

        const now = Date.now();
        

        if (Math.abs(currentAcceleration - lastAcceleration) > 2) {
            if (now - lastStepTime > 300) { 
                stepCount++;
                const stepTime = now - lastStepTime;

                lastStepTime = now;

                
                averageStepTime = averageStepTime
                    ? (averageStepTime + stepTime) / 2
                    : stepTime;

                const speed = stepLength / (averageStepTime / 1000); 
                speedDisplay.textContent = speed.toFixed(2);
            }
        }

     
        lastAcceleration = currentAcceleration;
        stepsDisplay.textContent = stepCount;
    });
} else {
    console.log('Ваш браузер не поддерживает датчики движения.');
    
    document.body.innerHTML = '<h1>Датчики движения недоступны.</h1>';
}


resetButton.addEventListener('click', () => {
    stepCount = 0;
    lastAcceleration = 0;
    lastStepTime = 0;
    averageStepTime = 0;

    stepsDisplay.textContent = 0;
    speedDisplay.textContent = '0.00';
});