import { client } from "../../lib/api"

export default function Schedule(){
    return <h1>記事のタイトル</h1>
}

export async function getStaticProps(){
    const resPromise = client.get({
        endpoint:"blogs",
    })
    try {
        const res = await resPromise
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    return{
        props:{},
    }
}