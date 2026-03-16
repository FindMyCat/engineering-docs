import {useTheme} from "next-themes";
import Image from "next/image";
interface OwnProps {
    lightImage: any
    darkImage: any
    width?: number
}
export const ImageProvider = (props: OwnProps) => {
    let {theme, systemTheme} = useTheme()
    if (theme === 'system') {
        theme = systemTheme;
    }
    if (theme === 'dark') {
        return <div><Image src={props.darkImage} alt={"Dark Image"} {...props}/></div>
    } else {
        return <div><Image src={props.lightImage} alt={"LightImage"} {...props}/></div>
    }
}


export default ImageProvider;
