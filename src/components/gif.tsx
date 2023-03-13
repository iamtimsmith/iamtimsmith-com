import { Template } from "tinacms"

export const Gif = ({src, caption}: any) => (
    <figure>
        <video src={src} loop muted playsInline autoPlay/>
        {caption && <figcaption>{caption}</figcaption>}
    </figure>
)

export const GifSchema: Template = {
    name: 'Gif',
    label: 'Gif',
    fields: [
        {
            name: 'src',
            label: 'Source',
            type: 'string',
        },
        {
            name:'caption',
            label: 'Caption',
            type: 'string',
        }
    ]
}
