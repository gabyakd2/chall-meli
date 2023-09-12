import { ItemDetail } from "@/app/items/model/detailItem";
import Image from "next/image";
import React from "react";

interface Props {
  data: ItemDetail
}

function ItemDetail({ data }: Props) {
  console.log(data)
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full justify-evenly">
        <Image
          src={data?.pictures[0]?.url}
          alt="foto"
          width="400"
          height="400"
        />
        <div className="flex flex-col">
          <p>{data?.sold_quantity} vendidos</p>
          <p>{data?.title}</p>
          <p>{data?.price}</p>
          <button>comprar</button>
        </div>
      </div>
      <p>Titulo Descripcion</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        fugit quis, possimus eius nemo sequi dicta quo voluptatibus voluptatem,
        nobis ducimus ex iusto beatae ipsa recusandae doloremque corporis odit
        aliquid!
      </p>
    </div>
  );
}

export default ItemDetail;
