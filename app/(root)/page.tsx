'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import podcastData from '@/constants/podcastData'
import PodcastCard from '@/components/PodcastCard'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const page = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className = "flex flex-col gap-9">
        <section className = "flex flex-col gap-5">
            <h1 className = "text-20 font-bold text-white-1">Trending podcasts</h1>
            <div className = "podcast_grid">
               {podcastData.map((podcast) => (
              <PodcastCard title = {podcast.title} description = {podcast.description} podcastId = {podcast.id} img_url= {podcast.imgURL} />
            ))}
            </div> 
        </section>
    </div>
  )
}

export default page
