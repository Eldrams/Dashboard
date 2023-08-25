fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then (data => {
        console.log(data)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author').innerHTML = `created by: ${data.user.first_name} ${data.user.last_name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1493130952181-47e36589f64d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI1MTg5OTY&ixlib=rb-4.0.3&q=85")`
    })

fetch("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('crypto-top').innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
        ` 
        document.getElementById('priceChange').innerHTML = `
        <ul>
            <li>Current price: $${data.market_data.current_price.usd} USD</li>
            <li>24 hour high: $${data.market_data.high_24h.usd} USD</li>
            <li>24-hour low: $${data.market_data.low_24h.usd} USD</li>
        </ul>
        
        `
    })
    .catch(err => console.log(err))


function getCurrentTime() {
    const date = new Date()
    console.log()
    document.getElementById('time').innerHTML = `
    ${date.toLocaleTimeString("en-us", {timeStyle: "short"})}`
}    

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById('weather').innerHTML = `<img src="${iconUrl}"/>
            <p class="weather-temp">${data.main.temp}°c</p>
            <p class="weather-city">${data.name}</p>
            `
        }) 
        .catch(err => console.error(err))
})   