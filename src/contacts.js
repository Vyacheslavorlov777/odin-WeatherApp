export default (contacts, container) => {
    const createPosition = (name, informationContact, phone) => {
        const container = document.createElement('div');
        container.classList.add('containerContact');

        const namePersone = document.createElement('div');
        namePersone.classList.add('namePersone');
        namePersone.textContent = name;

        const informationElement = document.createElement('div')
        informationElement.classList.add('informationContact');
        informationElement.textContent = informationContact;

        const phoneElement = document.createElement('div')
        phoneElement.classList.add('phone');
        phoneElement.textContent = phone;

        container.appendChild(namePersone);
        container.appendChild(informationElement);
        container.appendChild(phoneElement);

        return container;
    }

    contacts.forEach((contact) => {
        container.append(createPosition(...contact));
    });
}