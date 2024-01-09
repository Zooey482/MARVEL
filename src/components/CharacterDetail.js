import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Detail.module.css";

function CharacterDetail({ id, thumbnail, name, comics }) {
  return (
    <div key={id}>
      <section>
        <div className={styles.item}>
          <h1>{name}</h1>
          <img src={thumbnail.path + "." + thumbnail.extension} alt={name} />
          <div className={styles.name}>
            <Link to={`/`}>Back to List</Link>
          </div>
        </div>
        <div className={styles.comics}>
          <h1>
            <span role="img" aria-label="pin">
              📌
            </span>{" "}
            Related Comics
          </h1>
          <ul>
            {comics.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

CharacterDetail.prototype = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  comics: PropTypes.object.isRequired
};

export default CharacterDetail;
