import { useEffect } from "react";

export default function TitleComponent (title)  {

    useEffect(() => {
        document.title = `${title} | Shija Hospitals`;
    }, [title]);

    return null;
}
