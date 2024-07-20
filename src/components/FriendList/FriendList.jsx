import FriendListItem from "../FriendListItem/FriendListItem";
import F from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <section>
      <ul className={F.list}>
        {friends.map((friend) => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default FriendList;
