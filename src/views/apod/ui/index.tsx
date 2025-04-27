"use client"

import { useEffect, useState } from "react"
import { getApod } from "../model/getApod"
import { ApodPost } from "@/entities/apodPost/ui"
import { ApodPostProps } from "@/entities/apodPost/model"

const ApodView = () => {
  const [apod, setApod] = useState<ApodPostProps>()

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await getApod()
        console.log(response.data)
        setApod(response.data)
      } catch (error) {
        console.error("Error fetching APOD data:", error)
      }
    }

    fetchApod()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      {apod &&
        <ApodPost
          url={apod?.url}
          hdurl={apod?.hdurl}
          title={apod?.title}
          explanation={apod?.explanation}
          copyright={apod?.copyright}
          date={apod?.date}
        />
      }
    </div>
  )
}

export default ApodView;