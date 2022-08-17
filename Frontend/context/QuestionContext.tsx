import React, { FC, useState } from 'react';
import { Question } from '../types/question';

type QuestionContexttype={
    questions:Question
    updateQuestions:(qustionlist: Question) => void;
}

export const QuestionContext = React.createContext<QuestionContexttype>({
	questions: [],
	updateQuestions: (qustionlist: Question) => {},

});

interface QuestionProviderProps {
	children: React.ReactNode;
}

const QuestionProvider: FC<QuestionProviderProps> = ({ children }) => {
	const [questions, setQuestions] = useState<Question>([]);


	const updateQuestions = (qustionlist: Question) => {
		setQuestions(qustionlist);
	};


	const contextValue: QuestionContexttype = {
		questions,
        updateQuestions
	};

	return <QuestionContext.Provider value={contextValue}>{children}</QuestionContext.Provider>;
};

export default QuestionProvider;