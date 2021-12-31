import styled from "styled-components";

export const Container = styled.div`

display: grid;
grid-template-columns: repeat(3,1fr);
gap: 2rem;
margin-top: -10rem;

/*
 display: flex;
    justify-content: space-around;
    align-items: center;
*/
div{
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color:var(--text-title);

&.hightlight-background{
    background-color: var(--green);
    color:#fff;
}
header{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
strong{
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
}

}


`