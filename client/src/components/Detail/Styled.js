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
height: 100vh;

.detailback{
    padding-top: 100px;
    padding-right: 150px;
    padding-left: 150px;

}

.contdetail{
    display: flex;
    justify-content: space-around;
    
}

.image{
    border-radius: 200px;
    width: 150px;
    height: 130px;
}




.buttonBack{
    background-color: rgb(66, 65, 65);
    color: white;
    box-shadow: 2px 2px 8px 2px white;
    border-radius: 30px;
    height: 30px;
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 15px;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
}
`