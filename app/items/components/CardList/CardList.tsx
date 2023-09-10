import React from "react";
import CardItem from "../CardItem/CardItem";
import { DataItem, Result } from "../../model/dataProp";
import Link from "next/link";

interface Props {
  data: DataItem;
}

function CardList({ data }: Props) {
  // console.log(data)
  return (
    <div className="flex items-center justify-center flex-col">
      {data &&
        data.results.map((product: Result) => (
          <Link href={`/items/${product.id}`} key={product.id}>
            <CardItem
              image={product.thumbnail}
              price={product.price}
              title={product.title}
              location={product.address.state_name}
            />
          </Link>
        ))}
    </div>
  );
}

export default CardList;
