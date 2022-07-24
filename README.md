# Next.js + TiDB

This is a [Next.js](https://nextjs.org/) project that uses [TiDB](https://github.com/pingcap/tidb/) as a database and [OSS Insight](https://ossinsight.io) as a data source.

The online demo is [next-tidb-demo.vercel.app](https://next-tidb-demo.vercel.app/), hosted by [Vercel](https://vercel.com/) and [TiDB Cloud](https://tidb.cloud).

## Getting Started

### Use a TiDB Cloud Developer Tier (Free)

- Visit [TiDB Cloud](https://tidb.cloud/) and do the Sign Up.
- Create a Developer Tier (Free).
- Click your cluster name in **Active Cluster** page, and then Click the **Connect** button, and get the connection **Endpoint**.

### Load Sample Data

Follow the [guide](https://ossinsight.io/blog/try-it-yourself) to load OSS Insight sample data into TiDB cloud.

### Start the Server


Set environment variables

```
export MYSQL_HOST=tidb.6479717b.c3f4522.ap-northeast-1.prod.aws.tidbcloud.com 
export MYSQL_PORT=4000 
export MYSQL_USER=root 
export MYSQL_DATABASE=gharchive_dev
export MYSQL_PASSWORD={your password}
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js + TiDB, take a look at the following resources:

- [TiDB Documentation](https://docs.pingcap.com/tidb/stable)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
