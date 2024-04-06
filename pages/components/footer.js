import Logo from "./logo"
import style from "../../styles/footer.module.css"
import Container from "./container"
import Social from "./ social"

export default (Footer) => {
  return(
      <footer className={style.wrapper}>
        <Container>
          <div className={style.flexContainer}>
          <Logo/>
          <Social/>
          </div>
        </Container>
      </footer>
  )  
}

