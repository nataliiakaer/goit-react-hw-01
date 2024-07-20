import P from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <section className={P.profile}>
      <div className={P.description}>
        <img className={P.avatar} src={avatar} alt={username} />
        <p className={P.name}>{username}</p>
        <p className={P.tag}>@{tag}</p>
        <p className={P.location}>{location}</p>
      </div>

      <ul className={P.stats}>
        <li className={P.statsItem}>
          <span className={P.label}>Followers</span>
          <span className={P.quantity}>{stats.followers}</span>
        </li>
        <li className={P.statsItem}>
          <span className={P.label}>Views</span>
          <span className={P.quantity}>{stats.views}</span>
        </li>
        <li className={P.statsItem}>
          <span className={P.label}>Likes</span>
          <span className={P.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
