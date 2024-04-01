import { Helmet } from "react-helmet"

export const MetaTags = ({ title, keywords, desc, author, rating, ogTitle, ogDesc, ogType, ogUrl, ogImg, OgImgType, ogImgAlt }) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta name='keywords' content={keywords} />
            <meta name='description' content={desc} />
            <meta name='author' content={author} />
            <meta name="rating" content={rating} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDesc} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:image" content={ogImg} />
            <meta property="og:image:type" content={OgImgType} />
            <meta property="og:image:alt" content={ogImgAlt} />

            <link rel="canonical" href={ogUrl} />
        </Helmet>
    )
}