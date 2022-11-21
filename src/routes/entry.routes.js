import { useParams } from "react-router-dom"
import styled from "styled-components"
import { EntryForm } from "../components/EntryForm"

export default function EntryPage(){
    const {type} = useParams()
    return(
        <EntryStyle>
            <div className="header">
                <h2>Nova entrada</h2>
            </div>
            <EntryForm type={type}/>
        </EntryStyle>
    )
}

const EntryStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .header{
        width: 90vw;
        display: flex;
        justify-content: start;
        padding-block: 24px;
        margin-top: 8px;

        h2{
            color: white;
        }
    }


`