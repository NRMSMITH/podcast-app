//import newapp
//import podlist
import { useState } from "react";

export default function PodcastProvider() {
    const [podcasts, setPodcasts] = useState([
          { id: 1, title: "Dungeons and Daddies", added: "05-05-2020" },
          { id: 2, title: "American Hysteria", added: "07-08-2021" },
          { id: 3, title: "Maintenance Phase", added: "05-04-2022" },
        ]);
    const [newPodcast, setNewPodcast] = useState('')
    const handleSubmit = (event) => {
      event.preventDefault();
      setPodcasts((currPodcasts) => {
        const newPodcasts = [...currPodcasts];
        newPodcasts.push({
          id: currPodcasts.length + 1,
          title: newPodcast,
          added: Date.now(),
        });
        return newPodcasts;
      });
      setNewPodcast("");
    };
    const handleChange = (event) => {
      setNewPodcast(event.target.value);
    };
    return (
      <>
        <ol>
          {podcasts.map((podcast) => {
            return (
              <li key={podcast.id}>
                <h2>{podcast.title}</h2>
              </li>
            );
          })}
        </ol>
        <form onSubmit={handleSubmit}>
          <label>Add New Podcast:</label>
          <br />
          <input
            value={newPodcast}
            onChange={handleChange}
            id="new_podcast"
            type="text"
            placeholder="Your new favourite podcast..."
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
}