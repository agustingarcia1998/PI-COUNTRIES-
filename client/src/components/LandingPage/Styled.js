import styled from "styled-components";

export const Div = styled.div`
background-image: url('https://99px.ru/sstorage/53/2013/10/tmb_85009_9493.jpg');
background-size: cover;
height: 100vh;

h1{
    color: rgb(37, 37, 37);
    text-shadow: 5px 2px 5px white;
    font-size: 48px;
    margin: 0;
    padding-top: 10px;
    font-family: 'Poppins', sans-serif;
}

.divButton{
    display: flex;
    justify-content: center;
    margin-top: 200px;
}

.buttonLanding{
    width: 200px;
    height: 60px;
    font-size: 170%;
    border-radius: 20px;
    color: #FFF;
    background: linear-gradient(orange, black);
    box-shadow: 2px 2px 15px 3px white;
}

.buttonLanding:hover{
    color: black;
    background: linear-gradient(black, orange);
    transition: 0.5s;
    cursor: pointer;
}
`
