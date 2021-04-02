import styled from 'styled-components'

export const Navbar = styled.div`
    display: flex;
    height: 30px;
    background: rgba(0, 0, 0, .4);
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    -webkit-app-region: drag;

    span {
      font-size: .7rem;
      color: rgba(255, 255, 255, .3);
      font-weight: bold;
    }
`

export const NavbarButtonBox = styled.div`
  -webkit-app-region: no-drag;

  button {
    padding: 0;
    background: rgba(0, 0, 0, .8);
    border: 0;
    color: #eee;
    font-size: .6rem;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin-left: 3px;
  }
`
