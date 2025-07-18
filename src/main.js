import odinImage from "../asset/resource/img/log.svg";

export default () => {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('containerMain');

    const logo = document.createElement('div');
    logo.classList.add('logoDiv');
    const image = document.createElement('img');
    image.classList.add('logo_img');
    image.src = odinImage;
    logo.appendChild(image);
    
    const informationElement = document.createElement('div')
    informationElement.classList.add('informationRestouran');
    informationElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis corporis asperiores corrupti earum beatae placeat sapiente perferendis? Quisquam voluptatibus excepturi quam architecto. Numquam, commodi? Aliquam quae ipsam asperiores tenetur.";

    const adressElement = document.createElement('div')
    adressElement.classList.add('adress');
    adressElement.textContent = 'Moskow, Pushkinskaya 1';

    container.appendChild(logo);
    container.appendChild(informationElement);
    container.appendChild(adressElement);

    content.append(container);
}