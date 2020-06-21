import styled from 'styled-components';

export const MenuButton = styled.button`
    padding:8px 20px;
    font-size:20px;
    background-color:${props => props.primary ? 'white' : '#fc766a'};
    border: 1px solid #fc766a;
    color:${props => props.primary ? 'black' : 'white'};
    font-weight:700;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
`

export const StartButton = styled.button`
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.7);
    padding: 9px 20px;
    margin-top: 20px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`