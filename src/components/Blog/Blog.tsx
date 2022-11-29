import React, { FC, useState } from "react";
import { Header } from "../Header/Header.tsx";
import styles from "../Blog/Blog.module.scss";
import { useEffect } from "react";
import { axiosInstance } from "../../utils/axios.ts";
import { Search } from "../SearchBar/Search.tsx";
import { Post } from "../../types";
import { Footer } from "../Footer/Footer.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
  requestFotosStart,
  requestFotosSuccess,
} from "../../Redux/actions/action";
import { Loader } from "../Loader/Loader.jsx";
// import { state } from "../../Redux/reducers/reducer";

export const Blog: FC = () => {
  const [posts, setPosts] = React.useState([]);
  const [search, setSearch] = useState<string>("news");
  const dispatch = useDispatch();
  // const isLoading = useSelector((state: any) => state.isLoading);

  const searchTitle = (searchName: string) => {
    setSearch(searchName);
  };

  const renderImages: any = () => {
    return posts?.map((item: Post) => {
      return (
        <div key={`${item.id}`} className={styles.image}>
          <img src={item.src.portrait} />
          <span>photographer: {item.photographer}</span>
        </div>
      );
    });
  };
  useEffect(() => {
    try {
      dispatch(requestFotosStart());
      // console.log(isLoading);
      const getFoto = setTimeout(() => {
        axiosInstance
          .get(`search?query=${search}?`)

          .then((res) => {
            dispatch(requestFotosSuccess(res.data));
            setPosts(res.data.photos);
          });
      }, 3000);

      return () => clearTimeout(getFoto);
    } catch {}
  }, [search]);

  return (
    <div className={styles.Blog}>
      <Header />
      <Search searchTitle={searchTitle} />
      {/* {isLoading && <Loader />} */}
      <div className={styles.fotos}>{renderImages()}</div>

      <Footer />
    </div>
  );
};
