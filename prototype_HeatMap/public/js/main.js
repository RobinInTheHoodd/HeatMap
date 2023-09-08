document.addEventListener('DOMContentLoaded', () => {
    const heatmapInstance = h337.create({
        container: document.querySelector('#heatmap'),
        radius: 10
    });

    const points = [];
    const max = 100;
    const width = 500;
    const height = 500;

    while (points.length < 100) {
        const val = Math.floor(Math.random() * 100);
        const point = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            value: val
        };
        points.push(point);
    }

    const data = {
        max: max,
        data: points
    };

    heatmapInstance.setData(data);
});
