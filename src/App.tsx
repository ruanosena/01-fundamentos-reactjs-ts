import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/ruanosena.png",
			name: "Ruan Sena",
			role: "Desenvolvedor trainee",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "👉jane.design/doctorcare" },
		],
		publishedAt: new Date("2024-01-12 15:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/ramonsenadev.png",
			name: "Ramon Sena",
			role: "Desenvolvedor pleno",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "👉jane.design/doctorcare" },
		],
		publishedAt: new Date("2024-01-15 15:00:00"),
	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</main>
			</div>
		</div>
	);
}
