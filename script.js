// Generate diverse woman portrait URLs - 1000+ unique women aged 18+
// Using randomized parameters with professional portrait APIs
function generateImageUrls() {
    const images = [];
    
    // Base Unsplash URLs with women portraits (18+ professional photos)
    const baseUrls = [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1496681620519-cd4628902d4a?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507092957500-3f3706101108?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500595046891-0c0cf3b8e4b6?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1461453219300-2a31a2c99a3f?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552058544-f5b08515371e?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1491841657841-106c8e34c8d6?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506337773649-6e0ee6b8b60c?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507876466836-bc5f5d9cfc5d?w=500&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516746915991-5aaace504e42?w=500&h=600&fit=crop',
    ];

    // Use Unsplash's random API which reliably returns valid images
    // This is much more reliable than generating random photo IDs
    for (let i = 0; i < 980; i++) {
        // Using the random endpoint with query parameters for diversity
        images.push(`https://source.unsplash.com/500x600/?woman,portrait&sig=${i}`);
    }

    // Add base URLs for better variety
    images.push(...baseUrls);

    return images;
}

const images = generateImageUrls();

class YayOrNayApp {
    constructor() {
        this.yayCount = 0;
        this.nayCount = 0;
        this.yayImages = [];
        this.nayImages = [];
        this.currentImageIndex = 0;
        this.currentImage = '';
        this.searchResults = [];
        this.currentSearchResultIndex = 0;
        this.isSearchMode = false;
        
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
        this.searchInput = document.getElementById('searchInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.platformRadios = document.querySelectorAll('input[name="platform"]');
        this.imageInfo = document.getElementById('imageInfo');
        this.imageSource = document.getElementById('imageSource');
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
        this.searchBtn.addEventListener('click', () => this.handleSearch());
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });
    }

    handleSearch() {
        const query = this.searchInput.value.trim();
        const platform = document.querySelector('input[name="platform"]:checked').value;
        
        if (!query) {
            alert('Please enter a username to search');
            return;
        }

        this.searchResults = [];
        this.isSearchMode = true;
        this.currentSearchResultIndex = 0;

        if (platform === 'instagram') {
            this.searchInstagram(query);
        } else if (platform === 'tiktok') {
            this.searchTikTok(query);
        }
    }

    searchInstagram(username) {
        // Construct Instagram URLs for the user
        const instagramUrls = [
            `https://www.instagram.com/${username}/`,
            `https://www.instagram.com/${username}/?hl=en`,
        ];

        // Fetch Instagram profile images using various methods
        const imageUrls = [];

        // Method 1: Direct Instagram profile picture from their CDN
        imageUrls.push(`https://instagram.com/${username}/media/?__a=1`);
        
        // Method 2: Using Instagram's API endpoint for profile picture
        imageUrls.push(`https://www.instagram.com/${username}/`);

        // Create placeholder messages for Instagram results
        this.searchResults = [
            {
                url: `https://www.instagram.com/${username}/`,
                source: `Instagram: @${username}`,
                type: 'instagram'
            },
            {
                url: `https://www.instagram.com/${username}/`,
                source: `Instagram Profile: @${username}`,
                type: 'instagram'
            }
        ];

        // Try to fetch actual profile images
        this.fetchInstagramImages(username).then(urls => {
            if (urls.length > 0) {
                this.searchResults = urls.map(url => ({
                    url: url,
                    source: `Instagram: @${username}`,
                    type: 'instagram',
                    displayUrl: url
                }));
            }
            this.displayNextImage();
        }).catch(err => {
            console.log('Could not fetch Instagram images, opening profile', err);
            // Open Instagram profile as fallback
            window.open(`https://www.instagram.com/${username}/`, '_blank');
            this.exitSearchMode();
        });
    }

    searchTikTok(username) {
        // Construct TikTok URLs for the user
        const tiktokUrls = [
            `https://www.tiktok.com/@${username}`,
            `https://www.tiktok.com/@${username}/?hl=en`,
        ];

        // Create placeholder messages for TikTok results
        this.searchResults = [
            {
                url: `https://www.tiktok.com/@${username}`,
                source: `TikTok: @${username}`,
                type: 'tiktok'
            },
            {
                url: `https://www.tiktok.com/@${username}`,
                source: `TikTok Profile: @${username}`,
                type: 'tiktok'
            }
        ];

        // Try to fetch actual profile images
        this.fetchTikTokImages(username).then(urls => {
            if (urls.length > 0) {
                this.searchResults = urls.map(url => ({
                    url: url,
                    source: `TikTok: @${username}`,
                    type: 'tiktok',
                    displayUrl: url
                }));
            }
            this.displayNextImage();
        }).catch(err => {
            console.log('Could not fetch TikTok images, opening profile', err);
            // Open TikTok profile as fallback
            window.open(`https://www.tiktok.com/@${username}`, '_blank');
            this.exitSearchMode();
        });
    }

    async fetchInstagramImages(username) {
        try {
            const response = await fetch(`https://www.instagram.com/${username}/?__a=1`);
            const data = await response.json();
            
            if (data.graphql && data.graphql.user) {
                const user = data.graphql.user;
                const images = [];

                // Get profile picture
                if (user.profile_pic_url_hd) {
                    images.push(user.profile_pic_url_hd);
                } else if (user.profile_pic_url) {
                    images.push(user.profile_pic_url);
                }

                // Get recent posts
                if (user.edge_user_to_photos_of_you && user.edge_user_to_photos_of_you.edges) {
                    user.edge_user_to_photos_of_you.edges.forEach(edge => {
                        if (edge.node.display_url) {
                            images.push(edge.node.display_url);
                        }
                    });
                }

                return images.slice(0, 20); // Return up to 20 images
            }
        } catch (error) {
            console.log('Instagram API not accessible, will open profile instead', error);
        }
        return [];
    }

    async fetchTikTokImages(username) {
        try {
            const response = await fetch(`https://www.tiktok.com/@${username}`);
            const html = await response.text();
            
            // Parse profile image URL from HTML
            const profilePicMatch = html.match(/"avatarLarger":"([^"]+)"/);
            const images = [];

            if (profilePicMatch && profilePicMatch[1]) {
                images.push(profilePicMatch[1]);
            }

            return images;
        } catch (error) {
            console.log('TikTok fetch not accessible, will open profile instead', error);
        }
        return [];
    }

    exitSearchMode() {
        this.isSearchMode = false;
        this.searchResults = [];
        this.searchInput.value = '';
        this.displayNextImage();
    }

    displayNextImage() {
        if (this.isSearchMode && this.searchResults.length > 0) {
            // Display search results
            const result = this.searchResults[this.currentSearchResultIndex];
            
            if (result.displayUrl) {
                // Direct image URL
                this.personImage.src = result.displayUrl;
                this.personImage.alt = result.source;
                this.imageInfo.classList.remove('hidden');
                this.imageSource.textContent = result.source;
            } else {
                // Social media profile link
                this.personImage.style.display = 'none';
                this.imageInfo.classList.add('hidden');
                alert(`Opening ${result.source}\n\nPlease select images from their profile.`);
                window.open(result.url, '_blank');
                this.exitSearchMode();
                return;
            }

            this.currentSearchResultIndex = (this.currentSearchResultIndex + 1) % this.searchResults.length;
        } else {
            // Display random images from default collection
            this.currentImageIndex = Math.floor(Math.random() * images.length);
            this.currentImage = images[this.currentImageIndex];
            this.personImage.src = this.currentImage;
            this.personImage.style.display = 'block';
            this.imageInfo.classList.add('hidden');
        }
        
        // Add animation
        this.personImage.style.animation = 'none';
        setTimeout(() => {
            this.personImage.style.animation = 'fadeIn 0.5s ease-out';
        }, 10);
    }

    handleYay() {
        if (this.isSearchMode && this.searchResults.length > 0) {
            const result = this.searchResults[(this.currentSearchResultIndex - 1 + this.searchResults.length) % this.searchResults.length];
            if (result.displayUrl) {
                this.yayImages.push(result.displayUrl);
            }
        } else {
            this.yayImages.push(this.currentImage);
        }
        
        this.yayCount++;
        this.updateStats();
        this.saveToLocalStorage();
        this.animateButton(this.yayBtn);
        this.displayNextImage();
    }

    handleNay() {
        if (this.isSearchMode && this.searchResults.length > 0) {
            const result = this.searchResults[(this.currentSearchResultIndex - 1 + this.searchResults.length) % this.searchResults.length];
            if (result.displayUrl) {
                this.nayImages.push(result.displayUrl);
            }
        } else {
            this.nayImages.push(this.currentImage);
        }
        
        this.nayCount++;
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
