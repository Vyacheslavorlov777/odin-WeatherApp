import axios from "axios";
import parser from "./dataResponse.js";
import render from "./render.js";
import validateCity from "./validateCity.js";

const elements = {
    body: document.querySelector('body'),
    info: document.querySelector('.container-info'),
    input: document.querySelector('input'),
    label: document.querySelector('label'),
};

const state = {
    elements,
    weatherInformation: null,
    error: null,
};

const weekInformation = (location) => {
    const key = '8YESWQB85FMXLS5E2NUTE4WZW';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${key}`;

    return axios.get(url)
    .then((response) => {
        state.weatherInformation = parser(response);
    })
    .catch((e) => {
        state.error = e;
    });
};

export default () => {

    const btnSubmit = document.querySelector('.btn-submit');
    const inputCity = document.querySelector('#city-input');

    btnSubmit.addEventListener('click', async (e) => {
        e.preventDefault();

        state.error = null;
        const nameCity = inputCity.value;

        await weekInformation(nameCity);

        if (validateCity(nameCity, state) === null) {
            render(state);
        } else {
            validateCity(nameCity, state)
        }
    });
}
