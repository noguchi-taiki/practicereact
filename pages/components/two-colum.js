import style from "../../styles/two-colum.module.css"

export function TwoColuem({children}){
    return(
        <div className={style.flexContainer}>
            {children}
        </div>
    )
}

export function TwoColuemMain({children}){
    return(
        <div className={style.main}>
            {children}
        </div>
    )
}

export function TwoColuemSide({children}){
    return(
        <div className={style.side}>
            {children}
        </div>
    )
}