import { Card } from "../shared/Card/Card";

export interface User {
    id: string;
    name: string;
    age: number;
}

interface IUserFormProps {}

export const UserForm = (props: IUserFormProps) => {
    return (
        <Card>
            <div></div>
        </Card>
    );
};
