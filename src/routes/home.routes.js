import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import logout from "../assets/logout.svg"
import add from "../assets/add.svg"
import remove from "../assets/remove.svg"
import { apiURL, AuthContext } from "../components/Globlal"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function HomePage(){
    const navigate = useNavigate()
    const [user, setUser] = useContext(AuthContext)
    const [list, setList] = useState(false)

    useEffect(()=>{
        const URL = apiURL+"posts"
        const config = {
            headers: {'Authorization': 'Bearer ' + user.token}
        }

        const promise = axios.get(URL, config)
        
        promise.then((a)=>{
            setList(a.data)
        })
        promise.catch((a)=>{
            const msg = a.response;
            alert(msg)
            console.log(user.token)
        })
    },[])

    function ReadList(){
        return list.map((item) => (
            <span>
                <h3>{item.desc}</h3>
                <h3 className={item.type}>{"R$"+item.value.toFixed(2)}</h3>
            </span>
        ))
    }

    return (
        <HomeStyle 
        state={1===2? "start" : "center"}
        >
            <div className="header">
                <h2>Olá, {user.name}</h2>
                <img src={logout} alt=""
                    onClick={()=> setUser(false)}
                />
            </div>
            <div className="history">
                {list === false ? "Não há registros de entrada ou saída" : <ReadList/>}
            </div>
            <div className="buttons">
                <button
                onClick={()=> navigate("/entry/add")}
                >
                    <img src={add} alt=""/>
                    <h2>Nova<br/>entrada</h2>
                </button>
                <button
                onClick={()=> navigate("/entry/remove")}
                >
                    <img src={remove} alt=""/>
                    <h2>Nova<br/>saída</h2>
                </button>
            </div>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-block: 24px;
        margin-top: 8px;

        h2{
            color: white;
        }
    }
    .history{
        background-color: white;
        width: 90vw;
        height: 60%;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: ${props => props.state};
        align-items: center;

        span{
            width: 80%;
            justify-content: space-between;
            display: flex;
            gap: 8px;

            h3{
                color: gray;
            }
            .add{
                color: green;
            }
            .remove{
                color: red;
            }
        }
    }
    .buttons{
        height: 25%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        button{
            border-radius: 12px;
            border: none;
            background-color: #A328D6;
            width: 47%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding: 18px;
            color: white;
            text-align: start;

            img{
                height: 35px;
                width: 35px;
            }
        }
    }
`