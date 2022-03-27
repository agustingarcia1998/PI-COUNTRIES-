import styled from "styled-components";

export const Div = styled.div`
background-image: url('https://media.istockphoto.com/vectors/dark-wall-black-bricks-grunge-stonewall-vector-background-vector-id851892736?b=1&k=20&m=851892736&s=170667a&w=0&h=lZjWZ2esvo3jWOtvHzE1tn0D62v-vwp36x-rEw6gHw8=');
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;


h1{
    color: rgb(73, 73, 73);
    text-shadow: 5px 2px 5px white;
    font-size: 48px;
    margin: 0;
    padding-top: 10px;
    font-family: 'Poppins', sans-serif;
}

.allcards{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    padding: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        padding: 4rem;
    }
}

.link{
    text-decoration: none;
}

.contbuttons{
    display: flex;
    justify-content: center;
    align-items: center;

  
}

.buttonadd{
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

.buttonAddAct{
    margin-right: 15px;

}

.allcount{
    background-color: rgb(66, 65, 65);
    color: white;
    box-shadow: 2px 2px 8px 2px white;
    border-radius: 30px;
    height: 30px;
    margin-bottom: 10px;
    font-size: 15px;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
    
}

.contfilters{
    background-color: rgb(66, 65, 65);
    padding: 10px;
    display: flex;
    justify-content: center;
}

.selectfilter{
    height: 25px;
    border-radius: 10px;
    margin-right: 20px;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
}

.notfound{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom:210px;
    font-family: 'Josefin Sans', sans-serif;
}

.buttonpag{
    margin-top: 10px;
    background-color: rgb(66, 65, 65);
    color: white;
    box-shadow: 2px 2px 8px 2px white;
    border-radius: 30px;
    height: 30px;
    font-size: 15px;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
}

.divpag{
    display: flex;
    justify-content: center;
    justify-content: space-around;

}



`