/**
 * Project: Smile Instantly Global Hub
 * Логіка оптимізована під публічний ID: 7639772758993358101
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ПУЛ ВІДЕО (Всі позиції заповнені вашим перевіреним кодом) ---
    const localVideoCache = [
        "7639772758993358101",
        "7639772758993358101",
        "7639772758993358101"
    ];

    const currentPhrases = [
        "Ти неймовірна людина, і сьогодні твій день! ✨",
        "Хтось просто зараз думає про тебе з усмішкою. 🥰",
        "Твоя посмішка здатна змінити чийсь день на краще. Перевіримо? 🎯",
        "Тримай віртуальне обіймання! Все буде супер. 🤗",
        "Ти робиш цей світ кращим просто тим, що ти в ньому є. 🌍"
    ];

    // --- 2. Елементи інтерфейсу ---
    const triggerBtn = document.getElementById('triggerBtn');
    const contentBox = document.getElementById('smileContent');
    const tiktokContainer = document.getElementById('tiktokContainer');
    const initialEmoji = document.getElementById('initialEmoji');
    const videoLoader = document.getElementById('videoLoader');
    
    const syncModal = document.getElementById('syncModal');
    const btnSyncYes = document.getElementById('btnSyncYes');
    const btnSyncNo = document.getElementById('btnSyncNo');

    let isProcessing = false;

    // --- 3. Логіка головної кнопки «Кайф» ---
    triggerBtn.addEventListener('click', () => {
        if (isProcessing) return;

        const syncChoice = localStorage.getItem('tiktok_sync_allowed');
        if (syncChoice === null) {
            syncModal.classList.add('active');
        } else {
            loadHappyContent();
        }
    });

    btnSyncYes.addEventListener('click', () => {
        localStorage.setItem('tiktok_sync_allowed', 'yes');
        syncModal.classList.remove('active');
        loadHappyContent();
    });

    btnSyncNo.addEventListener('click', () => {
        localStorage.setItem('tiktok_sync_allowed', 'no');
        syncModal.classList.remove('active');
        loadHappyContent();
    });

    // --- 4. Ефект ШІ-Біохакінгу та Рендеринг плеєра ---
    function loadHappyContent() {
        isProcessing = true;
        videoLoader.classList.add('active');

        // Імітація сканування настрою ШІ (Крутіше за TikTok!)
        let dopamineLevel = 20;
        contentBox.innerHTML = `🔮 Розумний ШІ сканує твій настрій... Рівень дофаміну: <strong>${dopamineLevel}%</strong>`;
        contentBox.classList.add('show');

        const interval = setInterval(() => {
            dopamineLevel += 20;
            if (dopamineLevel >= 100) {
                dopamineLevel = 100;
                clearInterval(interval);
                const randomPhraseIndex = Math.floor(Math.random() * currentPhrases.length);
                contentBox.innerHTML = `🚀 <strong>Дофамін: 100% Заряджено!</strong><br>${currentPhrases[randomPhraseIndex]}`;
            } else {
                contentBox.innerHTML = `⚡ ШІ оптимізує гормони радості... Дофамін: <strong>${dopamineLevel}%</strong>`;
            }
        }, 100);

        // Беремо ваше відео з масиву
        const videoId = localVideoCache[0];

        // Оновлення мокапу смартфона
        if (initialEmoji) initialEmoji.style.opacity = '0';
        tiktokContainer.innerHTML = '';

        // Збірка та інтеграція офіційного плеєра TikTok
        const blockquote = document.createElement('blockquote');
        blockquote.className = 'tiktok-embed';
        blockquote.setAttribute('cite', `https://tiktok.com{videoId}`);
        blockquote.setAttribute('data-video-id', videoId);
        
        // Фікс стилів: змушуємо плеєр зайняти 100% висоти та ширини внутрішнього екрана
        blockquote.style.width = '100%';
        blockquote.style.height = '100%';
        blockquote.style.margin = '0';
        blockquote.style.padding = '0';
        
        const section = document.createElement('section');
        blockquote.appendChild(section);
        tiktokContainer.appendChild(blockquote);

        // Переініціалізація або створення скрипта TikTok SDK
        if (window.TiktokEmbed) {
            window.TiktokEmbed.init();
        } else if (window.tiktokEmbed && typeof window.tiktokEmbed.render === 'function') {
            window.tiktokEmbed.render();
        } else {
            const script = document.createElement('script');
            script.src = 'https://tiktok.com';
            script.async = true;
            document.body.appendChild(script);
        }

        // Візуально плавно показуємо плеєр у телефоні
        setTimeout(() => {
            videoLoader.classList.remove('active');
            tiktokContainer.style.opacity = '1';
            isProcessing = false;
        }, 800);

        createGlobalConfetti();
    }

    // Система святкового конфеті
    function createGlobalConfetti() {
        const colors = ['#FFD23F', '#EE4266', '#3A86FF', '#8338EC'];
        const fragment = document.createDocumentFragment();
        const count = window.innerWidth < 768 ? 20 : 45;

        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-15px';
            confetti.style.transform = `scale(${Math.random() * 1.2 + 0.6})`;
            fragment.appendChild(confetti);

            confetti.animate([
                { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
                { transform: `translate(0, 105vh) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], { duration: (Math.random() * 1.4 + 1.2) * 1000, easing: 'cubic-bezier(0.25, 1, 0.5, 1)', fill: 'forwards' });

            setTimeout(() => confetti.remove(), 2600);
        }
        document.body.appendChild(fragment);
    }
});
