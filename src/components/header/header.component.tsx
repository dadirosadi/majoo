import { Container, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { withRouter } from "react-router-dom";

const Header = (props: any) => {
    return <Container>
        <Navbar
            color="dark"
            expand="md"
            light
        >
            <NavbarBrand onClick={() => { props.history.push("/") }}>
                <h3 className="text-white">Majoo</h3>
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() { }} />
        </Navbar>
    </Container>
}

export default withRouter(Header);