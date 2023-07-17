import "../styles/loading.css"
import {CircularProgress} from "@mui/material";

export function Loading() {
    return <div className="loading-container">
        <CircularProgress color="inherit"/>
    </div>
}