import dayjs from "dayjs";
import React, {
  DetailedHTMLProps,
  FC,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { store } from "../../Redux/store";
import styles from "./index.module.scss";
export const Schedule: FC = () => {
  const [clickOnDate, setClickOnDate] = useState(0);

  const handleClickSelectDate = (index: number) => () => {
    setClickOnDate(index);
  };

  const renderSchedule = () => {
    return store.Schedule.map((item, index) => {
      let today = dayjs()
        .add(index + 1, "day")
        .format("DD MMMM YYYY");
      return (
        <div
          className={`${styles.day_block} ${
            clickOnDate === index ? styles.day_block_active : null
          }`}
          onClick={handleClickSelectDate(index)}
          key={`item${index}`}
        >
          <h3>Day {index + 1}</h3>
          <div className={styles.dates}>
            <p>{today}</p>
          </div>
        </div>
      );
    });
  };

  const renderPerformance = () => {
    return store.Schedule[clickOnDate].section.map((item, index) => {
      return (
        <div className={styles.cart} key={`${item.email}-${index}`}>
          <img src={item.img} alt="" />
          <div className={styles.cart_info}>
            <h3>{item.theme}</h3>
            <div className={styles.contact}>
              <p className={styles.person}>{item.speaker}</p>
              <span> / </span>
              <p>{item.email}</p>
            </div>
          </div>
          <div className={styles.schedule}>
            <p>
              {item.time_start} - {item.time_end}
            </p>
            <p>{item.adress}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1>Our Schedule</h1>
        <p>Do not miss anything topic about the event</p>
      </div>
      <div className={styles.tablist}>{renderSchedule()}</div>
      <div className={styles.speakers}>{renderPerformance()}</div>
    </div>
  );
};
