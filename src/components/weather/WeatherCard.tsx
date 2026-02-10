import { Menu, Wind, Droplet, Sun, Cloud, CloudRain, MapPin } from 'lucide-react';

const WeatherCard = () => {
    return (
        <div className="WeatherCard min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 relative overflow-hidden">
            <div className="locationStat flex items-center justify-between mb-8">
                <span className='text-lg'>Mumbai, India</span>
                <Menu />
            </div>

            <div className="weatherDetails flex flex-col lg:flex-row items-center justify-center gap-12 mb-12 mt-16">
                <div className='icon'>
                    <Sun />
                </div>
                <h2>Sunny</h2>
                <h1>22C</h1>
                <span>Tuesday</span>
            </div>
            <div className="bottomArea">
                <div className="wind">
                    <div className="windIcon">
                        <Wind />
                    </div>
                    <div className="humidityInfo">
                        <h1>11MPH</h1>
                        <p>Wind</p>
                    </div>
                </div>
                <div className="feelsLike">
                    <h1>18C</h1>
                    <p>Feels Like</p>
                </div>
                <div className="humidityLevel">
                    <div className="humidityIcon">
                        <Droplet />
                    </div>
                    <div className="humidityInfo">
                        <h1>68%</h1>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherCard