import { useEffect } from "react";
import { useRouter } from "next/router.js";

// Redirect to main page upon 404.
export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/");
    }, []);
    return <></>;
}