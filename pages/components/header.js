import Logo from "./logo"
import Nav from "./nav"
import style from "../../styles/header.module.css"
import Container from "./container"

export default (Header) => {
  return(
    <>
      <header>
        <Container large>
          <div className={style.flexContainer}>
            <Logo boxOn/>
            <Nav/>
          </div>
        </Container>
      </header>
    </>
  )
}