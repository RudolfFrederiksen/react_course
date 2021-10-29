import { Card } from "../shared/Card/Card";
import ListRenderer from "../shared/List/ListRendered";
import { User } from "../UserForm/UserForm";

interface IUserListProps {}

export const UserList = (props: IUserListProps) => {
    const data: Array<User> = [
        {
            id: "1",
            name: "rfrederiksen",
            age: 33,
        },
        {
            id: "2",
            name: "dspaeth",
            age: 34,
        },
    ];

    return (
        <Card>
            <ListRenderer list={data}>
                {data.map((user) => (
                    <div key={user.id}>
                        {user.name} ({user.age + `${user.age < 2 ? "year" : "years"}`} old)
                    </div>
                ))}
            </ListRenderer>
        </Card>
    );
};
