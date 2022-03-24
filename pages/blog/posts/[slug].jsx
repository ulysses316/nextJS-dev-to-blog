import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@mui/material';

export default function Post({ devDotToPost }) {
    const {
        title,
        published_at,
        social_image,
        body_html,
        user,
        type_of,
        description,
        canonical_url
    } = devDotToPost;

    return (
        <Container>
            <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: body_html }}
            />         
        </Container>   
    )
}

export const getStaticProps = async ({ params }) => {
    const devDotToPost = await fetch(
        `https://dev.to/api/articles/${process.env.DEV_USERNAME}/${params.slug}`
    );
    const res = await devDotToPost.json();

    return {
        props: {
            devDotToPost: res
        }
    };
};

export async function getStaticPaths() {
    const devDotToPosts = await fetch(
        `https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`
    );
    const posts = await devDotToPosts.json();

    return {
        paths: posts.map(post => {
            return {
                params: {
                    slug: post.slug
                }
            };
        }),
        fallback: false
    };
}