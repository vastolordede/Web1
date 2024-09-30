import React from "react";
import img from "./thumb-1920-1347168.png";
import img2 from "./dlc2_11.webp";
import img1 from "./mapon_bridge_dks3-dlc.jpg";
function App() {
  return (
    //nut nay xai cho vui th.
    <div className="container">
      <div class="card shadow">
        <div class="text-center">
          <div class="card bg-secondary text-white">
           <div class="card-body">
    
              <a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki">DS3</a>
            </div>
          </div>
        </div>  
      </div>
    <div className="text-center mt-3">
    <img src={img} alt="Cinque Terre" className="rounded-corners" width="560" height="300"/>
            <p>Dark Souls III is an action role-playing video game developed by From Software and published by Bandai Namco for PlayStation 4, Xbox One, and Microsoft Windows. The third entry in the "Dark Souls" series, Dark Souls III was released in Japan in March 24th 2016, and worldwide in April 12th 2016.
            See <a href="https://darksouls3.wiki.fextralife.com/New+Player+Help">New Player Help</a> for an overview of game basics, and <a href="https://darksouls3.wiki.fextralife.com/Common+Souls+Terms">Common Souls Terms</a> for an evolving glossary of the community lexicon. </p>
      <a href=" https://darksouls3.wiki.fextralife.com/Ashes+of+Ariandel"> Ashes of Ariandel </a>
      <img src={img1} alt="Cinque Terre" className="rounded-corners"  width="560" height="300" />
    
            <p>Ashes of Ariandel is the first of two <a href="https://darksouls3.wiki.fextralife.com/DLC">DLCs</a> in <a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki">Dark Souls 3</a>. It was released on October 25th. To access this DLC, interact with Slave Knight Gael at the Cleansing Chapel Bonfire in the Cathedral of the Deep. This expansion takes place in a new area called the Painted World of Ariandel, featuring new challenges, enemies, and lore for players to uncover.
            <br></br>On April 21st, <a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+The+Fire+Fades+Edition">DARK SOULS III: The Fire Fades GOTY Edition</a> was released, which includes the base game as well as both expansions, Ashes of Ariandel and <a href="https://darksouls3.wiki.fextralife.com/The+Ringed+City">The Ringed City</a>.
            <br></br>Ashes of Ariandel launched October 25th on PS4, Xbox One and PC for $14.99, or is part of the Season Pass.
            <br></br>Initial screenshots can be found in this article.
            <br></br>Due to an error of releasing the DLC  for testing, it was available for download, to owners of the Season Pass, during the patch on October 20th/21st between 1:00 UTC and 7:00 UTC. The DLC was quickly removed from the store to await its initial release date</p>
            
      <a href="https://darksouls3.wiki.fextralife.com/The+Ringed+City">The Ringed City</a>
      <img src={img2} alt="Cinque Terre" className="rounded-corners"  width="560" height="300" />

            <p>The Ringed City DLC is the second and final DLC for Dark Souls 3. It was announced on January 23rd, 2017 by Bandai Namco and released on March 28th, 2017. It is recommended by the developers for players that have cleared Lothric Castle. This can be accessed from the Kiln of the First Flame, where you'll need to go to a bonfire near a ramp that leads to the Soul of Cinder Arena. You can also access this from Sister Friede's arena located in the Painted World of Ariandel. These entry points allow players to venture into new areas and face unique challenges within the DLC. 
              On April 21st, Dark Souls 3: The Fire Fades GOTY Edition released which includes the base game as well as both expansions, Ashes of Ariandel and The Ringed City.
            <br></br>The Ringed City launched March 28th on PS4, Xbox One and PC for 14.99 or is part of the Season Pass.
            <br></br>Screenshots pre-launch: Article here, and here
            <br></br>Dark Souls 3 The Ringed City Review! 9.5/10</p>

        </div>
      </div>
    //toi day la noi dung
  );
}

export default App;
