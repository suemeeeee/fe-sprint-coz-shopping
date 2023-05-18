import React from "react";
import { useSelector } from "react-redux";
import TypeButton from "../components/TypeButton";

export default function Bookmark() {
  const bookmarkList = useSelector(
    (state) => state.itemReducer.bookmarkedItems
  );
  console.log(bookmarkList);
  return <div>here is Bookmark</div>;
}
