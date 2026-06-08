// Знаходимо елементи відео та кнопок
const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeBtn = document.getElementById('volumeBtn');

// 1. Керування Паузою / Стартом
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        video.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// 2. Керування Звуком (Ввімкнути / Вимкнути)
volumeBtn.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        volumeBtn.textContent = '🔊';
    } else {
        video.muted = true;
        volumeBtn.textContent = '🔇';
    }
});

// 3. Додаткова зручність: Пауза, якщо користувач перейшов на іншу вкладку
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        video.pause();
        if (!video.paused) playPauseBtn.textContent = '▶️';
    } else {
        // Повертаємо програвання, якщо воно не було зупинено вручну
        if (playPauseBtn.textContent === '⏸️') {
            video.play();
        }
    }
});
