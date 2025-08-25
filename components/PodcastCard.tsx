import Image from 'next/image'
import React from 'react'

const PodcastCard = ({title, description, podcastId, img_url}: {title: string, description: string, podcastId: number, img_url: string}) => {
  console.log(title);
  console.log(description);
  console.log(podcastId);
  console.log(img_url)

    return (
    <div className = "cursor-pointer">
      <figure className = "flex flex-col gap-2">
        <div>
            <Image src = "/icons/profile.svg" width = {174} height = {174} alt = "Podcast image" className = "w-full aspect-square h-fit rounded-xl"/>
            <h1 className = "text-white-1 truncate">{title}</h1>
            <h2 className = "text-white-4 capitalize">{description}</h2>
        </div>
      </figure>
    </div>
  )
}

export default PodcastCard
