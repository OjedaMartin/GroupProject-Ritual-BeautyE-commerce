import styled from  "styled-components";


export const SBdiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

border-radius: 0.5rem;
width: 50%;
height: 50%
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
padding-left: 15px;
background-color: ${({bg}) => bg || '#fff'};
color: ${({color}) => color || '#333'};

`
export const SBbutton = styled.button`
border-radius: 0.5rem;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px;
font-weight: 700;
padding: 15px 60px;
background-color: ${({bg}) => bg || '#3FA9FA'};
color: ${({color}) => color || '#fff'};

&:hover {
    opacity: 0.9;
}
`
export const SBinput = styled.input`
    
    border-color: #fff
    border-style: dotted;
    padding: 0;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
`
export const SBimg = styled.img`

`
