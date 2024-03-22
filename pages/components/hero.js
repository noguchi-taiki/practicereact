export default function Hero({title,subtitle,imgeOn = false}){
    return(
        <>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {imgeOn && <figule>画像</figule>}
        </>
    )
}
