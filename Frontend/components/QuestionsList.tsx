import * as React from 'react';
import { User } from '../types/user';
import { Question } from '../types/question';
import AskCard from './AskCard';



type QuestionProps ={ 
questions:Question,
users:User
}

export default function QuestionsList( props: QuestionProps) {


  return (
    <>
    {
        props.questions.map((question)=>{
          return <AskCard key={question._id} question={question} />
        })
    }
    </>
  );
}

