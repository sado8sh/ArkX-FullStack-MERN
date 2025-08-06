const http = require('http');
const { URL } = require('url');

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

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  const cityParam = url.searchParams.get('city');

  res.setHeader('Content-Type', 'application/json');

  if (path === '/weather') {
    if (!cityParam) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ error: 'Missing city parameter' }));
    }

    const city = findCity(cityParam);
    if (!city) {
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: `City "${cityParam}" not found` }));
    }

    try {
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;
      const response = await fetch(weatherUrl);
      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      const temperature = data.current_weather.temperature;

      res.statusCode = 200;
      return res.end(JSON.stringify({
        city: city.name,
        temperature: `${temperature}°C`
      }));
    } catch (err) {
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: 'Failed to fetch weather data' }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🌐 Server running at http://localhost:${PORT}`);
});