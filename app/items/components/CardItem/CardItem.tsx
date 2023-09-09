import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

function CardItem({ data }: any) {
  // console.log(data?.results)
  return (
    <Card className="max-w-[1000px]">
      <CardBody className="flex flex-row justify-between items-center">
        <Image
          src={data?.results[0].thumbnail}
          alt="Image of product"
          width={200}
          height={200}
        />
        <div>
          <p className="text-lg font-bold">$ 1980</p>
          <p className="text-md text-default-500 max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quae eaque voluptatem temporibus amet perferendis ullam.
            Reprehenderit nesciunt quam impedit.
          </p>
        </div>
        <p className="text-small text-default-400">Ubicacion</p>
      </CardBody>
    </Card>
  );
}

export default CardItem;
