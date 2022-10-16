import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { primaryColor, gray } from '../styles/colors';
import Operation from './Operation';
import { loadOperations } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const Dashbord = () => {
    const dispatch = useDispatch();
    const state = useSelector( state => state );
    const arreglo = [
        {
            type:"deposit",
            concept:"sueldo",
            amount:"1000",
            date:"2022-09-01"
        },
        {
            type:"withdraw",
            concept:"comida",
            amount:"500",
            date:"2022-09-19"
        },
        {
            type:"withdraw",
            concept:"nafta",
            amount:"300",
            date:"2022-09-29"
        },
        {
            type:"deposit",
            concept:"venta",
            amount:"90",
            date:"2022-09-10"
        }
    ];
    useEffect( () => {
        dispatch( loadOperations(1));
    }, []);
  return (
    <Container>
        <Card>
            <h3 style={{color:"white"}}>Saldo : {state.balance}</h3>
            { state && state?.operations.map( o => <Operation 
                id={o.id}
                type={o.type} 
                concept={o.concept}
                amount={o.amount} 
                date={o.dateOp}
                key={o.id}
            />)}
            
            <Operation addState={true} personId={"1"}/>
        </Card>
    </Container>
  )
}

export default Dashbord;


const Container = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    // flex-direction: column;  
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    // min-height: 50%;
    // width: 80%;
    background-color: ${primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3em;
    .inputClass{
        width: auto;
        color: white;
        font-weight: bold;
        margin: 0.5em 0.2em;
        padding: 0.2em 0.9em;
        background-color: rgba( 50, 50, 50, 0.8 );
        border-radius: 3em;
    }
`;