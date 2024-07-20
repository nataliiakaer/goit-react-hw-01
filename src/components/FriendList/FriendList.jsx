import clsx from "clsx";
import F from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <section>
      <ul className={F.list}>
        {friends.map((friend) => {
          return (
            <li key={friend.id} className={F.item}>
              <img
                className={F.avatar}
                src={friend.avatar}
                alt={friend.name}
                width="48"
              />
              <p className={F.name}>{friend.name}</p>

              <p
                className={clsx(
                  F.status,
                  friend.isOnline ? F.isOnline : F.isOffline
                )}
              >
                {friend.isOnline ? "Online" : "Offline"}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FriendList;
