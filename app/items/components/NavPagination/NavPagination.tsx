import React from "react";
import { DataItem } from "../../model/dataProp";
import { Pagination } from "@nextui-org/react";

interface Props {
  paginated: (pageNumber: number) => void;
  data: DataItem;
  itemsPerPage: number;
}

function NavPagination({ paginated, data, itemsPerPage }: Props) {
  const pageNumber: number[] = [];
  const allItems = data.results.length;
  for (let i = 1; i <= Math.ceil(allItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      {pageNumber?.map((number) => (
        <li onClick={() => paginated(number)} key={number}>
          {number}
        </li>
      ))}
    </div>
  );
}

export default NavPagination;
