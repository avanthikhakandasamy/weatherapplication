import { Menu, Wind, Droplet, Sun } from 'lucide-react';

const WeatherCard = () => {
    return (
        <div className="WeatherCard min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 relative overflow-hidden">
            <div className="locationStat flex items-center justify-between mb-8">
                <span className='text-lg'>Mumbai, India</span>
                <Menu />
            </div>

            <div className="weatherDetails flex flex-col lg:flex-row items-center justify-center gap-12 mb-12 mt-16">
                <div className='text-left flex-row'>
                    <h2 className='text-3xl tracking-wide opacity-80 mb-1'>Sunny</h2>
                    <h1 className='text-[8rem] font-light leading-none mb-2'>22°C</h1>
                    <span className='text-2xl tracking-wide opacity-80 mb-1'>Tuesday</span>
                </div>

                <div className='relative flex items-center justify-center'>
                    <div className='absolute inset-0 bg-linear-to-br from-amber-400/20 to-orange-500/20 blur-3xl rounded-full'></div>
                    <Sun className='w-80 h-80 stroke-1 text-amber-200 drop-shadow-2xl' />
                </div>
            </div>
            <div className="bottomArea">
                <div className="wind flex gap-6 mt-4 text-sm opacity-70">
                    <div className="windIcon">
                        <Wind className='w-4 h-4'/>
                    </div>
                    <div className="humidityInfo flex flex-col items-center gap-2">
                        <h1>11MPH</h1>
                        <p>Wind</p>
                    </div>
                </div>
                <div className="feelsLike">
                    <h1>18°C</h1>
                    <p>Feels Like</p>
                </div>
                <div className="wind">
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