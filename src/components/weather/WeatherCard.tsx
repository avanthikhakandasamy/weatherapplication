import { Menu, Circle, Wind, Droplet } from 'lucide-react';

const WeatherCard = () => {
    return (
        <div className="WeatherCard">
            <div className="locationStat">
                Mumbai, India
                <Menu />
            </div>
            <div className="weatherDetails">
                <div className='icon'>
                    <Circle />
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