import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { Item } from "../../model/itemProp";


function CardItem({ image, price, title, location }: Item) {
  return (
    <Card className="max-w-screen-md mx-auto w-full">
      <CardBody className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center">
          <Image src={image} alt="Image of product" width={200} height={100} className="max-h-44" />
          <div className="ml-4">
            <p className="text-lg font-bold">$ {price}</p>
            <p className="text-base text-default-500 max-w-[500px]">{title}</p>
          </div>
        </div>
        <p className="text-small text-default-400">{location}</p>
      </CardBody>
    </Card>
  );
}

export default CardItem;
