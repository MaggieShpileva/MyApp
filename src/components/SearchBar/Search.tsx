import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "../SearchBar/SearchBar.module.scss";

type Props = {
  searchTitle: (string) => void;
};

export const Search: FC<Props> = ({ searchTitle }) => {
  const [search, setSearch] = useState("");

  const handleButtonClick = () => {
    searchTitle(search);
    setSearch("");
  };

  return (
    <div>
      <div>
        <div className={styles.search_bar}>
          <input
            value={search}
            className={styles.input}
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleButtonClick}></button>
        </div>
      </div>
    </div>
  );
};
