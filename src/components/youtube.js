import React from "react"

const Youtube = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div class="iframe-container">
      <iframe
        class="iframe-responsive"
        title="Always look on the bright side of life."
        src={videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      />
    </div>
  )
}

export default Youtube
