import { useState, useEffect } from 'react';

import Loader from "react-loader-spinner";

import StarterScreen from './StarterScreen';
import DescWindow from './DescWindow';
import WeatherWindow from './WeatherWindow';
import SearchField from './SearchField';
import EventsWindow from './EventsWindow';

const App = () => {
    const [isLoading, setIsLoading] = useState('Initial');
    const [address, setAddress] = useState('');
    const [coords, setCoords] = useState({});

    const [city, setCity] = useState({});
    const [weather, setWeather] = useState({});
    const [events, setEvents] = useState({});

    useEffect(() => {
        const getData = async () => {
            await Promise.allSettled([getCity(), getWeather(), getEvents()]).
                then(results => {
                    console.log(results)
                    setIsLoading(false);
                });
        }

        if (Object.keys(coords).length && address) {
            setIsLoading(true);

            getData();
        }
    }, [coords, address]);

    const fetchData = async (url) => {
        try {
            const result = await fetch(url);
            console.log(result)
            
            if (!result.ok) {
                return { error: `${result.status} ${result.statusText}` };
            }
            
            return result.json();
        } catch(error) {
            console.error('Error', error);
        }
    }

    const getCity = async () => {
        const wikiPage = await fetchData(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=search&utf8=&srsearch=${address}`);

        if (wikiPage && !('error' in wikiPage)) {
            const pageId = wikiPage.query.search[0].pageid;

            const cityDescQuery = await fetchData(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=&pageids=${pageId}`);
            const title = cityDescQuery.query.pages[pageId].title;
            const description = cityDescQuery.query.pages[pageId].extract;
    
            const cityImgQuery = await fetchData(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=pageimages&&piprop=original&titles=${title}`);
            const image = cityImgQuery.query.pages[pageId].original.source;
    
            setCity({
                ...city,
                title,
                description,
                image,
                error: "",
            });
        } else {
            setCity({
                ...city,
                error: wikiPage?.error || 'Unknown error',
            })
        }
    }

    const getWeather = async () => {
        const weatherData = await fetchData(`https://api.darksky.net/forecast/3ebf0a35b462ec06a8299fc803dfe539/${coords.lat},${coords.lng}?units=si&exclude=minutely,hourly,daily,alerts,flags`);

        if (weatherData && !('error' in weatherData)) {
            const temperature = Math.round(weatherData.currently.temperature) + "\xB0C";
            const icon = weatherData.currently.icon.replace(/-/g, "_").toUpperCase();
    
            setWeather({
                ...weather,
                temperature,
                icon,
                error: "",
            });
        } else {
            setWeather({
                ...weather,
                error: weatherData?.error || 'Unknown error',
            });
        }
    }

    const getEvents = async () => {
        const eventsData = await fetchData(`http://api.eventful.com/json/events/search?app_key=pMZVPqg7vM3CW3fM&where=${coords.lat},${coords.lng}&within=25&page_size=5`);

        if (eventsData && !('error' in eventsData)) {
            const eventsArr = eventsData.events;

            setEvents({
                eventsArr,
                error: "",
            });
        } else {
            setEvents({
                ...events,
                error: eventsData?.error || 'Unknown error',
            });
        }
    }

    // if (Object.keys(city).length && Object.keys(weather).length && Object.keys(events).length) {
    if (isLoading === 'Initial') {
        return (
            <>
                <SearchField
                    setAddress={setAddress}
                    setCoords={setCoords}
                />
                <StarterScreen />
            </>
        )
    } else if (isLoading) {
        return (
            <>
                <SearchField
                    setAddress={setAddress}
                    setCoords={setCoords}
                />
                <div style={{'textAlign': 'center', 'marginTop': '10vh'}}>
                    <Loader
                        type="Oval"
                        color="grey"
                        height={200}
                        width={200}
                    />
                </div>
            </>
        )
    }

    return (
        <>
            <SearchField
                setAddress={setAddress}
                setCoords={setCoords}
            />
            <WeatherWindow
                weather={weather}
            />
            <DescWindow
                city={city}
            />
            <EventsWindow
                events={events}
            />
        </>
    );
}

export default App;
