import styled from "styled-components"


const Container = styled.div`
 height:35px;
 background-color:blue;
 color:white;
 width:100%;
 display:flex;
 align-item:center;
 justify-content:center;
 font-size:16px;
 font-weight:500;

 @media(max-width: 380px) {
        width:100vw;
        font-size:15px;
    }
`
const Announcement = () => {
    return (
        <>
            <Container>
                 Free Shoping on Order above Rs.1000
            </Container>
        </>
    )
}

export default Announcement