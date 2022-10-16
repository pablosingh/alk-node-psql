import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { primaryColor, gray } from '../styles/colors';
import { BACKEND_URL, loadOperations } from '../redux/actions';
import { useDispatch } from 'react-redux';


const Operation = props => {
    const sizeBtn = 15;
    const dispatch = useDispatch();
    const initValues = {
        type: 'deposit',
        concept: '',
        amount: 0,
        date: '',
        editState: true,
        addState: false
    };
    const [ data, setData ] = useState(initValues);   
    useEffect( ()=> {
        setData({
            ...initValues,
            ...props,
            addState: props.addState ? true : false
        });
    }, []);
    const submiting = e => {
        console.log(data);
        // setData(initValues);
    };
    const changing = e => {
        // console.log(e.target);
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const editing = async () => {
        // console.log(data);
        await fetch(`${BACKEND_URL}/editOperation` , {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        // .then( res => console.log(res.json()))
        .then( res => dispatch( loadOperations(1) ))
        .catch(err => console.log(err) );
    };
    const deleting = async () => {
        await fetch(`${BACKEND_URL}/deleteOperation` , {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then( res => dispatch( loadOperations(1) ))
        .catch(err => console.log(err) );
    };
    const adding = async () => {
        console.log(data);
        await fetch(`${BACKEND_URL}/createOperation` , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then( res => console.log(res.json()))
        .then( res => dispatch( loadOperations(1) ))
        .catch(err => console.log(err) );
    };
  return (
    <Container>
        <div className="panel">
            <select className='inputClass' onChange={ changing } 
                name="type" value={data?.type} 
                disabled={!data.addState && data.editState}>
                {/* <option disabled={true} selected={true}>Tipo</option>    */}
                <option value="deposit">Deposito</option>
                <option value="withdraw">Extraccion</option>
            </select>
            <input type="text" placeholder="Concepto"  
                name="concept" className='inputClass concept' 
                onChange={ changing }
                value={ data?.concept }
                disabled={!data.addState && data.editState}
                />
            <input type="text" placeholder="Importe" 
                name="amount" className='inputClass amount' 
                onChange={ changing }
                value={data?.amount}
                disabled={!data.addState && data?.editState}
                />
            <input type="date" placeholder="Fecha" 
                name="dateOp" className='inputClass' 
                onChange={ changing }
                value={data?.date}
                disabled={!data.addState && data.editState}
                />
            <Btn className={`${ data.addState ? `on`: `off` }`}
                onClick={ ()=> {
                    adding();
                    setData({
                        ...initValues,
                        ...props,
                        addState: props.addState ? true : false
                    });
                    }}>
                <AiOutlinePlusCircle size={sizeBtn}/>
            </Btn>
            <Btn 
                className={`${ !data.addState && !data.editState ? `on`: `off` }`}
                onClick={ ()=> {
                    setData({...data, editState: !data.editState});
                    editing();
                    }}>
                <AiOutlineCheckCircle size={sizeBtn}/>
            </Btn>
            <Btn className={`${ !data.addState && data.editState ? `on`: `off` }`}
                onClick={ ()=> setData({...data, editState: !data.editState})}>
                <FiEdit size={sizeBtn}/>
            </Btn>
            
            <Btn className={`${ !data.addState && data.editState ? `on`: `off` }`}
                onClick={ ()=> deleting()}>  
                <MdDeleteOutline size={sizeBtn}/>
            </Btn>
        </div>
    </Container>
  )
}

export default Operation;

const Container = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    .inputClass{
        color: white;
        font-weight: bold;
        margin: 0.5em 0.2em;
        padding: 0.2em 0.9em;
        background-color: rgba( 50, 50, 50, 0.8 );
        border-radius: 3em;
    }
    .concept{
        width: 7em;
    }
    .amount{
        width: 2em;
    }
    .on{
        display: inline-block;
    }
    .off{
        display: none;
    }
`;

const Btn = styled.button`
  background-color: ${gray};
  color: white;
  margin: 0.3em 0.3em;
  padding: 0.5em 1em;
  border-radius: 2em;
  transition: all .4s ease;
`;