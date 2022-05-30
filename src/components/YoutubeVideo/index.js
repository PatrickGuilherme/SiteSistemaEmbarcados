import React from 'react'

export default function YoutubeVideo({ embedId }) {
  return (
      <iframe
        width="480"
        height="240"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
  )
}