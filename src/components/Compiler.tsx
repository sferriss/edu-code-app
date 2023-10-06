import React from 'react';
import NavBarEditor from './NavBarEditor';
import {Editor} from '@monaco-editor/react';
import {CircularProgress} from '@mui/material';
import '../styles/laboratory.css';

interface CompilerProps {
    fontSize: string;
    setFontSize: (value: string) => void;
    compile: () => Promise<void>;
    isLoading: boolean;
    questionId: string;
    userCode: string;
    defaultCode: string;
    setUserCode: (value: string | undefined) => void;
    isCompileLoading: boolean;
    userOutput: string;
    setUserInput: (value: string) => void;
}

const OutputContainer: React.FC<{ isLoading: boolean; output: string }> = ({isLoading, output}) => (
    <div className="output-container">
        <span>Output:</span>
        <div className={`output-custom ${isLoading ? 'center-items' : ''}`}>
            {isLoading ? <CircularProgress color="inherit"/> :
                <pre style={{fontSize: '14px', fontFamily: 'helvetica,Arial,sans-serif'}}>{output}</pre>}
        </div>
    </div>
);

export const Compiler: React.FC<CompilerProps> = ({
                                                      fontSize,
                                                      setFontSize,
                                                      compile,
                                                      isLoading,
                                                      questionId,
                                                      userCode,
                                                      defaultCode,
                                                      setUserCode,
                                                      isCompileLoading,
                                                      userOutput,
                                                      setUserInput,}) => {


    const options = {
        fontSize: fontSize as unknown as number
    }

    return (
        <div className="editor-container">
            <NavBarEditor
                fontSize={fontSize}
                setFontSize={setFontSize}
                compile={compile}
                disableRun={isLoading}
                questionId={questionId}
                code={userCode}
            />
            <Editor
                options={options}
                height="calc(100vh - 280px)"
                width="100%"
                theme="vs-dark"
                language="java"
                defaultLanguage="java"
                defaultValue={defaultCode}
                onChange={(value) => setUserCode(value)}
            />
            <div className="data-container">
                <OutputContainer isLoading={isCompileLoading} output={userOutput}/>
                <div className="input-container">
                    <span>Input:</span>
                    <textarea id="code-inp" onChange={(e) => setUserInput(e.target.value)}></textarea>
                </div>
            </div>
        </div>
    );
};