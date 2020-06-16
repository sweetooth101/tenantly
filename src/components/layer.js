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