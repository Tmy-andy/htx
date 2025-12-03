// File riêng cho VideosManager với tính năng tự động lấy thông tin YouTube
class VideosManager {
    constructor() {
        this.loadingVideos = false;
        this.videosLoaded = false;
    }

    async initializeVideos() {
        if (this.videosLoaded) return;
        
        console.log('🎬 Đang tải thông tin video...');
        
        try {
            for (let i = 0; i < appData.videos.length; i++) {
                const video = appData.videos[i];
                
                // Lấy video ID và set thumbnail ngay lập tức
                const videoId = YouTubeHelper.getVideoId(video.url);
                if (videoId) {
                    // Set thumbnail ngay từ CDN YouTube (không cần API)
                    video.thumbnail = YouTubeHelper.getThumbnailUrl(videoId);
                    video.url = `https://www.youtube.com/embed/${videoId}`;
                }
                
                // Nếu chưa có title, thử lấy từ API (optional)
                if (!video.title && videoId) {
                    try {
                        const videoInfo = await YouTubeHelper.getVideoInfo(`https://www.youtube.com/watch?v=${videoId}`);
                        if (videoInfo) {
                            video.title = videoInfo.title;
                            video.description = video.description || `Video từ kênh ${videoInfo.author}`;
                        }
                    } catch (error) {
                        // Nếu API lỗi, dùng title mặc định
                        video.title = video.title || `Video ${i + 1}`;
                        video.description = video.description || '';
                    }
                } else if (!video.title) {
                    video.title = `Video ${i + 1}`;
                }
            }
            
            this.videosLoaded = true;
            console.log('✅ Đã load video!');
            
        } catch (error) {
            console.error('❌ Lỗi:', error);
        }
    }

    async render() {
        var content = document.getElementById('panelContent');
        content.innerHTML = `
            <div id="videoLoadingMessage" style="text-align: center; padding: 20px; color: #7f8c8d;">
                <i class="fas fa-spinner fa-spin"></i> Đang tải thông tin video...
            </div>
            <div class="videos-grid" id="videosGrid" style="display: none;"></div>
        `;
        
        // Tự động load thông tin video nếu chưa load
        if (!this.videosLoaded) {
            await this.initializeVideos();
        }
        
        // Hiển thị danh sách video
        const loadingMsg = document.getElementById('videoLoadingMessage');
        const grid = document.getElementById('videosGrid');
        if (loadingMsg) loadingMsg.style.display = 'none';
        if (grid) grid.style.display = 'grid';
        
        this.renderVideos();
    }

    renderVideos() {
        var grid = document.getElementById('videosGrid');
        if (!grid) return;
        
        var html = '';
        for (var i = 0; i < appData.videos.length; i++) {
            var v = appData.videos[i];
            const title = v.title || 'Đang tải...';
            const thumbnail = v.thumbnail || 'https://via.placeholder.com/400x300?text=Loading...';
            const description = v.description || '';
            
            html += `
                <div class="video-card" onclick="videosManager.playVideo('${v.id}')">
                    <div class="video-thumbnail">
                        <img src="${thumbnail}" alt="${title}" onerror="this.src='https://via.placeholder.com/400x300?text=Video+Thumbnail'">
                    </div>
                    <h3 class="video-title">${title}</h3>
                    <p class="video-description">${description}</p>
                </div>
            `;
        }
        grid.innerHTML = html;
    }

    playVideo(videoId) {
        var video = appData.videos.find(function(v) { return v.id === videoId; });
        if (!video) return;
        
        var modal = document.getElementById('productModal');
        var modalBody = document.getElementById('modalBody');
        
        const title = video.title || 'Video';
        const description = video.description || '';
        
        var html = `
            <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin-bottom:20px;">
                <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" 
                    src="${video.url}?autoplay=1" 
                    allowfullscreen 
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture">
                </iframe>
            </div>
            <h2 class="detail-title">${title}</h2>
            <p class="detail-description">${description}</p>
        `;
        
        modalBody.innerHTML = html;
        modal.classList.add('active');
    }

    // Hàm để cập nhật lại tất cả video (có thể gọi từ console)
    async refreshAllVideos() {
        console.log('🔄 Đang làm mới thông tin tất cả video...');
        this.videosLoaded = false;
        
        // Reset thông tin video
        appData.videos.forEach(v => {
            if (v.url) {
                delete v.title;
                delete v.thumbnail;
                delete v.description;
            }
        });
        
        await this.initializeVideos();
        this.renderVideos();
        console.log('✅ Đã làm mới thông tin video!');
    }
}

var videosManager = new VideosManager();
