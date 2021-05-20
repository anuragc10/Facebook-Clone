import React from 'react';
import Story from './Story';
import "./StoryReel.css";
function StoryReel() {
    return (
        <div className="storyreel">
            {/* story */}
            <Story
            image="https://data.ibtimes.sg/en/full/40716/kim-soo-hyun.jpg"
            profileSrc="https://i.pinimg.com/564x/35/41/3f/35413f18dec39498246c8758fe0f9032.jpg"
            title="it's okay"
            />
            <Story
            image="https://wallpapercave.com/wp/wp3592212.jpg"
            profileSrc="https://wallpapercave.com/wp/wp4725233.jpg"
            title="Cha eun"
            />
            <Story
            image="https://i.pinimg.com/236x/43/34/cd/4334cddd12ee1c1293abfc75b7335f0a.jpg"
            profileSrc="https://www.imgonline.com.ua/examples/jpeg-artifacts_3x.png"
            title="Scenery"
            />
            <Story
            image="https://kennysantos.com/wp-content/uploads/2019/10/pexels-photo-1955134.jpeg"
            profileSrc="https://thecyphersagency.com/wp-content/uploads/2019/06/hummingbird-72dpi.png"
            title="Birds in Garden"
            />
            <Story
            image="https://wallery.app/dufovot/sunflowers-field-wallpaper-500x667.jpg"
            profileSrc="https://dev.amorce.org/aghanem/jarditou/images/JARDITOU_files/73.jpg"
            title="Flower"
            />
        </div>
    )
}

export default StoryReel
