const user_tab = document.getElementById('your_w');
const search_tab = document.getElementById('search_w');
const user_container = document.querySelector('.w-container');
const grant_acess_cont = document.querySelector('.grant_location');
const form_cont = document.querySelector('.form_cont');
const loading = document.querySelector('.loading-s');
const user_info = document.querySelector('.user-info-container');
const api_key = `2d8a9cadb0d5e54079db06c8d1bf2065`;
const loc_bttn = document.querySelector("[data-grantAcess]");
const search_btn = document.querySelector("[data-search-btn]");
let current_tab = user_tab;
current_tab.classList.add("current-tab");

// Initialize app on page load
window.addEventListener('DOMContentLoaded', () => {
    get_from_session_storage();
});


// in this function call we are adding informaton to your weather based on api call
function render_weather_info(data) {
    document.getElementById('city-name').textContent = data?.name || 'Unknown';
    document.getElementById('data_weather_desc').textContent = data?.weather?.[0]?.description || 'No description';
    document.querySelector('[data-temp]').textContent = `Temp:${Math.round(data?.main?.temp) || 0}°C`;
    document.querySelector('[data-windspeed]').textContent = `${data?.wind?.speed || 0} m/s`;
    document.querySelector('[data-humidity]').textContent = `${data?.main?.humidity || 0}%`;
    document.querySelector('[data-cloudiness]').textContent = `${data?.clouds?.all || 0}%`;
    document.querySelector('[data-weather-icon]').src = `https://openweathermap.org/img/w/${data?.weather?.[0]?.icon || 'default'}.png`;
    document.getElementById('data_con_icon').src = `https://flagcdn.com/144x108/${data?.sys?.country?.toLowerCase() || 'us'}.png`;
};

//function based on search weather by city
//function to make api call based on city name
async function fetch_search_weather(city) {
    if (!city.trim()) {
        alert("Please enter a city name");
        return;
    }

    loading.classList.add("active");
    user_info.classList.remove("active");

    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
        const res = await axios.get(url);
        loading.classList.remove("active");
        user_info.classList.add("active");

        const data = res.data;
        render_weather_info(data);

    } catch (error) {
        loading.classList.remove("active");
        alert("City not found or failed to fetch weather data: " + error.message);
    }
};
//fuction to make api call based on the user's loaction lati and longi
async function fetch_user_weather(coordinates) {
    const { lati, longi } = coordinates;
    //make grant container invisible
    grant_acess_cont.classList.remove("active");
    loading.classList.add("active");
    //api call
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${api_key}&units=metric`
        const res = await axios.get(url);
        loading.classList.remove("active");
        user_info.classList.add("active");

        // Extract weather data
        const data = res.data;

        // Update DOM elements with weather data
        render_weather_info(data);

    } catch (error) {
        loading.classList.remove("active");
        alert("Failed to fetch weather data: " + error.message);
        grant_acess_cont.classList.add("active");
    }
};
// chek if coordinates are present in session
function get_from_session_storage() {
    const local_coordinates = sessionStorage.getItem("user-coord");
    if (!local_coordinates) {
        //agar local coordinates nhi mile to 
        grant_acess_cont.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(local_coordinates);
        fetch_user_weather(coordinates);
    }
};

function switch_tab(clicked_tab) {
    if (current_tab != clicked_tab) {
        current_tab.classList.remove("current-tab");
        current_tab = clicked_tab;
        current_tab.classList.add("current-tab");

        // Hide all containers first
        user_info.classList.remove("active");
        grant_acess_cont.classList.remove("active");
        form_cont.classList.remove("active");

        // Show appropriate container based on tab
        if (clicked_tab === search_tab) {
            form_cont.classList.add("active");
        } else {
            // For user weather tab, check if we have saved coordinates
            get_from_session_storage();
        }
    }
};
user_tab.addEventListener("click", () => {
    console.log("User tab click");
    switch_tab(user_tab)
});

search_tab.addEventListener("click", () => {
    console.log("Search Tab click");
    switch_tab(search_tab);
});

const options = {
    enableHighAccuracy: false,    // Use network-based location (faster)
    timeout: 10000,               // 10 seconds timeout (more reasonable)
    maximumAge: 300000,           // Use cached location up to 5 minutes old
};
function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    // get user coordinates and add them to session storage then call function get current position for user_cord
    const user_coordinates = {
        lati: crd.latitude,
        longi: crd.longitude,
    };
    // why we use stringify to conger javascript object user_cord to json data
    sessionStorage.setItem("user-coord", JSON.stringify(user_coordinates));
    fetch_user_weather(user_coordinates);
};
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);

    // Show grant access container again when location fails
    grant_acess_cont.classList.add("active");

    switch (err.code) {
        case err.PERMISSION_DENIED:
            alert("User denied the request for Geolocation. Please enable location access and try again.");
            break;
        case err.POSITION_UNAVAILABLE:
            alert("Location information is unavailable. Please check your internet connection and try again.");
            break;
        case err.TIMEOUT:
            alert("The request to get user location timed out. Please try again or use the search feature.");
            break;
        default:
            alert("An unknown error occurred while getting your location. Please try again.");
            break;
    }
}
// get the current loaction of the user if location is not there
function get_current_loc(params) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options)
    }
    else {
        alert("Geo loaction api not supported");
    }
}
loc_bttn.addEventListener('click', get_current_loc);
search_btn.addEventListener('click', (e) => {
    e.preventDefault();
    const search_city = document.getElementById('search_city').value;
    fetch_search_weather(search_city);
    document.getElementById('search_city').value = '';
});