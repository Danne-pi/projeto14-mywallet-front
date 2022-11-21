
import { useContext, useState } from "react"
import styled from "styled-components"
import { apiURL, AuthContext, Loading} from "./Globlal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function EntryForm(props){
    const navigate = useNavigate()
    const [desc, setDesc] = useState("")
    const [value, setValue] = useState("")
    const [load, setLoad] = useState(false)
    const [user,] = useContext(AuthContext)

    function submit(e){
        e.preventDefault()
        setLoad(true)
        const URL = apiURL+"posts"
        const config = {
            headers: {'Authorization': 'Bearer ' + user.token}
        }
        const body = {
            type: props.type,
            desc,
            value: Number(value),
        }
        const promise = axios.post(URL, body, config)
        
        promise.then((a)=>{
            setLoad(false)
            navigate("/")
        })
        promise.catch((a)=>{
            const msg = a.response;
            alert(msg)
            setLoad(false)
            console.log(user.token)
        })
    }
    
    return(
        <FormStyle onSubmit={submit}>
            <input
                type="text"
                placeholder="Descrição"
                value={desc}
                onChange={e=> setDesc(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <input
                type="number"
                placeholder="Valor"
                value={value}
                onChange={e=> setValue(e.target.value)}
                required
                disabled={load === true ? "disabled" : ""}
            />
            <button 
                type="submit"
                disabled={load === true ? "disabled" : ""}
            >{load === false ? "Salvar" : <Loading/>}</button>
        </FormStyle>
    )
}

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 90vw;

    h1{
        font-family: 'Saira Stencil One';
        font-size: 32px;
        color: #FFFFFF;
        font-weight: normal;
        text-align: center;
        margin-bottom: 32px;
    }    
    input{
            border-radius: 8px;
            padding: 16px;
            border: none;
            margin-bottom: 7px;
            font-weight: 700;
        }
        
        div{
            display: flex;
            gap: 7px;
            input{
                width: 100%;
            }
        }
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            padding: 14px;
            border: none;
            margin-top: 14px;
            color: white;
            background-color: #A328D6;
            font-weight: 700;
            font-size: 18px;
        }
        .register{
            background-color: transparent;
            font-size: 16px;
            font-weight: 700;
        }
`