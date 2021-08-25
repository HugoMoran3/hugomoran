import React from "react"

const Card = () => {
    return (
        <div class="card">
            <div class="item">
                <a href="#0" aria-labelledby="project1"></a>
                <img src='https://i.imgur.com/DkfiBxR.jpeg' alt=''/>
                <div class="cardoverlay">
                <h3 id="project1" aria-hidden="true">React Gallery</h3>
                <div class="cardbody">
                    <p>A fully functioning gallery made in React that allows searching and uploading to Cloudinary via the Cloudinary API</p>
                </div>
                </div>
            </div>
            <div class="item">
                <a href="#0" aria-labelledby="project2"></a>
                <img src='https://i.imgur.com/uupFUE2.png' alt='Discord logo'/>
                <div class="cardoverlay">
                <h3 id="project2" aria-hidden="true">Discord Bot Alarm</h3>
                <div class="cardbody">
                    <p>This bot written in Python joins the channel and plays the Big Ben clocktower chimes every hour.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card