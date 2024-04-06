import style from "../../styles/social.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faFacebook,
    faGithub,
} from "@fortawesome/free-brands-svg-icons"

export default function Social(){
    return(
        <ul className={style.list}>
            <li>
                <a href="https://twitter.com/i/flow/login">
                    <FontAwesomeIcon icon={faTwitter}/>
                    <span className="sr-only">X</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/accounts/login/">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <span className="sr-only">Instagram</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub}/>
                    <span className="sr-only">Github</span>
                </a>
            </li>
        </ul>
    )
}

