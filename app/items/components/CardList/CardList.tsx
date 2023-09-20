import React, { useState } from "react";
import { DataItem, Result } from "../../model/dataProp";
import Link from "next/link";
import {CardItem, NavPagination, Loading} from "../index";
interface Props {
  data: DataItem;
}

function CardList({ data }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.results.slice(indexOfFirstItem, indexOfLastItem);

  const paginated = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex items-center justify-center flex-col mx-auto w-3/5 max-w-3xl">
      {currentItems ? (
        currentItems.map((product: Result) => (
          <Link
            href={`/items/${product.id}`}
            key={product.id}
            className="w-full flex items-center justify-center flex-col"
          >
            <CardItem
              image={product.thumbnail}
              price={product.price}
              title={product.title}
              location={product.address.state_name}
            />
          </Link>
        ))
      ) : (
        <div className="w-full flex items-center justify-center flex-col">
          <Loading />
        </div>
      )}
      <div className="my-10">
        <NavPagination
          paginated={paginated}
          data={data}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
}

export default CardList;
