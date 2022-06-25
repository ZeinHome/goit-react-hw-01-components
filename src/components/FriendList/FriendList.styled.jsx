import styled from 'styled-components';

export const ContainerFriend = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    background-color: white;
    margin-top: 40px;
    padding: 20px 10px;
`
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  border: 2px solid gray;
  padding: 10px 20px;
`

export const Status = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 20px;
`
export const FriendName = styled.p`
margin-left: 40px;
`