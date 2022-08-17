import * as React from 'react';
import UserCard from '../../components/UserCard';
import { UserlistContext } from '../../context/UserlistContext';


export default function ScoreBoard() {

  const {userslist} =React.useContext(UserlistContext);

  return (
    <>
     {
          userslist.map((user)=>{
            return <UserCard key={user._id} user={user} />
        })
     }
    </>
  );
}

