import styles from './DownloadFile.module.scss';
import { Cards, Card } from 'nextra/components'

interface OwnProps {
    fileName: string
    fileLocation: string
}
export const DownloadCard = (props: OwnProps) => {
    const {fileName, fileLocation} = props
    const handleDownload = () => {
        // You can implement the download logic here
        // For example, creating a link and programmatically clicking it
        const link = document.createElement('a');
        link.href = fileLocation;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.card}>
            <h1>{fileName}</h1>
            <button className={styles.downloadButton} onClick={handleDownload}>
                Download
            </button>
        </div>
    );
};
