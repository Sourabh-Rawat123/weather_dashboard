# 🌤️ Weather App

A beautiful, responsive weather application that provides real-time weather information for any location worldwide. Built with vanilla JavaScript, HTML5, and CSS3.
## ✨ Features

### 🎯 Core Functionality

- **Real-time Weather Data** - Get current weather conditions for any city
- **Geolocation Support** - Automatically detect your location for instant weather updates
- **Search by City** - Search for weather in any city worldwide
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

### 🌟 Weather Information Displayed

- **Current Temperature** - Real-time temperature in Celsius
- **Weather Description** - Clear description of current conditions
- **Wind Speed** - Current wind speed in m/s
- **Humidity Level** - Atmospheric humidity percentage
- **Cloudiness** - Cloud coverage percentage
- **Country Flag** - Visual indicator of the location's country
- **Weather Icon** - Animated weather condition icons

### 🎨 UI/UX Features

- **Modern Glass-morphism Design** - Beautiful translucent UI elements
- **Smooth Animations** - Engaging transitions and hover effects
- **Tab-based Navigation** - Easy switching between "Your Weather" and "Search Weather"
- **Loading States** - Visual feedback during data fetching
- **Error Handling** - Graceful handling of network errors and invalid inputs

## 🛠️ Technologies Used

### Frontend

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with custom properties and animations
- **Vanilla JavaScript** - Core functionality and API interactions
- **Axios** - HTTP client for API requests

### APIs

- **OpenWeatherMap API** - Weather data provider
- **Flagcdn API** - Country flag images
- **Geolocation API** - Browser location services

### Design Features

- **Google Fonts (Poppins)** - Modern typography
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Custom Properties** - Maintainable styling
- **CSS Animations & Transitions** - Smooth user interactions

## 📋 Prerequisites

Before running this project, ensure you have:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls
- OpenWeatherMap API key (free tier available)

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Sourabh-Rawat123/weather-app.git
cd weather-app
```

### 2. Get API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate your API key

### 3. Configure API Key

Open `script.js` and replace the API key:

```javascript
const api_key = `YOUR_API_KEY_HERE`;
```

### 4. Run the Application

Simply open `index.html` in your web browser or use a local server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server

# Using PHP (if installed)
php -S localhost:8000
```

## 🎮 How to Use

### Getting Your Location's Weather

1. **Grant Location Access**: Click "Grant Access" to allow location detection
2. **Automatic Detection**: Your current weather will be displayed automatically
3. **View Details**: See temperature, humidity, wind speed, and more

### Searching for City Weather

1. **Switch to Search Tab**: Click on "Search Weather"
2. **Enter City Name**: Type any city name in the search box
3. **Get Results**: Click search or press Enter to view weather data

### Features Available

- **Real-time Updates**: Refresh to get latest weather data
- **Multiple Cities**: Search for weather in different cities
- **Detailed Information**: View comprehensive weather parameters

## 📁 Project Structure

```
weather-app/
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── assets/             # Static assets
│   ├── location.png    # Location icon
│   ├── search.png      # Search icon
│   ├── cloud.png       # Wind speed icon
│   ├── humidity.png    # Humidity icon
│   ├── clouds.png      # Cloudiness icon
│   └── download.gif    # Loading animation
└── .git/               # Git repository data
```

## 🔧 Configuration

### API Configuration

The app uses the OpenWeatherMap API. Key settings in `script.js`:

```javascript
const api_key = ``; // Replace with your key
const base_url = `https://api.openweathermap.org/data/2.5/weather`;
```

### Styling Customization

Main CSS variables in `style.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #f093fb;
  --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --border-radius: 20px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🌍 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- **Lightweight**: ~15KB total bundle size
- **Fast Loading**: Optimized images and minimal dependencies
- **Responsive**: Smooth performance on all devices
- **Efficient**: Minimal API calls with smart caching

## 🔒 Privacy & Security

- **No Data Storage**: Personal location data is not stored
- **Secure API Calls**: HTTPS-only API communication
- **Permission-based**: Location access requires user consent
- **No Tracking**: No analytics or tracking scripts

### Improvements

- [ ] **Performance Optimization** - Faster loading times
- [ ] **Enhanced Animations** - More engaging transitions
- [ ] **Accessibility** - Better screen reader support
- [ ] **PWA Support** - Install as mobile app

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Test thoroughly across different browsers
- Update documentation for new features
- Ensure responsive design compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author


- GitHub: [Sourabh-Rawat123](https://github.com/yourusername)


## 🙏 Acknowledgments

- **OpenWeatherMap** - Weather data API provider
- **Flagcdn** - Country flag images
- **Google Fonts** - Typography (Poppins font family)
- **Axios** - HTTP client library
- **CSS-Tricks** - Inspiration for modern CSS techniques

## 📊 API Usage

### OpenWeatherMap API Endpoints

```javascript
// Current Weather
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric

// By Coordinates
GET https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={key}&units=metric
```

### Rate Limits

- **Free Tier**: 1,000 calls/day, 60 calls/minute
- **Recommended**: Implement caching for better performance

## 🐛 Known Issues

- Location detection may not work on HTTP (requires HTTPS for production)
- Some older browsers may not support all CSS features
- API rate limits apply for free tier users
