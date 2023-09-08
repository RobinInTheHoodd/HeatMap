document.addEventListener('DOMContentLoaded', () => {
    // Initialisez une carte Leaflet
    const map = L.map('mapid').setView([45.50884, -73.58781], 8); // Coordonnées pour Montréal
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

    const points = [];
    const max = 100;
    const width = 500;
    const height = 500;

    while (points.length < 10) {
        const val = Math.floor(Math.random() * 100);
        const point = {
            lat: 45.50884 + (Math.random() - 0.5) * 0.1, // Générer des coordonnées aléatoires autour de Montréal
            lng: -73.58781 + (Math.random() - 0.5) * 0.1,
            value: val
        };
        points.push(point);
    }

    const data = {
        max: max,
        data: points
    };

    heatmapLayer.setData(data);
});
