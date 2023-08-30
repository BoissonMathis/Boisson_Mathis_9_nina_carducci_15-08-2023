(async () => {
    const sharp = require('sharp');

    await sharp('./assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash.webp')
        .resize(300, 139)
        .toFile('edward-cisneros-3_h6-1NPDGw-unsplash-300.webp')
})().catch(err => console.error(err.stack))

// 300×139, 1140×527, 1580×731, 1920×888, 2048×947