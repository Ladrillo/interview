import styled from 'styled-components';

export default styled.div`
    width:           100%;
    display:         flex;
    justify-content: space-around;
    align-items:     center;
    margin-bottom:   20px;


    .paginator-button {
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
    }
`;
