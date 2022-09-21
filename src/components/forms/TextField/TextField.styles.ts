import styled from "styled-components";
export interface inputProps {
  red?:any
}

export const BasicFormInput = styled.input`
&{
// property2: ${(props:any) => (props.name === "" ? "value2" : "value3")};
border-radius: 4px;
border: 1px solid #ccc;
margin-top:5px;
margin-bottom: 5px;
width: 100%;
font-size: 14px;
text-align: left;
height: 30px;
outline: none;}

&:focus{
border: 2px solid #007bff;
}
`;

//to apply pseudo classes to styled components we use `{}&{}`

export interface Props {
    bold?:boolean,
    children?:any,
  }

// pass props to this styeled component as weight props
export const BasicFormInputLabel= styled.label`
text-align: left;
    display: block;
    margin-bottom: 10px;
    margin-top: 12px;
    color: black;
    font-size: 15px;
    font-weight: ${(props:Props) => (props.bold? "bold" : "null")};

`;
