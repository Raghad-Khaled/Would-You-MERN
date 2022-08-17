import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {CardActions } from '@mui/material';
import Link from "next/link";
import Image from 'next/image'
import { OneQ } from '../types/onequestion';


type QuestionProps ={ 
  question:OneQ
}

export default function AskCard( props: QuestionProps) {
  //console.log(props.question);


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
          image={props.question.avatarURL}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.question.author} asked would you rather
        </Typography>
        <Typography component={'div'} variant="body2" color="text.secondary">
          {props.question.optionOne.text}
          <br/> <strong>OR</strong> <br/>
          {props.question.optionTwo.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/question/${props.question._id}`} ><a >View Question</a></Link>
      </CardActions>
    </Card>
    </Grid>
    </>
  );
}

