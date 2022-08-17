import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { OneQ } from "../types/onequestion";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { env } from "process";
//import Image from 'next/image'

type OneQuestion = {
    question: OneQ;
};

export default function UnansweredCard(props: OneQuestion) {
    const { user } = useUser();
    const router = useRouter();

    const [value, setValue] = React.useState(props.question.optionOne.text);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handleunswerq = async () => {
        const id = router.query["id"];
        const option = value == props.question.optionOne.text ? "optionOne" : "optionTwo";
        const respose = await fetch(`${env.API_URL}/question/answer`, {
            method: "PUT",
            body: JSON.stringify({
                name: user?.nickname,
                qid: id,
                option: option,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await respose.json();
        //console.log(data);
        if (data) {
            router.push("/");
        }
    };

    const handleSubmit = async () => {
        const id = router.query["id"];
        const option = value == props.question.optionOne.text ? "optionOne" : "optionTwo";
        const respose = await fetch(`${env.API_URL}/user/answer`, {
            method: "PUT",
            body: JSON.stringify({
                email: user?.name,
                qid: id,
                option: option,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await respose.json();
        //console.log(data);
        if (data) {
            handleunswerq();
        }
    };

    return (
        <>
            <Grid container justifyContent="center">
                <Card sx={{ maxWidth: 450, marginTop: 5, padding: 5 }}>
                    <Typography variant="h5" component="div">
                        Would You Game Using Next.Js
                    </Typography>
                    <CardMedia component="img" height="200" image={props.question.avatarURL} alt="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.question.author} asked would you rather
                        </Typography>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={value}
                                onChange={handleChange}
                                name="radio-buttons-group">
                                <FormControlLabel value={props.question.optionOne.text} control={<Radio />} label={props.question.optionOne.text} />
                                <FormControlLabel value={props.question.optionTwo.text} control={<Radio />} label={props.question.optionTwo.text} />
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleSubmit}>Submit Answer</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
