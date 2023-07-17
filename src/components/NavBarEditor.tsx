import "../styles/compiler.css"

interface NavBarEditorProps {
    fontSize: string
    setFontSize: (value: string) => void
    compile: () => Promise<void>
}

export function NavBarEditor({fontSize, setFontSize, compile}: NavBarEditorProps) {

    return (
        <div className="navbar-editor">
            <div className="navbar-container-left">
                <span>Java</span>
                <div className="font-size-container">
                    <label>Font Size</label>
                    <input type="range" min="18" max="30"
                           value={fontSize} step="2"
                           onChange={(e) => {
                               setFontSize(e.target.value)
                           }}/>
                </div>
            </div>
            <div className="navbar-container-right">
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <button className="run-btn" onClick={() => compile()}>
                    Run
                </button>
            </div>
        </div>
    )
}