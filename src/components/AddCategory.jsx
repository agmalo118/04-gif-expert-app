import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const trimNewValue = inputValue.trim();

        if (trimNewValue.length <= 1) return;

        onNewCategory(trimNewValue);
    };

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                onChange={onInputChange}
            />

            <button type='submit'>Enviar</button>
        </form>
    )
}
