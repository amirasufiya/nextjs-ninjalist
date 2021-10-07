import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        // set timer to redirect
        let timer = setTimeout(() => {
            // router.go(-1)
            router.push('/')
        }, 3000);
        // clear timer if user click the Homepage link
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='not-found'>
            <h1>Opsss..</h1>
            <h2>The page cannot be found</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound;