import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import { DataItem, Result } from "../../model/dataProp";
import Link from "next/link";
import NavPagination from "../NavPagination/NavPagination";

interface Props {
  data: DataItem;
}

function CardList({ data }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.results.slice(indexOfFirstItem, indexOfLastItem);

  const paginated = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // console.log(data)
  return (
    <div>
      {data &&
        currentItems.map((product: Result) => (
          <Link
            href={`/items/${product.id}`}
            key={product.id}
            className="w-full flex items-center justify-center flex-col "
          >
            <CardItem
              image={product.thumbnail}
              price={product.price}
              title={product.title}
              location={product.address.state_name}
            />
          </Link>
        ))}
      <NavPagination
        paginated={paginated}
        data={data}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}

export default CardList;
