import React, { FC, useState } from "react";
import { Header } from "../Header/Header.tsx";
import styles from "../Blog/Blog.module.scss";
import { useEffect } from "react";
import { axiosInstance } from "../../utils/axios.ts";
import { Search } from "../SearchBar/Search.tsx";
import { Post } from "../../types";

export const Blog: FC = () => {
  const [posts, setPosts] = React.useState([]);
  const [search, setSearch] = useState<string>("");

  const searchTitle = (searchName: string) => {
    setSearch(searchName);
  };

  const renderImages: any = () => {
    return posts?.map((item: Post) => {
      return (
        <img
          className={styles.image}
          src={item.src.original}
          key={`${item.id}`}
        />
      );
    });
  };
  useEffect(() => {
    const getFoto = setTimeout(() => {
      axiosInstance
        .get(`search?query=${search}?`)
        .then((res) => setPosts(res.data.photos));
    }, 3000);
  }, [search]);

  return (
    <div>
      <Header />
      <Search searchTitle={searchTitle} />
      <h1>{renderImages()}</h1>
    </div>
  );
};
