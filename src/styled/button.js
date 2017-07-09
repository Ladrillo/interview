import styled from 'styled-components';

export default styled.div`
    border-radius:    4px;
    width:            80px;
    height:           30px;
    background-color: #222;
    display:          flex;
    justify-content:  center;
    align-items:      center;
    cursor:           pointer;
    transition: 0.2s 0.02s ease-in-out;

    &:hover {
        background-color: #494949;
        transition: 0.2s 0.02s ease-in-out;
    }
`;
