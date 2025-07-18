export default (name, option, price, className) => {
    const createPosition = (name, option) => {
        const container = document.createElement('div');
        container.classList.add('container');

        const namePosition = document.createElement('div');
        if (className === 'bgc_line') {
            namePosition.classList.add('namePosition', 'name__if');
        } else {
            namePosition.classList.add('namePosition');
        }
        namePosition.textContent = name;

        const optionPosition = document.createElement('div')
        optionPosition.classList.add('optionPosition');
        optionPosition.textContent = option;

        const hr = document.createElement('div');
        hr.classList.add('hr');

        const priceDish = document.createElement('div')
        priceDish.classList.add('price-container');
        const priceEl = document.createElement('div')
        priceEl.classList.add('price');
        priceEl.textContent = price;
        priceDish.append(priceEl);

        container.appendChild(namePosition);
        container.appendChild(optionPosition);
        container.appendChild(hr);
        container.appendChild(priceDish);

        return container;
    }

    return createPosition(name, option);
}