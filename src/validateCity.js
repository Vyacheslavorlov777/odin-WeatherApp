export default (city, state) => {
    const valid = (err) => {
        if (err) {
            state.elements.input.style.border = '1px solid rgba(254, 1, 1, 0.53)';
            state.elements.input.style.borderCollor = 'rgba(254, 1, 1, 0.53)';
            state.elements.label.style.color = 'rgba(254, 1, 1, 0.53)';
            state.elements.label.textContent = err;
        } else {
            state.elements.input.style.border = '1px solid rgba(0, 255, 47, 0.51)';
            state.elements.label.textContent = '';
        }
    }

    const cityRegex = /^[А-Яа-яA-Za-zЁё]+(?:[\s-][А-Яа-яA-Za-zЁё]+)*$/;
    const trimmed = city.trim();

    if (trimmed.length < 2 || trimmed.length > 50) {
        valid('Название города должно быть от 2 до 50 символов');
    } else if (!cityRegex.test(trimmed)) {
        valid('Название города может содержать только буквы, пробел или дефис')
    } else if (state.error) {
        valid('Такого города не существует');
    } else {
        valid()
        return null;
    }
}