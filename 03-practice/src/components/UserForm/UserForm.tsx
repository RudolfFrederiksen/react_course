import { Card } from "../shared/Card/Card";
import { useState } from "react";

export interface User {
    id: string;
    name: string;
    age: number;
}

interface IUserFormProps {
    onSubmit: (user: User) => void;
}

export const UserForm = (props: IUserFormProps) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // todo: check validity

        const user: User = {
            id: new Date().getTime().toString(),
            name,
            age: Number(age),
        };

        props.onSubmit(user);
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setAge("");
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" required value={name} onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" required min="1" value={age} onChange={handleAge} />
                </div>
                <button type="submit">Add user</button>
            </form>
        </Card>
    );
};
