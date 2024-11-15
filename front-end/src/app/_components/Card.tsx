type CardPropsType = {
  img: string;
  price: number;
  title: string;
  discount?: number;
  color?: "black" | "red";
};

export const Card = (props: CardPropsType) => {
  return (
    <div>
      <div>{props.img}</div>
      <div>{props.title}</div>
      <p>{props.price}</p>
      <p style={{ backgroundColor: props.color == "red" ? "black" : "red" }}>
        {props.discount}
      </p>
    </div>
  );
};
