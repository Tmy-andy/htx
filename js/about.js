class AboutManager {
    render() {
        const content = document.getElementById('panelContent');
        let html = '<div class="about-content">';

        appData.about.sections.forEach(section => {
            html += `
                <div class="about-section">
                    <h2>${section.title}</h2>
                    <p>${section.content}</p>
                </div>
            `;
        });

        html += '<div class="about-section"><h2>Thành tích nổi bật</h2><div class="achievements">';
        appData.about.achievements.forEach(ach => {
            html += `
                <div class="achievement-box">
                    <div class="achievement-number">${ach.value}</div>
                    <div class="achievement-label">${ach.label}</div>
                </div>
            `;
        });
        html += '</div></div></div>';

        content.innerHTML = html;
    }
}

const aboutManager = new AboutManager();