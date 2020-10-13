import React from 'react'
import UserList from "../components/UsersList";
const Users = () => {

    const USERS = [
        {
            id: "u1",
            name:"Abdulaziz",
            image:"https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
            places:3,
        },

    ]

    return <UserList items={USERS} />
}

export default Users
