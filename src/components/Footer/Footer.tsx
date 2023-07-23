import style from "./styles.module.css";
import { GlobalFooter } from "../../../tina/__generated__/types";
import Link from "next/link";
import { getIcon } from "../../utils/getIcon";
import { tinaField } from "tinacms/dist/react";

export const Footer = ({ socialNav }: GlobalFooter) => (
	<footer className={style.Footer}>
		<nav>
			<ul className={style.FooterSocials}>
				{socialNav &&
					socialNav?.map((social, i: number) => (
						<li key={`socialNav_${i}`}>
							<Link
								className={style.FooterSocialLink}
								href={social.url || ""}
								aria-label={social.title || ""}
								data-tina-field={tinaField(social)}
							>
								{getIcon(social?.icon || "")}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	</footer>
);
