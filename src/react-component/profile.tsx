import React from 'react';

type Props = {
    username: string;
    name: string;
}

const Profile = ({username, name}: Props) => {
    return (
        <div>
            <b>{username}</b>&nbsp;
            <span>({name})</span>
        </div>
    )
}

export default Profile