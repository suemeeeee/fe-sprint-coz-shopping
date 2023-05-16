import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "../components/SingleItem";

export default function Main() {
  const [itemDatas, setItemDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        console.log(res);
        setItemDatas(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  console.log(itemDatas);

  return (
    <div>
      hello
      <SingleItem item={itemDatas[0]} />
    </div>
  );
}
