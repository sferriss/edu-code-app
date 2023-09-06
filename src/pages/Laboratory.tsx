import "../styles/laboratory.css"
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {ApiService} from "../services/apiClientService.ts";
import {FullQuestionResponse} from "../interfaces/responses/fullQuestionResponse.ts";
import QuestionCard from "../components/QuestionCard.tsx";
import {Loading} from "../components/Loading.tsx";
import {Compiler} from "../components/Compiler.tsx";

export function Laboratory() {
    const defaultCode = "public class Main {\n    public static void main(String[] args) {\n \n }\n}";
    const [question, setQuestion] = useState<FullQuestionResponse>();
    const [userCode, setUserCode] = useState<string | undefined>(``);
    const [fontSize, setFontSize] = useState('20');
    const [userOutput, setUserOutput] = useState("");
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isCompileLoading, setIsCompileLoading] = useState(false);

    const params = useParams();
    const questionId = params.id;

    useEffect(() => {
        if (questionId != null) {
            setIsLoading(true);

            ApiService.getQuestionById(questionId)
                .then(response => setQuestion(response.data))
                .catch(error => console.error(error))
                .finally(() => setIsLoading(false));
        }
    }, [questionId]);

    async function compile() {
        setIsCompileLoading(true);
        if (userCode === ``) {
            return
        }

        await ApiService.postCompile({
            language: "java",
            code: userCode,
            input: userInput
        }).then((res) => {
            setUserOutput(res.data.output);
        }).finally(() => {
            setIsCompileLoading(false);
        })
    }


    return (<div className="lab-container">
        <div className="question-container">
            {isLoading ? <Loading/> : question ? <QuestionCard question={question}/> : null}
        </div>
        <Compiler
            fontSize={fontSize}
            setFontSize={setFontSize}
            compile={compile}
            isLoading={isLoading}
            questionId={questionId as string}
            userCode={userCode as string}
            defaultCode={defaultCode}
            setUserCode={setUserCode}
            isCompileLoading={isCompileLoading}
            userOutput={userOutput}
            setUserInput={setUserInput}
        />
    </div>)
}