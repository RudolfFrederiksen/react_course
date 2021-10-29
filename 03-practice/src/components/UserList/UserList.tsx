import { Card } from "../shared/Card/Card";
import ListRenderer from "../shared/List/ListRendered";
import { User } from "../UserForm/UserForm";

interface IUserListProps {
    users: Array<User>;
}

export const UserList = (props: IUserListProps) => {
    return (
        <Card>
            <ListRenderer list={props.users}>
                {props.users.map((user) => (
                    <div key={user.id}>
                        {user.name} ({user.age + `${user.age < 2 ? "year" : "years"}`} old)
                    </div>
                ))}
            </ListRenderer>
        </Card>
    );
};
