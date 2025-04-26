import Image from "next/image"
import { ApodPostProps } from "../model"


export const ApodPost = ({ url, hdurl, title, explanation, copyright, date }: ApodPostProps) => {

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg max-w-md ">
      <h1 className="font-black text-4xl">{title}</h1>
      <div className="flex justify-between w-full">
        <p className="text-gray-500">{date}</p>
        <p className="text-gray-500">{copyright}</p>
      </div>
      <section className="relative w-full aspect-[16/20] overflow-hidden">
        <Image
          src={url}
          alt={title}
          fill
          className="object-cover"
        />
      </section>
      <p className="text-gray-700 mt-4">{explanation}</p>
      {hdurl && <a href={hdurl} target="_blank" rel="noopener noreferrer">View HD Image</a>}
    </div>
  )
}

