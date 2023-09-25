import { ItemDetails } from "@/app/items/model/detailItem";
import Image from "next/image";
import React from "react";
import { Button } from "@nextui-org/react";

interface Props {
  data: ItemDetails;
}

interface Description {
  name: string | number;
  value: string | number;
}

function ItemDetail({ data }: Props) {
  const descriptionItem: Description[] = data?.attributes.map((item) => ({
    name: String(item.name),
    value: String(item.value_name),
  }));
  return (
    <div className="flex flex-col justify-center items-center w-full">
  <div className="flex flex-col md:flex-row w-full justify-between">
    <Image
      src={data?.pictures[0]?.url}
      alt="Image Item"
      width="400"
      height="400"
      className="md:w-1/2" // Tamaño de la imagen en pantallas grandes
    />
    <div className="flex flex-col w-full md:w-1/2 md:ml-6"> {/* Ancho completo en pantallas pequeñas */}
      <p>{data?.sold_quantity} vendidos</p>
      <p className="font-bold text-xl">{data?.title}</p>
      <div className="flex mb-3 md:mb-9"> {/* Separación menor en pantallas grandes */}
        <p className="font-bold text-2xl">$ {data?.price}</p>
        <p className="text-default-400">00</p>
      </div>
      <Button color="primary" variant="shadow">
        Comprar
      </Button>
    </div>
  </div>
  <div className="ml-5 mt-5 md:mt-14 mx-auto w-full md:w-[800px]"> {/* Ancho completo en pantallas pequeñas */}
    <p className="font-bold text-3xl mb-6">Descripción del producto</p>
    <div className="flex flex-wrap nowrap mb-10">
      {descriptionItem?.map(({ name, value }: Description) => (
        <p className="text-default-400" key={name}>
          <span className="font-bold">{name}</span>: {value},{" "}
        </p>
      ))}
    </div>
  </div>
</div>
  );
}

export default ItemDetail;
