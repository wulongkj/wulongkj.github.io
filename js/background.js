(function() {
    const BING_IMAGES = [
        'BeijingHeijingCn',
        'KirkilaiTowerCn', 
        'SarekSwedenCn',
        'HallstattCn',
        'MilfordSoundCn',
        'LofotenIslandsCn',
        'GreatBarrierReefCn',
        'MontSaintMichelCn'
    ];
    
    let currentIndex = 0;
    let isPreloading = false;
    
    function getImageUrl(id, size = 320) {
        return `https://www.bing.com/th?id=OHR.${id}&pid=hp&w=${size}`;
    }
    
    function getRandomImage() {
        const id = BING_IMAGES[Math.floor(Math.random() * BING_IMAGES.length)];
        return getImageUrl(id, 320);
    }
    
    function setWallpaper(url) {
        document.body.style.backgroundImage = `url('${url}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundRepeat = 'no-repeat';
    }
    
    function preloadNext() {
        if (isPreloading) return;
        isPreloading = true;
        
        const img = new Image();
        img.src = getRandomImage();
        img.onload = function() {
            isPreloading = false;
            if (img.src !== document.body.style.backgroundImage.replace(/^url\(['"]|['"]\)$/g, '')) {
                setWallpaper(img.src);
            }
            setTimeout(preloadNext, 10000);
        };
        img.onerror = function() {
            isPreloading = false;
            setTimeout(preloadNext, 2000);
        };
    }
    
    function init() {
        setWallpaper(getRandomImage());
        setTimeout(preloadNext, 10000);
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    window.BackgroundImageAPI = {
        setCustom: function(url) {
            setWallpaper(url);
        },
        refresh: function() {
            setWallpaper(getRandomImage());
        },
        setIndex: function(index) {
            if (index >= 0 && index < BING_IMAGES.length) {
                setWallpaper(getImageUrl(BING_IMAGES[index]));
            }
        }
    };
})();
