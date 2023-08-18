import {useTheme} from "next-themes";
import Image from "next/image";
interface OwnProps {
    lightImage: any
    darkImage: any
}
export const ImageProvider = (props: OwnProps) => {
    let {theme, systemTheme} = useTheme()
    if (theme === 'system') {
        theme = systemTheme;
    }
    if (theme === 'light') {
        return <div><Image src={props.lightImage} alt={"LightImage"}/></div>
    } else {
        return <div><Image src={props.darkImage} alt={"Dark Image"}/></div>
    }
}


export default ImageProvider;
