 // Проверяем поддержку акселерометра
        if (window.DeviceMotionEvent) {
            console.log('Датчик движения доступен.');

            // Обрабатываем данные акселерометра
            window.addEventListener('devicemotion', event => {
                const acceleration = event.accelerationIncludingGravity;

                // Берем значения ускорения по осям X, Y (с учетом гравитации)
                const x = acceleration.x || 0;
                const y = acceleration.y || 0;

                // Преобразуем значения осей в цвет (от -10 до 10)
                const red = Math.min(255, Math.max(0, Math.floor((x + 10) * 12.75))); // от -10 до 10
                const green = Math.min(255, Math.max(0, Math.floor((y + 10) * 12.75)));

                // Устанавливаем цвет фона в зависимости от движения устройства
                document.body.style.backgroundColor = `rgb(${red}, ${green}, 150)`;
            });
        } else {
            console.log('Датчик движения не поддерживается.')
            document.body.innerHTML = '<div>К сожалению, ваш браузер не поддерживает датчики движения.</div>';
        }