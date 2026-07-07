type CloudinaryAssetKind = 'image' | 'video';

interface ICloudinaryAssetProps {
    readonly publicId: string;
    readonly kind?: CloudinaryAssetKind;
    readonly format?: string;
    readonly width?: number;
    readonly alt?: string;
    readonly controls?: boolean;
    readonly loop?: boolean;
    readonly muted?: boolean;
    readonly autoPlay?: boolean;
    readonly cloudName?: string;
}

function buildCloudinaryUrl(cloudName: string, kind: CloudinaryAssetKind, publicId: string, format?: string): string {
    const extension = format ? `.${format}` : '';
    return `https://res.cloudinary.com/${cloudName}/${kind}/upload/${publicId}${extension}`;
}

export function CloudinaryAsset(props: ICloudinaryAssetProps) {
    const {
        publicId,
        kind = 'image',
        format,
        width = 560,
        alt = 'Aperçu de fonctionnalité',
        controls = true,
        loop = true,
        muted = true,
        autoPlay = false,
        cloudName = 'app-surfy-pro'
    } = props;

    const src = buildCloudinaryUrl(cloudName, kind, publicId, format);

    if (kind === 'video') {
        return (
            <video
                src={src}
                controls={controls}
                loop={loop}
                muted={muted}
                autoPlay={autoPlay}
                playsInline={true}
                style={{ width, maxWidth: '100%', borderRadius: 8 }}
            >
                <track kind="captions" />
            </video>
        );
    }

    return <img src={src} alt={alt} width={width} style={{ maxWidth: '100%', borderRadius: 8 }} loading="lazy" />;
}
