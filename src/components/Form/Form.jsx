import React from "react";
import styles from "./Form.module.scss";
import { state } from "../../Redux/state";
export const Form = () => {
  let input_1 = React.createRef();
  let input_2 = React.createRef();
  let input_3 = React.createRef();
  let form = [];

  let formDate = () => {
    let personalDate = [
      // {
      //   name: personName,
      //   tel: numberOfTelefone,
      //   email: personEmail,
      // },
    ];

    let name = input_1.current.value;
    //let tel = input_2.current.value;
    //let email = input_3.current.value;

    personalDate.push(name);
    console.log(personalDate);
    input_1.current.value = "";
    input_2.current.value = "";
    input_3.current.value = "";
  };
  return (
    <div className={styles.Form}>
      <input ref={input_1} type="text" placeholder="Введите имя" />
      <input ref={input_2} type="text" placeholder="Введите телефон" />
      <input ref={input_3} type="email" placeholder="Введите почту" />
      <button onClick={formDate}>Отправить</button>
    </div>
  );
};
