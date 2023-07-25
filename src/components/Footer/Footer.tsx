import { tinaField } from "tinacms/dist/react";
import { GlobalFooter } from "../../../tina/__generated__/types";
import { getIcon } from "../../utils/getIcon";
import { Link } from "../Link";
import style from "./styles.module.css";

export const Footer = ({ socialNav }: GlobalFooter) => (
  <footer className={style.footer}>
    <nav>
      <ul className={style.footerSocials}>
        {socialNav &&
          socialNav?.map((social, i: number) => (
            <li key={`socialNav_${i}`}>
              <Link
                className={style.footerSocialLink}
                url={social.url || ""}
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
