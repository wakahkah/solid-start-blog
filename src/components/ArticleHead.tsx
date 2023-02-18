import { Head, Title, Meta, Link, Body, Scripts } from 'solid-start'

const ArticleHead = ({ title, description, date, thumbnailUrl }) => {
    return (
        <Head>
            <Title>{title} - Solid Blog</Title>
            <Meta name='description' content={description} />
            <Meta property='og:description' content={description} />
            <Meta property='og:title' content={`${title} - Soild Blog`} />
        </Head>
    )
}

export default ArticleHead