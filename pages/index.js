import TopStarRepos from './top-star-repos'
import executeQuery from '../lib/tidb'

export default function Home({ rows }) {
  return (
    <div>
      <h1 className="text-6xl font-bold">
        <a className="text-blue-600" href="https://ossinsight.io/">
          OSS Insight Demo
        </a>
      </h1>

      <TopStarRepos rows={rows} />

    </div>
  )
}

export async function getStaticProps() {
  const results = await executeQuery(`
    SELECT repo_name, count(*) AS events_count
      FROM github_events
      WHERE type = 'WatchEvent'
      GROUP BY 1
      ORDER BY 2 DESC
      LIMIT 20;
  `);

  let rows = [];
  for (const row of results) {
    rows.push({
      repo_name: row.repo_name,
      events_count: row.events_count
    });
  }

  return {
    props: {
      rows,
    }
  }
}