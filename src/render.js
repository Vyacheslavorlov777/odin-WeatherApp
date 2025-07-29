import cloudy from '../asset/resource/img/veter-vesennii-belyi-stratosfery-cistyi.jpg';
import rain from '../asset/resource/img/gorodskoi-asno-pocarapana-okna-cement.jpg';
import sunny from '../asset/resource/img/solnecnaa-vspyska.jpg';


export default (state) => {
    const daysWeek = state.weatherInformation.days;

    const renderDay = (arrDays) => {
        const daysContainer = document.createElement('div')
        daysContainer.classList.add('days-container')

        const daysWeek = arrDays.map((day) => {
            const dayContainer = document.createElement('div');    
            dayContainer.classList.add('day-container')

            const divDayName = document.createElement('div')
            const dayName = divDayName.classList.add('day-element');

            const divTemp = document.createElement('div')
            const tempEl = divTemp.classList.add('temp-element');
            
            divDayName.textContent = day.dayWeek;            

            if (day.icon === 'partly-cloudy-day' || day.icon === 'cloudy') {
                dayContainer.style.backgroundImage = `url(${cloudy})`;
            } else if (day.icon === 'rain') {
                dayContainer.style.backgroundImage = `url(${rain})`;
            } else {
                dayContainer.style.backgroundImage = `url(${sunny})`;
            }

            divTemp.textContent = `${day.temp}°C`;

            dayContainer.append(divDayName, divTemp)
            
            return dayContainer;
        })
        daysWeek.forEach((e) => daysContainer.append(e));
        
        return daysContainer;
    }

    const mainInfo = `
        <div class="content__container-day">
            <div class="timezone">Timezone: ${state.weatherInformation.timezone}</div>
            <div class="container-section">
                <div class="section__firstPosition">
                    <div class="actualDay"> ${state.weatherInformation.actualDay}</div>
                    <div class="temp"> ${state.weatherInformation.temp} °C</div>
                </div>
                <div class="section__secondPosition">
                    <div class="feelslike">Feels like: ${state.weatherInformation.feelslike} °C</div>
                    <div class="windspeed">Wind speed: ${state.weatherInformation.windspeed} m/s</div>
                </div>
            </div>
            <div class="description_conteiner">
                <div class="description">Description: ${state.weatherInformation.description}</div>
            </div>
        </div>
        <div class="content__container-week"></div>
        `
    state.elements.info.innerHTML = mainInfo;

    const content = document.querySelector('.content__container-week');
    content.append(renderDay(state.weatherInformation.days));
}