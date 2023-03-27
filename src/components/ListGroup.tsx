// <> is a React Fragment equals to <React.Fragment></React.Fragment> and is used to wrap multiple elements
// alse we can import Fragment from react and use it as <Fragment></Fragment>
// import React, { Fragment } from 'react';
import { MouseEvent, useState } from "react";
import styled from "styled-components";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectedItem: (index: number, name: string) => void;
}

//function ListGroup() {
//  const ListGroup = (props: ListGroupProps) => {
const ListGroup = ({ items, heading, onSelectedItem }: ListGroupProps) => {
  //const cities = ["New York", "London", "Toronto", "Sydney", "Mumbai"];
  // let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //cities = [];
  const handleClick = (event: MouseEvent /*Type annotation in typescript*/) => {
    console.log("Clicked", event.target, event);
  };

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>There are no cities in the list</p>
        ) : (
          items.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item "
                } //"list-group-item"
                // onMouseMove={() => {
                //   index === selectedIndex
                //     ? setSelectedIndex(-1)
                //     : setSelectedIndex(index);
                // }}
                onClick={
                  () => {
                    setSelectedIndex(index);
                    onSelectedItem(index, item);
                  }
                  //handleClick
                  //         (event) => {
                  //   console.log("Clicked", item, index, event.target);
                  //         }
                }>
                {/* // onClick={(event) => {
                //   console.log("Clicked", item, index, event.target, event);
                // }}> */}
                {item}
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
export default ListGroup;
