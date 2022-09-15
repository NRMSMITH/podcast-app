import AddNewPodcast from "./AddNewPodcast";
//import podlist
import { useState } from "react";
import PodcastList from "./PodcastList";

export default function PodcastProvider() {
    const [podcasts, setPodcasts] = useState([
          { id: 1, title: "Dungeons and Daddies", added: "05-05-2020" },
          { id: 2, title: "American Hysteria", added: "07-08-2021" },
          { id: 3, title: "Maintenance Phase", added: "05-04-2022" },
        ]);
    const [newPodcast, setNewPodcast] = useState('')
    
    return (
      <>
      <PodcastList podcasts={podcasts}/>
        <AddNewPodcast setNewPodcast={setNewPodcast} newPodcast={newPodcast} setPodcasts={setPodcasts}/>
      </>
    );
}