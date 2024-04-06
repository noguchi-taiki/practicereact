import style from "../../styles/hero.module.css"
import Image from "next/image"
import cube from "../../images/cube.jpg"

export default function Hero({title,subtitle,imgeOn = false}){
    return(
        <div className={style.flexContainer}>
            <div className={style.text}>
                <div className={style.titleAndSubtitle}>
                    <h1 className={style.title}>{title}</h1>
                    <p className={style.subtitle}>{subtitle}</p>
                </div>
                {imgeOn && (
                    <figure className={style.image}>
                        <Image
                        src={cube}
                        alt=""
                        layout="responsive"
                        sizes="(min-width: 1152) 576px,(min-width:768px) 50vw, 100vw"
                        />
                    </figure>
                )}
            </div>

        </div>
    )
}
