import { FilterButton } from "./FilterButton";

export default {
  title: "Basic/Buttons",
  component: FilterButton,
};

export const Primary = {
  args: {
    primary: true,
    imgSrc: process.env.PUBLIC_URL + "/imgs/Product.png",
    label: "상품",
  },
};

export const Secondary = {
  args: {
    primary: false,
    imgSrc: process.env.PUBLIC_URL + "/imgs/Product.png",
    label: "상품",
  },
};
