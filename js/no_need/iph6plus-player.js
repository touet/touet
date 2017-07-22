    vimeowrap('player').setup({
        width: 550,
        height: 309,
        color: 'ea2c50',
        autoplay: false,
        portrait: false,
        title: true,
        byline: false,
        urls: [
            'https://vimeo.com/164116677',
			'https://vimeo.com/164384004',
			'https://vimeo.com/164380737',
			'https://vimeo.com/164116780',
			'https://vimeo.com/164116531'
        ],
        plugins: {
            'carousel': {
                 width: 550,
                 height: 150,
                 offsetx: 60,
                 offsety: 20,
                 visible: 5,
                 autoplay: true,
                 thumb: {
                     width: 100,
                     height: 56,   
                     quality: 'large'
                 }
            }
        }
    });
						