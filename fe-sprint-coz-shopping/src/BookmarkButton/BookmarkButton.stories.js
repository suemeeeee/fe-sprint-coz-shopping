import { BookmarkButton } from "./BookmarkButton";

export default {
  title: "Basic/BookmarkButton",
  component: BookmarkButton,
};

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {
  args: {
    primary: false,
  },
};
