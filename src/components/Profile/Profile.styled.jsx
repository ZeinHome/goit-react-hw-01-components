import styled from 'styled-components';

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    img{
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        background-color: gray;
        padding: 20px;
    }
`
export const DescriptionName = styled.p`
margin-top: 20px;
color: black;
font-size: 24px;
`
export const DescriptionTag = styled.p`
margin-top: 5px;
color: gray;
font-size: 16px;
`
export const Stats = styled.ul`
    display: flex;
`
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(168, 170, 227, 0.6);
    border: 1px solid black;
    padding: 40px;
`
export const StatsLabel = styled.span`
   color: gray;
`
export const StatsQuantity = styled.span`
   color: black;
`