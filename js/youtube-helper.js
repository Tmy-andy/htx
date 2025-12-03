// Helper functions để lấy thông tin video từ YouTube
class YouTubeHelper {
    // Lấy video ID từ URL YouTube
    static getVideoId(url) {
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
            /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
        ];
        
        for (let pattern of patterns) {
            const match = url.match(pattern);
            if (match) return match[1];
        }
        return null;
    }

    // Lấy thumbnail URL từ video ID
    static getThumbnailUrl(videoId, quality = 'hqdefault') {
        // Các quality options: default, mqdefault, hqdefault, sddefault, maxresdefault
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

    // Lấy thông tin video từ oEmbed API (không cần API key)
    static async getVideoInfo(videoUrl) {
        try {
            const videoId = this.getVideoId(videoUrl);
            if (!videoId) {
                throw new Error('Invalid YouTube URL');
            }

            // Sử dụng oEmbed API (không cần API key)
            const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
            
            const response = await fetch(oEmbedUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch video info');
            }

            const data = await response.json();
            
            return {
                videoId: videoId,
                title: data.title,
                author: data.author_name,
                thumbnail: this.getThumbnailUrl(videoId),
                embedUrl: `https://www.youtube.com/embed/${videoId}`
            };
        } catch (error) {
            console.error('Error fetching video info:', error);
            return null;
        }
    }

    // Lấy thông tin nhiều video cùng lúc
    static async getMultipleVideosInfo(videoUrls) {
        const promises = videoUrls.map(url => this.getVideoInfo(url));
        const results = await Promise.all(promises);
        return results.filter(result => result !== null);
    }

    // Tạo thumbnail fallback nếu maxresdefault không tồn tại
    static getThumbnailWithFallback(videoId) {
        const img = new Image();
        const maxres = this.getThumbnailUrl(videoId, 'maxresdefault');
        const hqdefault = this.getThumbnailUrl(videoId, 'hqdefault');
        
        return new Promise((resolve) => {
            img.onload = () => {
                // Nếu ảnh có width < 200px, đó là placeholder, dùng hqdefault
                if (img.width < 200) {
                    resolve(hqdefault);
                } else {
                    resolve(maxres);
                }
            };
            img.onerror = () => resolve(hqdefault);
            img.src = maxres;
        });
    }
}

// Utility function để demo
async function testYouTubeHelper() {
    const testUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    console.log('Testing YouTube Helper with URL:', testUrl);
    
    const info = await YouTubeHelper.getVideoInfo(testUrl);
    console.log('Video Info:', info);
    
    return info;
}
