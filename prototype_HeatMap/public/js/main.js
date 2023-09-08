document.addEventListener('DOMContentLoaded', () => {

    // Initialisez une carte Leaflet
    const map = L.map('mapid').setView([45.50884, -73.58781], 10); // Coordonnées pour Montréal
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Configuration pour la couche de heatmap
    const heatmapConfig = {
        radius: 0.01,
        maxOpacity: 0.8, 
        scaleRadius: true, 
        useLocalExtrema: true,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'value'
    };

    const heatmapLayer = new HeatmapOverlay(heatmapConfig);
    map.addLayer(heatmapLayer);

    let points = [];
    const max = 100;

    function generateRandomPoint() {
        const val = Math.floor(Math.random() * 100);
        return {
            lat: 45.50884 + (Math.random() - 0.5) * 0.1, 
            lng: -73.58781 + (Math.random() - 0.5) * 0.1,
            value: val
        };
    }

    function updateHeatmap() {
        const data = { max: max, data: points };  
        heatmapLayer.setData(data);
    }

    let intervalId = null;

    document.getElementById('advanceTime').addEventListener('click', () => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            points.push(generateRandomPoint());
            updateHeatmap();
        }, 1000);
    });

    document.getElementById('reverseTime').addEventListener('click', () => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            points.pop();
            updateHeatmap();
        }, 1000);
    });

    document.getElementById('pause').addEventListener('click', () => {
        clearInterval(intervalId);
    });
});