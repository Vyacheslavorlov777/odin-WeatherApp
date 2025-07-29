export default (response) => {

    const howDay = (numberDay) => {
        const week = {
            0: 'Monday',
            1: 'Tuesday',
            2: 'Wednesday',
            3: 'Thursday',
            4: 'Friday',
            5: 'Saturday',
            6: 'Sunday',
        }
        return week[numberDay]
    }

    const status = response.status;

    const actNewDate = new Date();
    const actualDay = howDay(actNewDate.getDay() - 1) === 'undefined' ? 'Monday' : howDay(actNewDate.getDay() - 1);
    

    const timezone = response.data.timezone;
    const temp = response.data.currentConditions.temp;
    const feelslike = response.data.currentConditions.feelslike;
    const windspeed = response.data.currentConditions.windspeed;
    const description = response.data.description;
    const icon = response.data.currentConditions.icon;

    const arreyDays = [response.data.days[0], response.data.days[1], response.data.days[2], response.data.days[3], response.data.days[4]]
    const days = arreyDays.map((day) => {
        const datetime = day.datetime;

        const dateNow = new Date(datetime);
        const dayNumber = dateNow.getDay();
        const dayWeek = howDay(dayNumber);
        
        const temp = day.temp;
        const feelslike = day.feelslike;
        const windspeed = day.windspeed;
        const descriptionDay = day.description;
        const icon = day.icon;
        
        return {dayWeek, temp, feelslike, windspeed, descriptionDay, icon}
    });;
    
    return { status, timezone, actualDay, temp, feelslike, windspeed, description, icon, days}
}