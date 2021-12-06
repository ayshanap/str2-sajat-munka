const country = ['USA', 'Magyarország'];
const state = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'];

const fillCountry = (country) => {
    const countryOptions = country.map(item => {return `<option>${item}</option>`});
    return countryOptions;
}

let countryHTML = document.querySelector('#country');
countryHTML.insertAdjacentHTML('beforeEnd', fillCountry(country));

let stateHTML = document.querySelector('#state');
stateHTML.insertAdjacentHTML('beforeend', fillCountry(state));