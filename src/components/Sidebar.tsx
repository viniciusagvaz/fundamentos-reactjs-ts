import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=50"
			/>
			<div className={styles.profile}>
				<Avatar
					hasBorder
					src="https://media.licdn.com/dms/image/D4D03AQGCdfT1sEBxGA/profile-displayphoto-shrink_400_400/0/1687813480909?e=1698278400&v=beta&t=nisZwlVzwxAoXbV9k73QdvDGVd08Y-uKhBJ9GdH0HcA"
				/>

				<strong>Vinícius Vaz</strong>
				<span>Front-End Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu Perfil
				</a>
			</footer>
		</aside>
	);
}
