import React, { useState } from "react";
import "./App.scss";
import { User, UserForm } from "./components/UserForm/UserForm";
import { UserList } from "./components/UserList/UserList";

const mockData: Array<User> = [
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

function App() {
    const [userList, setUserList] = useState(mockData);

    const adduser = (user: User) => {
        setUserList((prev) => [user, ...prev].sort((a, b) => a.name.localeCompare(b.name)));
    };

    return (
        <div className="App">
            <UserForm onSubmit={adduser} />
            <UserList users={userList} />
        </div>
    );
}

export default App;
