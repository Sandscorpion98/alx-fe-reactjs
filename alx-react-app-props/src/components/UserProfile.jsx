import { createContext, useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {

    const userData = useContext(UserContext)

    return (
        <div>
            <h1>{userData.name}</h1>
            <p>Age: {userData.age}</p>
            <p>email: {userData.email}</p>
        </div>
    );
};

export default UserProfile