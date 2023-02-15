import React, { FC, useState } from "react";
import { Header } from "../Header/Header";
import styles from "../Blog/Blog.module.scss";
import { useEffect } from "react";
import { axiosInstance } from "../../utils/axios";
import { Search } from "../SearchBar/Search";
import { Post, RootState } from "../../types";
import { Footer } from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  requestFotosStart,
  requestFotosSuccess,
} from "../../Redux/actions/action.js";
import { Loader } from "../Loader/Loader";
import {
  selectMyData,
  selectMyDataLoading,
} from "../../Redux/reducers/selectors";
import { Events } from "../BlogEvents";

export const Blog: FC = () => {
  const [posts, setPosts] = React.useState([]);
  const [search, setSearch] = useState<string>("news");
  const data = useSelector(selectMyData);
  const isLoading = useSelector(selectMyDataLoading);
  const dispatch = useDispatch();

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
      const getFoto = setTimeout(() => {
        axiosInstance
          .get(`search?query=${search}?`)

          .then((res: any) => {
            dispatch(requestFotosSuccess(res.data));
            setPosts(res.data.photos);
          });
      }, 3000);

      return () => clearTimeout(getFoto);
    } catch {}
  }, [search]);

  console.log(isLoading);
  return (
    <div className={styles.Blog}>
      <Header />
      <Search searchTitle={searchTitle} />
      {/* {isLoading && <Loader />} */}
      {/* <Loader /> */}

      <Events />
      <div className={styles.fotos}>{renderImages()}</div>

      <Footer />
    </div>
  );
};
