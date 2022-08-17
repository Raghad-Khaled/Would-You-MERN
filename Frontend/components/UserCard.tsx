import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import { oneuser } from '../types/user';


type UserProps ={ 
    user:oneuser
 }

export default function UserCard( props: UserProps) {

  const questionAnswered=props.user.answers? Object.keys(props.user.answers).length : 0;
  const questionAsked=props.user.questions? props.user.questions.length :0;
  const score=questionAnswered+questionAsked;


  return (
    <>
    <Grid container justifyContent="center">
    <Card sx={{ maxWidth: 450, marginTop:5, padding:5 }}>
      <Typography variant="h5" component="div">
       Would You Game Using Next.Js
      </Typography>
        <CardMedia
          component="img"
          height="200"
          image={props.user.avatarURL? props.user.avatarURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JyScJ3XAm0g9mNMQ1Ws7EI6LoVgs7_HDXg&usqp=CAU' }
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.user.email.split("@")[0]}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
         Score {score}
        </Typography>
        <Typography variant="h6" color="text.secondary">
         Questions Answered {questionAnswered}
          <br/> <br/>
          Question Created {questionAsked}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </>
  );
}

