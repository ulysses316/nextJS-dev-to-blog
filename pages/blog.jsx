import ResponsiveAppBar from '../components/Navbar';
import RecipeReviewCard from '../components/Card';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

export default function Blog({ devDotToPosts }) {
    return (
        <>
            <ResponsiveAppBar />
            <Container>
                <Grid container spacing={2} columns={16}>
                    {
                        devDotToPosts.map(
                            ({
                                id,
                                type_of,
                                comments_count,
                                published_at,
                                description,
                                title,
                                tag_list,
                                social_image,
                                positive_reactions_count,
                                user,                         
                                slug
                            }) => {
                                return (
                                    type_of === 'article' && (
                                        <Grid item xs={5}>
                                            <RecipeReviewCard
                                                key={id}
                                                id={id}
                                                img={social_image}
                                                createdAt={published_at}
                                                title={title}
                                                desc={description}
                                                slug={slug}
                                                likes={positive_reactions_count}
                                                comments={comments_count}
                                                tagList={tag_list}
                                                user={user}
                                            />
                                        </Grid>
                                    )
                                )
                            }
                        )
                    }
                </Grid>
            </Container>
        </>
    )
}

export const getStaticProps = async () => {
    const devDotToPosts = await fetch(
        `https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`
    );
    const res = await devDotToPosts.json();
    return {
        props: {
            devDotToPosts: res
        }
    };
};