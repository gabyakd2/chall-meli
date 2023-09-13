import { ItemDetail } from "@/app/items/model/detailItem";
import Image from "next/image";
import React from "react";
import { Button } from "@nextui-org/react";

interface Props {
  data: ItemDetail;
}

interface Description {
  name: string | number;
  value: string | number;
}

function ItemDetail({ data }: Props) {
  const descriptionItem: Description[] = data?.attributes.map((objeto) => ({
    name: String(objeto.name),
    value: String(objeto.value_name),
  }));
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-full justify-between">
        <Image
          src={data?.pictures[0]?.url}
          alt="foto"
          width="400"
          height="400"
        />
        <div className="flex flex-col w-[300px]">
          <p>{data?.sold_quantity} vendidos</p>
          <p className="font-bold text-xl">{data?.title}</p>
          <div className="flex mb-9">
            <p className="font-bold text-2xl">$ {data?.price}</p>00
          </div>
          <Button color="primary" variant="shadow">
            Comprar
          </Button>
        </div>
      </div>
      <div className="ml-10 mt-14 mx-auto w-[800px]">
        <p className="font-bold text-3xl mb-6">Descripción del producto</p>
        <div className="flex flex-wrap nowrap">
          {descriptionItem?.map(({ name, value }: Description) => (
            <p className="text-default-400">
              <span className="font-bold">{name}</span>: {value},{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
