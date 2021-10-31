import s from './FriendList.module.css'
import FriendListItem from './FriendListItem/FriendListItem';

function FriendList({friends}) {
    return (
        <ul className={s.list}>
        {friends.map(({ avatar, name, isOnline, id }) => 
            <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
        )}
        </ul>
    )
}

export default FriendList;
