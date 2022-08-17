import * as React from "react";
import Typography from "@mui/material/Typography";
import { User } from "../types/user";
import { useUser } from "@auth0/nextjs-auth0";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Question } from "../types/question";
import QuestionsList from "../components/QuestionsList";
import { QuestionContext } from "../context/QuestionContext";
import { QuestionlistContext } from "../context/QuestionlistContext";
import { UserlistContext } from "../context/UserlistContext";
import { env } from "process";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={"div"} variant="body2">
                        {children}
                    </Typography>
                </Box>
            )}
        </div>
    );
}

type UserProps = { users: User; questions: Question };

export default function Signin(props: UserProps) {
    const { user } = useUser();
    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const Questions = props.questions;
    const username = user?.nickname ? user.nickname : "";
    const answeredquestions = Questions.filter(
        (question) => question.optionOne.votes.includes(username) || question.optionTwo.votes.includes(username)
    );
    const unansweredquestions = Questions.filter(
        (question) => !question.optionOne.votes.includes(username) && !question.optionTwo.votes.includes(username)
    );

    const { updateQuestions } = React.useContext(QuestionContext);
    const { updateQuestionslist } = React.useContext(QuestionlistContext);
    const { updateUserslist } = React.useContext(UserlistContext);

    const saveavater = async () => {
        const respose = await fetch(`${env.API_URL}/user/avater`, {
            method: "PUT",
            body: JSON.stringify({
                email: user?.name,
                avater: user?.picture,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await respose.json();
    };

    React.useEffect(() => {
        updateQuestions(answeredquestions);
        updateQuestionslist(props.questions);
        updateUserslist(props.users);
        saveavater();
    }, []);

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Answered Questions" id="0" />
                    <Tab label="UnAnswered Questions" id="1" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <QuestionsList questions={answeredquestions} users={props.users} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <QuestionsList questions={unansweredquestions} users={props.users} />
            </TabPanel>
        </Box>
    );
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${env.API_URL}/user`);
    const users = await res.json();

    const res2 = await fetch(`${env.API_URL}/question`);
    const questions = await res2.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            users,
            questions,
        },
    };
}
