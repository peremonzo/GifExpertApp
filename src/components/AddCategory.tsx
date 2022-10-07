import { Dispatch, FormEvent, ChangeEvent, useState } from "react";

//todo: crearse un tipo para evitar esto
export const AddCategory = ({ onNewCategory }: { onNewCategory: Dispatch<string> }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    );
}