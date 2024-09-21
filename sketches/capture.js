let node = document.body;

document.addEventListener('keypress', function (event) {
    if (event.key === 's' || event.key === 'S') {
        //console.log('screenshotting')

        htmlToImage.toJpeg(document.body, {
            //skipFonts: true,
            preferredFontFormat: 'woff2',
            quality: 0.95
        })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'lunisolance.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }
});