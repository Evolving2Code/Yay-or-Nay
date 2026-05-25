// Sample image URLs - using diverse, attractive stock photos
const images = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1496681620519-cd4628902d4a?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=600&fit=crop'
];

class YayOrNayApp {
    constructor() {
        this.yayCount = 0;
        this.nayCount = 0;
        this.yayImages = [];
        this.nayImages = [];
        this.currentImageIndex = 0;
        this.currentImage = '';
        
        this.initElements();
        this.attachEventListeners();
        this.loadFromLocalStorage();
        this.displayNextImage();
    }

    initElements() {
        this.personImage = document.getElementById('personImage');
        this.yayCountEl = document.getElementById('yayCount');
        this.nayCountEl = document.getElementById('nayCount');
        this.yayBtn = document.getElementById('yayBtn');
        this.nayBtn = document.getElementById('nayBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.toggleYaysBtn = document.getElementById('toggleYaysBtn');
        this.toggleNaysBtn = document.getElementById('toggleNaysBtn');
        this.modal = document.getElementById('resultsModal');
        this.closeBtn = document.getElementById('closeBtn');
        this.resultsTitle = document.getElementById('resultsTitle');
        this.resultsList = document.getElementById('resultsList');
    }

    attachEventListeners() {
        this.yayBtn.addEventListener('click', () => this.handleYay());
        this.nayBtn.addEventListener('click', () => this.handleNay());
        this.nextBtn.addEventListener('click', () => this.displayNextImage());
        this.toggleYaysBtn.addEventListener('click', () => this.showYays());
        this.toggleNaysBtn.addEventListener('click', () => this.showNays());
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
    }

    displayNextImage() {
        this.currentImageIndex = Math.floor(Math.random() * images.length);
        this.currentImage = images[this.currentImageIndex];
        this.personImage.src = this.currentImage;
        
        // Add animation
        this.personImage.style.animation = 'none';
        setTimeout(() => {
            this.personImage.style.animation = 'fadeIn 0.5s ease-out';
        }, 10);
    }

    handleYay() {
        this.yayCount++;
        this.yayImages.push(this.currentImage);
        this.updateStats();
        this.saveToLocalStorage();
        this.animateButton(this.yayBtn);
        this.displayNextImage();
    }

    handleNay() {
        this.nayCount++;
        this.nayImages.push(this.currentImage);
        this.updateStats();
        this.saveToLocalStorage();
        this.animateButton(this.nayBtn);
        this.displayNextImage();
    }

    updateStats() {
        this.yayCountEl.textContent = this.yayCount;
        this.nayCountEl.textContent = this.nayCount;
        
        // Animate the numbers
        this.yayCountEl.style.transform = 'scale(1.2)';
        this.nayCountEl.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
            this.yayCountEl.style.transform = 'scale(1)';
            this.nayCountEl.style.transform = 'scale(1)';
        }, 300);
    }

    animateButton(button) {
        button.style.transform = 'scale(1.15)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }

    showYays() {
        this.resultsTitle.textContent = `👍 Yays (${this.yayCount})`;
        this.displayResults(this.yayImages);
    }

    showNays() {
        this.resultsTitle.textContent = `👎 Nays (${this.nayCount})`;
        this.displayResults(this.nayImages);
    }

    displayResults(images) {
        this.resultsList.innerHTML = '';
        
        if (images.length === 0) {
            this.resultsList.innerHTML = '<p style="grid-column: 1/-1; color: #00bcd4; font-size: 1.2em; padding: 40px 20px;">No ratings yet. Start rating to see results!</p>';
        } else {
            images.forEach((img) => {
                const item = document.createElement('div');
                item.className = 'result-item';
                item.innerHTML = `<img src="${img}" alt="Rated person">`;
                item.addEventListener('click', () => this.enlargeImage(img));
                this.resultsList.appendChild(item);
            });
        }
        
        this.openModal();
    }

    enlargeImage(img) {
        // Create enlarged view
        const enlarged = document.createElement('div');
        enlarged.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            cursor: pointer;
        `;
        
        const imgEl = document.createElement('img');
        imgEl.src = img;
        imgEl.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 15px;
            box-shadow: 0 0 50px rgba(255, 23, 68, 0.5);
            animation: slideUp 0.3s ease-out;
        `;
        
        enlarged.appendChild(imgEl);
        document.body.appendChild(enlarged);
        
        enlarged.addEventListener('click', () => {
            enlarged.style.animation = 'slideDown 0.3s ease-in';
            setTimeout(() => enlarged.remove(), 300);
        });
    }

    openModal() {
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    saveToLocalStorage() {
        const data = {
            yayCount: this.yayCount,
            nayCount: this.nayCount,
            yayImages: this.yayImages,
            nayImages: this.nayImages
        };
        localStorage.setItem('yayOrNayData', JSON.stringify(data));
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('yayOrNayData');
        if (data) {
            const parsed = JSON.parse(data);
            this.yayCount = parsed.yayCount || 0;
            this.nayCount = parsed.nayCount || 0;
            this.yayImages = parsed.yayImages || [];
            this.nayImages = parsed.nayImages || [];
            this.updateStats();
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new YayOrNayApp();
});

// Add CSS animations dynamically if not already in stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.9); }
    }
    
    @keyframes fadeIn {
        from { 
            opacity: 0;
        }
        to { 
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);