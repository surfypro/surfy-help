export function Youtube(props: { code: string }) {
    const { code } = props;
    return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${code}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
}