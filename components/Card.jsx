import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Next
import Link from 'next/link';

export default function RecipeReviewCard(
  {
    img,
    createdAt,
    title,
    desc,
    slug,
    likes,
    comments,
    user,
    tagList
  }) {

  return (
    <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={user.profile_image_90} alt="" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={user.name}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt=""
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <strong>{title}</strong><br />
            {desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <small>{likes}</small><FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
}
