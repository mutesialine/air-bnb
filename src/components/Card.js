import React from "react";
export default function Card(props) {
  return (
    <div className="flex flex-col shrink-0 items-start w-[400px]- gap-2 text-base">
      <img src={`/images/${props.image}`} className="w-full h-full object-cover" alt="profile" />
      <div className="flex gap-1 text-gray-400">
        <img src="/images/Star 1.svg" alt="star" />
        <span>5.0</span>
        <span>({props.rating})</span>
        <span>{props.location}</span>
      </div>

      <p>{props.title}</p>
      <p className="font-bold text-lg">From {props.price}/ person</p>
    </div>
  );
}
