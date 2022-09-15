export default function PodcastList({ podcasts }) {
return (
        <ol>
          {podcasts.map((podcast) => {
            return (
              <li key={podcast.id}>
                <h2>{podcast.title}</h2>
              </li>
            );
          })}
        </ol>
)
}