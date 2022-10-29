import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import videos from "../portfolio-videos-link";


class VideoContainer extends Component {
    static get CONTAINER_STYLE() {
      return {
        position: "relative",
        height: "80vh",
        width: "50%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle",
        margin: "0 auto",
      };
    }
  
    static get CARD_STYLE() {
      return {
        height: "500px",
        width: "320px",
        paddingTop: "80px",
        textAlign: "center",
        background: "#3E412C",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"
      };
    }
  
    render() {
      return (
        <div style={VideoContainer.CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={false}>
            {videos.map((x)=>
                    <div style={VideoContainer.CARD_STYLE} className="video-container-card-style">
                        <iframe className="yt-video" style={{width:"310px", height:"210px", padding:"10px"}} src={`https://www.youtube.com/embed/${x}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <h1>Video</h1>
                        <p>
                            Please tap on other card to view more videos.<br/>
                            Video might appear small. Please view on full screen for better experience.
                        </p>
                    </div>
            )}
          </ReactCardCarousel>
        </div>
      );
    }
  }

export default VideoContainer
