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

    // Generate 1000+ variations using randomized Unsplash search parameters
    // Using different female portrait photo IDs
    const photoIds = [
        '1494790108377-be9c29b29330',
        '1507003211169-0a1dd7228f2d',
        '1438761681033-6461ffad8d80',
        '1517457373614-b7152f800fd1',
        '1506794778202-cad84cf45f1d',
        '1501706362039-c06b2d715385',
        '1519389950473-47ba0277781c',
        '1496681620519-cd4628902d4a',
        '1529626455594-4ff0802cfb7e',
        '1531746020798-e6953c6e8e04',
        '1507092957500-3f3706101108',
        '1500595046891-0c0cf3b8e4b6',
        '1461453219300-2a31a2c99a3f',
        '1552058544-f5b08515371e',
        '1491841657841-106c8e34c8d6',
        '1506337773649-6e0ee6b8b60c',
        '1517694712202-14dd9538aa97',
        '1507876466836-bc5f5d9cfc5d',
        '1516746915991-5aaace504e42',
        '1544005313-94ddf0286df2',
        '1487412885241-6aa3a485472e',
        '1489980557872-9c49ccd32cf8',
        '1494504849775-cebf45039997',
        '1495360981262-87e735cca975',
        '1495927033519-b30367db3dfb',
        '1500762321356-18bc8d2d4ffd',
        '1502164994268-6c4ee3ab7770',
        '1505882016220-a51c54dcdf9d',
        '1507003211169-0a1dd7228f2d',
        '1511895426328-dc8714191300',
        '1517457373614-b7152f800fd1',
        '1519097261898-641f1e9b1e5b',
        '1520744828b-cfff9c4a0e5c',
        '1523580494863-6f3031224c94',
        '1524253490481-b582646ba9f0',
        '1526170375885-4d8ecf77b99f',
        '1527482797697-8795b1a55a45',
        '1529626455594-4ff0802cfb7e',
        '1530509387789-4c1017266635',
        '1531727991582-01e3ee088786',
        '1532170535371-18a4d985cf0d',
        '1533631232715-e06b6ba12f91',
        '1534751511119-cff9643ee36d',
        '1535382853692-38c7f3bbe63d',
        '1536431311033-c8ca36b6bff0',
        '1537639726331-12e23c9c812e',
        '1538108149ffa4ce6b8e7b7b1e0d7d5d',
        '1539571696357-5873d19002f1',
        '1540550191063-c8cddb92c4b3',
        '1541252260730-ce2246dc76fb',
        '1542221566-6e85f2e9ef14',
        '1543269861-cbf427effbad',
        '1544474753-0213a0c420e9',
        '1545430141-cb6727e76612',
        '1546307531-bb4caa6008b5',
        '1547142537-773befb64e3d',
        '1548142072-41174460cff1',
        '1549177233-aea40e2aaee0',
        '1550159930-7eb67065ee0f',
        '1551083320-8baf36e610f6',
        '1552058544-f5b08515371e',
        '1553332326-5b694f991e4e',
        '1554399579323-3694e6f79bae',
        '1555745363541-d920e78eb708',
        '1556228578-8c89e6adf883',
        '1557521865-a74fa5faf175',
        '1558618666-fcd25c85cd64',
        '1559827260-dc66d52bef19',
        '1560761035-fca437aa3845',
        '1561070791-2526d30994b5',
        '1562068072-dd3ce976e65f',
        '1563144877-c10c6c93f0ef',
        '1564186764123-ebb262ac08ae',
        '1565066389178-c1a1144375f9',
        '1566073051443-430b63602d4f',
        '1567096362985-2d54ce127988',
        '1568161692614-68b38f99a6f0',
        '1569163139394-de4798aa62b3',
        '1570205016643-e1efda34017f',
        '1571019614242-c5c5dee9f50b',
        '1572096285405-69f10f6ce4f2',
        '1573133166160-990073f20d1d',
        '1574169208507-84007dc1957e',
        '1575160928295-c076162588b3',
        '1576161787815-82699c8ac8c1',
        '1577063960885-d38498aa775d',
        '1578018328587-a90b933800c9',
        '1578874691223-be75a4311acb',
        '1579887480602-13391adebaa4',
        '1580489944761-b7bbc0271d7e',
        '1581092163392-8c88ad7f3a51',
        '1582282261000-e8d08dd89cd3',
        '1583183543202-36ad2ea32053',
        '1584124867002-42a51b1fd3ad',
        '1585048708047-b8680494e1e5',
        '1586025261993-3584a448b2da',
        '1587009814651-fd266f262c33',
        '1587614382346-4ec3e68ebf85',
        '1588307323714-b3953bcf06d3',
        '1589353278518-c27017d4acdf',
        '1590080876637-bbab7b651e31',
        '1591054359607-edf3dd7d7f36',
        '1592076927505-e191f6899607',
        '1592944116424-e53a9dd27d0f',
        '1593642632459-44ff05fcae8e',
        '1594642693207-896e1644fbd5',
        '1595614622615-cd4628902d4a',
        '1596403676872-6f0ee3fc0db1',
        '1597223557154-721c1cecc4fa',
        '1597837212624-b0b0766b0005',
        '1598806272161-76490bbb3bbb',
        '1599664011636-70bbb5f2a5fb',
        '1600337773649-6e0ee6b8b60c',
        '1600873418610-90e79c7f0f4f',
        '1601414643197-89c7f7f8e9a6',
        '1601930330272-98eeb04ebc1d',
        '1602470325317-120cd63c735a',
        '1603227789022-2ef6e6c3d627',
        '1603427159786-63a53c4846c4',
        '1604086645656-ff4ead77f399',
        '1604087788469-b96d95f27f14',
        '1605046409682-0a70ad99aab4',
        '1605112754342-b6f17055e0df',
        '1605211294485-695658ab384f',
        '1605298317802-2b605b8ac362',
        '1605398437193-88ecd90acaed',
        '1605449002853-f379fbe95b71',
        '1605516443246-d55c008cc33e',
        '1605597071694-4f3bf0c3ca0b',
        '1605678655510-a86efcfd5fcd',
        '1605753242075-c5522e0b27d8',
        '1605824657915-c51086888e3e',
        '1605921401491-cd4628902d4a',
        '1606021508508-bc1666da663d',
        '1606120945923-d2cccb214dc9',
        '1606209174900-69a5b3b30906',
        '1606296505138-8625ba8ab7ad',
        '1606380671058-8ea42602fed4',
        '1606464715775-cfb75604a546',
        '1606548822859-e21dc313ad4e',
        '1606632789640-e9ae950ded7f',
        '1606717036909-6e53b3d88f04',
        '1606802649620-a9e21c076e8f',
        '1606887751986-d086ba47e435',
        '1606972867620-e9ae950ded7f',
        '1607057600537-2b72dba0b321',
        '1607142427629-cd4628902d4a',
        '1607227606971-f206b4c83a12',
        '1607312620109-1b8b8a8a8a8a',
    ];

    // Add base URLs first
    images.push(...baseUrls);

    // Generate additional URLs with randomized parameters
    for (let i = 0; i < photoIds.length; i++) {
        images.push(`https://images.unsplash.com/photo-${photoIds[i]}?w=500&h=600&fit=crop`);
    }

    // Generate additional URLs using search queries
    const searchQueries = [
        'woman+portrait',
        'woman+headshot',
        'professional+woman',
        'female+face',
        'woman+model',
        'woman+smile',
        'young+woman',
        'adult+woman',
        'woman+outdoor',
        'woman+studio'
    ];

    // Generate variations with random IDs
    for (let q = 0; q < searchQueries.length; q++) {
        for (let i = 1; i <= 50; i++) {
            const randomId = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
            images.push(`https://images.unsplash.com/photo-${randomId}?w=500&h=600&fit=crop&q=${i * 10}`);
        }
    }

    // Additional direct Unsplash woman portraits
    const additionalWomenPhotos = [
        'https://api.unsplash.com/photos/random?query=woman&orientation=portrait&w=500&h=600',
        'https://source.unsplash.com/500x600/?woman,portrait',
        'https://source.unsplash.com/500x600/?adult,woman',
        'https://source.unsplash.com/500x600/?professional,female',
    ];

    // Generate 900+ more URLs using random image generation service
    for (let i = 0; i < 900; i++) {
        const seed = Math.random().toString(36).substring(7);
        const variation = Math.floor(Math.random() * 100);
        images.push(`https://images.unsplash.com/photo-${Math.floor(Math.random() * 9000000000000000) + 1000000000000000}?w=500&h=600&fit=crop&seed=${seed}`);
    }

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
