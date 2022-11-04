import React, { Component, createRef, useState } from "react";
import { store } from "../../Redux/store.ts";
import styles from "../SearchBar/SearchBar.module.scss";

type Props = {};
type State = {
  isOpenDropdown: boolean;
  inputValue: string;
  inputArray: [];
};

export class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpenDropdown: false,
      inputValue: "",
      inputArray: [],
    };
  }

  container = createRef<HTMLDivElement>();
  item = createRef<HTMLDivElement>();

  handleButtonClick = () => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", this.state.inputValue);
    } else {
      const values = localStorage.getItem("items");
      const valuesArray = values?.split(",");

      //Проверка введенного значения
      let count = 0;
      for (let i = 0; i < valuesArray?.length; i++) {
        if (
          this.state.inputValue === valuesArray[i] ||
          this.state.inputValue.trim() === ""
        ) {
          count = 0;
        } else {
          count += 1;
        }
      }

      if (count === valuesArray.length) {
        valuesArray.push(this.state.inputValue);
      }

      valuesArray.sort();

      if (valuesArray.length > 5) {
        valuesArray.pop();
      }

      //Запись введеного значения в localStorage
      localStorage.setItem("items", valuesArray.join(","));
    }

    this.setState({ isOpenDropdown: false, inputValue: "" });
    store.Search = this.state.inputValue;
  };

  handleInputClick = () => {
    this.setState({ isOpenDropdown: true });
  };

  handleItemClick = (item: string) => {
    this.setState({
      inputValue: item,
      isOpenDropdown: false,
    });
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event: any) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({ isOpenDropdown: false });
    }
  };

  renderPage = () => {
    const values = localStorage.getItem("items");
    if (values === null) {
      const valuesArray = [];
    } else {
      const valuesArray = values.split(",");

      return valuesArray.map((item, index) => {
        return (
          <div
            key={`${item}-${index}`}
            className={styles.search_item}
            onClick={() => this.handleItemClick(item)}
          >
            {item}
          </div>
        );
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <div className={styles.search_bar}>
            <input
              value={this.state.inputValue}
              className={styles.input}
              type="text"
              placeholder="Search"
              onChange={(e) => this.setState({ inputValue: e.target.value })}
              onFocus={this.handleInputClick}
            />
            <button onClick={this.handleButtonClick}></button>
          </div>

          {this.state.isOpenDropdown && (
            <div className={styles.container} ref={this.container}>
              <div className={styles.elements}>{this.renderPage()}</div>
            </div>
          )}
        </div>
      </>
    );
  }
}
