import React from "react";
import './App.css';
import img from "./thumb-1920-1347168.png";
import img2 from "./dlc2_11.webp";
import img1 from "./mapon_bridge_dks3-dlc.jpg";
import img3 from "./Dark_Souls_III.jpg";

function App() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <ul className="nav navbar-nav d-flex flex-row w-100 justify-content-between">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki">Wiki Home</a>
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/Media+&+Community">Media & Community</a>
        <a className="dropdown-item" href="">Wiki Forums</a>
        <a className="dropdown-item" href="">Wiki To-Do</a>
      </div>
    </li>

    {/* General Dropdown */}
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">General</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/General+Information">General</a>
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki">Dark Soul 3</a>
        <a className="dropdown-item" href="">DLC</a>
        <a className="dropdown-item" href="">Secrets</a>
        <a className="dropdown-item" href="">Controls</a>
        <a className="dropdown-item" href="">Covenets</a>
        <a className="dropdown-item" href="">Bornfires</a>
        <a className="dropdown-item" href="">Lord Of Cinder</a>
      </div>
    </li>

    {/* Character Dropdown */}
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Character</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/Character+Information">Character Information</a>
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/Classes">Classes</a>
        <a className="dropdown-item" href="">Gifts</a>
        <a className="dropdown-item" href="">Gestures</a>
        <a className="dropdown-item" href="">Builds</a>
      </div>
    </li>

    {/* Equipment Dropdown */}
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Equipment</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/Equipment+&+Magic">Equipment & Magic</a>
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/Skills">Skills</a>
        <a className="dropdown-item" href="">Spells</a>
        <a className="dropdown-item" href="">Souls Transposition</a>
        <a className="dropdown-item" href="">Weapons</a>
        <a className="dropdown-item" href="">Shields</a>
        <a className="dropdown-item" href="">Armor</a>
        <a className="dropdown-item" href="">Rings</a>
        <a className="dropdown-item" href="">Updates</a>
        <a className="dropdown-item" href="">Items</a>
      </div>
    </li>

    {/* World Dropdown */}
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">World</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/World+Information">World Information</a>
        <a className="dropdown-item" href="https://darksouls3.wiki.fextralife.com/Locations">Locations</a>
        <a className="dropdown-item" href="">Covenets</a>
        <a className="dropdown-item" href="">NPCs</a>
        <a className="dropdown-item" href="">Merchants</a>
        <a className="dropdown-item" href="">Enemies</a>
        <a className="dropdown-item" href="">Lore</a>
      </div>
    </li>
  </ul>
</nav>

      <div className="text-left">
        <strong>
        <a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki">
          <img src={img3} alt="brand-logo" width="220" height="90" />
        </a>
        </strong>
      </div>
      <div className="text-center">
        <a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki"className="no-underline">DS3</a><br />
        <img src={img} alt="Cinque Terre" className="rounded-corners" width="560" height="300" />
      </div>
      <div className="text-container">
        <p className="textcolor">Dark Souls III is an action role-playing video game developed by From Software and published by Bandai Namco for PlayStation 4, Xbox One, and Microsoft Windows. The third entry in the "Dark Souls" series, Dark Souls III was released in Japan on March 24th, 2016, and worldwide on April 12th, 2016.
        See <a href="https://darksouls3.wiki.fextralife.com/New+Player+Help" className="no-underline">New Player Help</a> for an overview of game basics, and <a href="https://darksouls3.wiki.fextralife.com/Common+Souls+Terms" className="no-underline">Common Souls Terms</a> for an evolving glossary of the community lexicon.</p>
      </div>
      <div className="text-center">
        <a href="https://darksouls3.wiki.fextralife.com/Ashes+of+Ariandel" className="no-underline">Ashes of Ariandel</a><br />
        <img src={img1} alt="Cinque Terre" className="rounded-corners" width="560" height="300" />
      </div>
      <div className="text-container">
        <p className="textcolor">Ashes of Ariandel is the first of two <a href="https://darksouls3.wiki.fextralife.com/DLC" className="no-underline">DLCs</a> in <a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki" className="no-underline">Dark Souls 3</a>. It was released on October 25th. To access this DLC, interact with Slave Knight Gael at the Cleansing Chapel Bonfire in the Cathedral of the Deep. This expansion takes place in a new area called the Painted World of Ariandel, featuring new challenges, enemies, and lore for players to uncover.
        <br />On April 21st, <a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+The+Fire+Fades+Edition" className="no-underline">DARK SOULS III: The Fire Fades GOTY Edition</a> was released, including both Ashes of Ariandel and The Ringed City expansions. For more information, check out our <a href="https://darksouls3.wiki.fextralife.com/Ashes+of+Ariandel" className="no-underline">Ashes of Ariandel page</a>.</p>
      </div>
      <div className="text-center">
        <a href="https://darksouls3.wiki.fextralife.com/The+Ringed+City" className="no-underline">The Ringed City</a><br />
        <img src={img2} alt="Cinque Terre" className="rounded-corners" width="560" height="300" />
      </div>
      <div className="text-container">
        <p className="textcolor">The Ringed City is the second of two <a href="https://darksouls3.wiki.fextralife.com/DLC" className="no-underline">DLCs</a> in <a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki" className="no-underline">Dark Souls 3</a>. It was released on March 27th, 2017. To access this DLC, interact with the Blacksmith at the Firelink Shrine. This expansion concludes the story of Dark Souls III and features new areas, bosses, items, and challenges for players to discover.
        <br />The Ringed City launched on March 27th on PS4, Xbox One, and PC for $14.99, or is part of the Season Pass. For more information, check out our <a href="https://darksouls3.wiki.fextralife.com/The+Ringed+City" className="no-underline">The Ringed City page</a>.</p>
      </div>
    </div>
  );
}

export default App;
