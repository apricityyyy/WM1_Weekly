import React from "react";

const PacketCard = ({
  point1,
  point2,
  point3,
  point4,
  point5,
  packetName,
  packetLink,
}) => {
  return (
    <div className="border-2 h-full rounded-xl border-t-8 flex flex-col justify-between p-7">
      <h4 className="text-center text-2xl font-medium text-[#0094C9]">
        {packetName}
      </h4>
      <ul className="list-disc marker:text-[#0094C9]">
        <li className="mb-3 text-[#636363] ml-2">{point1}</li>
        <li className="mb-3 text-[#636363] ml-2">{point2}</li>
        <li className="mb-3 text-[#636363] ml-2">{point3}</li>
        <li className="mb-3 text-[rgb(99,99,99)] ml-2">{point4}</li>
        <li className="mb-3 text-[#636363]  ml-2">{point5}</li>
      </ul>
      <a className="w-full" href={packetLink}>
        <button className="w-full py-2 transition px-6 border rounded-md border-[#0094C9] text-[#0094C9] text-[14px] roboto hover:text-white hover:border-white hover:bg-[#0094C9] duration-300">
          Learn more
        </button>
      </a>
    </div>
  );
};

export default PacketCard;