import bluebird from 'bluebird';
import redis from 'redis';
const cache = bluebird.promisifyAll(redis.createClient());

export default function Home({ somevalue }) {
	return (
		<div>
			{somevalue}
		</div>
	);
}

export const getServerSideProps = async (context) => {
  await cache.set('name', 'johnson');
	const somevalue = await cache.getAsync('name');
	return {
		props: { somevalue },
	};
};
