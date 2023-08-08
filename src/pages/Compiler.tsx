import "../styles/compiler.css"
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {ApiService} from "../services/apiClientService.ts";
import {FullQuestionResponse} from "../interfaces/Responses/fullQuestionResponse.ts";
import {QuestionCard} from "../components/QuestionCard.tsx";
import {Editor} from "@monaco-editor/react";
import {NavBarEditor} from "../components/NavBarEditor.tsx";
import {CircularProgress} from "@mui/material";
import {Loading} from "../components/Loading.tsx";

export function Compiler() {
    const defaultCode = "public class Main {\n    public static void main(String[] args) {\n \n }\n}";
    const [question, setQuestion] = useState<FullQuestionResponse>();
    const [userCode, setUserCode] = useState<string | undefined>(``);
    const [fontSize, setFontSize] = useState('20');
    const [userOutput, setUserOutput] = useState("");
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        fontSize: fontSize
    }
    const params = useParams();
    const questionId = params.id;

    useEffect(() => {
        if (questionId != null) {
            ApiService.getQuestionById(questionId)
                .then(response => setQuestion(response.data))
                .catch(error => console.error(error))
                .finally(() => setIsLoading(false));
        }
    }, [questionId]);

    async function compile() {
        setIsLoading(true);
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
            setIsLoading(false);
        })
    }


    return (<div className="compiler-container">
        <div className="question-container">
            {question ? <QuestionCard question={question}/> : <Loading />}
        </div>
        <div className="editor-container">
            <NavBarEditor
                fontSize={fontSize}
                setFontSize={setFontSize}
                compile={compile}
                disableRun={isLoading}
                questionId={questionId as string}
                code={userCode as string}
            />
            <Editor
                // @ts-ignore
                options={options}
                height="calc(100vh - 280px)"
                width="100%"
                theme="vs-dark"
                language="java"
                defaultLanguage="java"
                defaultValue={defaultCode}
                onChange={(value: string | undefined) => {
                    setUserCode(value)
                }}
            />
            <div className="data-container">
                <div className="output-container">
                    <span>Output:</span>
                    <div className={`output-custom ${isLoading ? `center-items`: ``}`}>
                        {isLoading ? <CircularProgress color="inherit"/> : <pre>{userOutput}</pre>}
                    </div>
                </div>
                <div className="input-container">
                    <span>Input:</span>
                    <textarea id="code-inp" onChange=
                        {(e) => setUserInput(e.target.value)}>
                        </textarea>
                </div>
            </div>
        </div>
    </div>)
}