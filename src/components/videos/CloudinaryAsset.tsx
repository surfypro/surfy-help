import type { CSSProperties, ReactNode } from 'react';

type CloudinaryAssetKind = 'image' | 'video';

interface ICloudinaryAssetProps {
    readonly publicId: string;
    readonly kind?: CloudinaryAssetKind;
    readonly format?: string;
    readonly width?: number;
    readonly alt?: string;
    readonly title?: string;
    readonly showCaption?: boolean;
    readonly controls?: boolean;
    readonly loop?: boolean;
    readonly muted?: boolean;
    readonly autoPlay?: boolean;
    readonly cloudName?: string;
    /** Derive an animated GIF from a video public_id via Cloudinary transformation (no second upload). */
    readonly asGif?: boolean;
    readonly gifFps?: number;
}

const frameStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1.25rem auto',
    maxWidth: '100%'
};

const mediaBoxStyle: CSSProperties = {
    display: 'inline-flex',
    justifyContent: 'center',
    padding: 12,
    border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: 12,
    backgroundColor: 'var(--ifm-background-surface-color)',
    boxShadow: 'var(--ifm-global-shadow-lw)'
};

const captionStyle: CSSProperties = {
    marginTop: 10,
    maxWidth: 'min(100%, 42rem)',
    fontSize: '0.875rem',
    lineHeight: 1.45,
    color: 'var(--ifm-color-emphasis-700)',
    textAlign: 'center'
};

const mediaStyle: CSSProperties = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 6
};

function stripVideoExtension(publicId: string): string {
    return publicId.replace(/\.(mp4|webm|mov)$/i, '');
}

function buildCloudinaryUrl(
    cloudName: string,
    kind: CloudinaryAssetKind,
    publicId: string,
    format: string | undefined,
    options: { asGif: boolean; width: number; gifFps: number }
): string {
    const { asGif, width, gifFps } = options;

    if (asGif && kind === 'video') {
        const baseId = stripVideoExtension(publicId);
        const transforms = [`f_gif`, `fps_${gifFps}`, `w_${width}`, 'e_loop'].join(',');
        return `https://res.cloudinary.com/${cloudName}/video/upload/${transforms}/${baseId}.gif`;
    }

    const extension = format ? `.${format}` : '';
    return `https://res.cloudinary.com/${cloudName}/${kind}/upload/${publicId}${extension}`;
}

function CloudinaryAssetFrame(props: {
    readonly width: number;
    readonly title: string;
    readonly showCaption: boolean;
    readonly children: ReactNode;
}) {
    const { width, title, showCaption, children } = props;

    return (
        <figure style={frameStyle}>
            <div style={{ ...mediaBoxStyle, width: 'fit-content', maxWidth: '100%' }}>
                {children}
            </div>
            {showCaption ? <figcaption style={{ ...captionStyle, width }} title={title}>{title}</figcaption> : null}
        </figure>
    );
}

export function CloudinaryAsset(props: ICloudinaryAssetProps) {
    const {
        publicId,
        kind = 'image',
        format,
        width = 560,
        alt = 'Aperçu de fonctionnalité',
        title,
        showCaption = true,
        controls = true,
        loop = true,
        muted = true,
        autoPlay = false,
        cloudName = 'app-surfy-pro',
        asGif = false,
        gifFps = 16
    } = props;

    const mediaTitle = title ?? alt;
    const src = buildCloudinaryUrl(cloudName, kind, publicId, format, { asGif, width, gifFps });

    if (asGif || kind === 'image') {
        return (
            <CloudinaryAssetFrame width={width} title={mediaTitle} showCaption={showCaption}>
                <img
                    src={src}
                    alt={alt}
                    title={mediaTitle}
                    width={width}
                    style={mediaStyle}
                    loading="lazy"
                />
            </CloudinaryAssetFrame>
        );
    }

    return (
        <CloudinaryAssetFrame width={width} title={mediaTitle} showCaption={showCaption}>
            <video
                src={src}
                title={mediaTitle}
                controls={controls}
                loop={loop}
                muted={muted}
                autoPlay={autoPlay}
                playsInline={true}
                style={{ ...mediaStyle, width }}
            >
                <track kind="captions" />
            </video>
        </CloudinaryAssetFrame>
    );
}
