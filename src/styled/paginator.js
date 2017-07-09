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

        &:hover {
            background-color: #494949;
        }
    }
`;
