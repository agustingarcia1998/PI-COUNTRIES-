import styled from "styled-components";

export const Div = styled.div`
background-image: url('https://media.istockphoto.com/vectors/dark-wall-black-bricks-grunge-stonewall-vector-background-vector-id851892736?b=1&k=20&m=851892736&s=170667a&w=0&h=lZjWZ2esvo3jWOtvHzE1tn0D62v-vwp36x-rEw6gHw8=');
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
color: white;
font-family: 'Josefin Sans', sans-serif;
font-size: 20px;
text-shadow: 3px 3px 3px black;
height: 120vh;

.btn-confirm{
    background-color: rgb(66, 65, 65);
    color: white;
    box-shadow: 2px 2px 8px 2px white;
    border-radius: 30px;
    height: 30px;
    font-size: 15px;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
}

.return{
    background-color: rgb(66, 65, 65);
    color: white;
    box-shadow: 2px 2px 8px 2px white;
    border-radius: 30px;
    height: 30px;
    font-size: 15px;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
}

.divreturn{
    display: flex;
    justify-content: center;
    padding-top: 30px;
}

h1{
    color: white;
    text-shadow: 5px 2px 5px grey;
    font-size: 48px;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 25px;
    font-family: 'Poppins', sans-serif;
}

.inputform{
    border-style: none;
    border-radius: 10px;
    height: 25px;
    box-shadow: 2px 2px 5px 1px white;
}


.formcompl{
    display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        margin: 2rem;
        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            margin: 2rem;
}

.error{
    color: red;
}

.buttonconfirm{
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

.delete{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
            margin: 2rem;
    }
}


`