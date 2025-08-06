const fs = require('fs/promises');

const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

const findCity = (name) => cities.find(c => c.name.toLowerCase() === name.toLowerCase());

const displayCityTemperature = async () => {
    try {
        const cityName = (await fs.readFile('input.txt', 'utf8')).trim();
        console.log(`📥 City from file: ${cityName}`);
        
        const city = findCity(cityName);
        if (!city) {
            console.error('❌ City not found in the list.');
            return;
        }
    
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
    
        const temperature = data.current_weather.temperature;
        const outputFile = `${city.name}.txt`;
        const outputContent = `🌡️ The temperature in ${city.name} is ${temperature}°C`;
    
        try {
            await fs.unlink(outputFile);
            console.log(`🗑️ Deleted existing file: ${outputFile}`);
        } catch (err) {
            if (err.code !== 'ENOENT') throw err; 
        }
    
        await fs.writeFile(outputFile, outputContent, 'utf8');
        console.log(`✅ Temperature saved to ${outputFile}`);
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
};

displayCityTemperature();