import clsx from "clsx";
import FI from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={FI.item}>
      <img className={FI.avatar} src={avatar} alt={name} width="48" />
      <p className={FI.name}>{name}</p>

      <p
        // className={clsx(
        //   FI.status,
        //   friend.isOnline ? FI.isOnline : FI.isOffline
        // )}
        className={clsx(FI.status, {
          [FI.isOnline]: isOnline === true,
          [FI.isOffline]: isOnline === false,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};
export default FriendListItem;
