import createdPosition from "./position.js"

export default (category, positions, img, direction, className = 'bgc_deff') => {
    const content = document.querySelector('#content');

    const containerPosition = document.createElement('div');
    containerPosition.classList.add('container__position', className);

    const containerCategory = document.createElement('div');
    containerCategory.classList.add('category');
    containerCategory.textContent = category;

    containerPosition.append(containerCategory);

    const lineElement = document.createElement('div');
    lineElement.classList.add('line');
    lineElement.style.flexDirection = direction

    const positElement = document.createElement('div');
    positElement.classList.add('line__posit');
    lineElement.append(positElement);

    const imgElement = document.createElement('div');
    imgElement.classList.add('line__img');
    const image = document.createElement('img');
    image.classList.add('line__img__img');
    image.src = img;
    imgElement.append(image);
    lineElement.append(imgElement);

    positions.forEach((position) => {
    positElement.append(createdPosition(...position, className));
    });

    containerPosition.append(lineElement);
    content.append(containerPosition);
}