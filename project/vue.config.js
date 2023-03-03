module.exports = {
    devServer: {
        proxy: {
            '/ahome': {
                target: 'https://api-v2.chuangkit.com',
                changeOrigin: true,
                pathRewrite: {
                    "^/ahome": '/'
                }
            },
            
            '/swiper': {
                target: 'https://pub-cdn-oss.chuangkit.com',
                changeOrigin: true,
                pathRewrite: {
                    "^/swiper": '/'
                }
            },
            '/abc': {
                target: 'https://api.chuangkit.com',
                changeOrigin: true,
                pathRewrite: {
                    "^/abc": '/'
                }
            },
        }
    }
}