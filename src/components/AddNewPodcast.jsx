

export default function AddNewPodcast({ setNewPodcast, newPodcast, setPodcasts }) {
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
    );
}