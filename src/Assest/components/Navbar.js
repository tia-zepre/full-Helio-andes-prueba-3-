import React, { useState } from 'react';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'; // Iconos de FontAwesome
import { NavDropdown } from 'react-bootstrap'; // Importar NavDropdown
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'; // Ruta de tu logo
import userImage from '../Images/persona1.jpg'; // Ruta de la imagen del usuario

function NavbarPrincipal() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false); // Controla el formulario de login
    const [user, setUser] = useState({ name: 'Juan Pérez', photo: userImage });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Función para manejar el inicio de sesión simulado
    const handleLoginLogout = () => {
        if (isAuthenticated) {
            setIsAuthenticated(false); // Cerrar sesión
            setUser(null); // Limpiar datos del usuario
        } else {
            setIsAuthenticated(true); // Iniciar sesión
            setUser({ name: 'Juan Pérez', photo: userImage }); // Datos del usuario
        }
    };

    // Función para mostrar el formulario de login
    const handleShowLoginForm = () => {
        setShowLoginForm(true);
    };

    // Función para ocultar el formulario de login
    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };

    // Manejar el cambio en el formulario de login
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    // Validar el login con usuario "admin" y contraseña "1234"
    const handleSubmitLogin = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === '1234') {
            setIsAuthenticated(true); // Iniciar sesión
            setUser({ name: 'Juan Pérez', photo: userImage }); // Datos del usuario
            setErrorMessage(''); // Limpiar cualquier mensaje de error
            setShowLoginForm(false); // Cerrar el formulario
        } else {
            setErrorMessage('Credenciales incorrectas. Intente de nuevo.'); // Mostrar error
        }
    };

    return (
        <>
            <Navbar bg="light" data-bs-theme="light" expand="lg" className="shadow-sm">
                <Container>
                    <img src={logo} alt="HelioAndes Logo" style={{ width: '10%', maxWidth: '100px', minWidth: '40px' }} className="d-inline-block align-top me-2 boldText" />
                    <Navbar.Brand href="/">HelioAndes</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Nav className="justify-content-end">
                                <Nav.Link href="/">Inicio</Nav.Link>
                                <Nav.Link href='/servicios'>Servicios</Nav.Link>
                                <Nav.Link href="/soluciones">Soluciones</Nav.Link>
                                <Nav.Link href="/demos">Demos</Nav.Link>
                                <Nav.Link href="/planes">Planes</Nav.Link>
                                <Nav.Link href="/testimonios">Testimonios</Nav.Link>
                                <Nav.Link href="/faq">FAQ</Nav.Link>
                                <Nav.Link href="/contacto">Contacto</Nav.Link>

                                {/* Mostrar login o perfil dependiendo del estado de autenticación */}
                                {isAuthenticated ? (
                                    <NavDropdown title={
                                        <>
                                            <img src={user.photo} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} /> 
                                            {user.name}
                                        </>
                                    } id="collapsible-nav-dropdown">
                                        {/* Dropdown de opciones para el usuario autenticado */}
                                        <NavDropdown.Item href="/admin">Dashboard</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleLoginLogout}>
                                            <FaSignOutAlt style={{ fontSize: '1.2rem' }} /> Cerrar sesión
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <NavDropdown title="Iniciar sesión" id="collapsible-nav-dropdown">
                                        {/* Formulario de inicio de sesión */}
                                        <NavDropdown.Divider />
                                        <div className="form-login p-3">
                                            <h5>Iniciar sesión</h5>
                                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Mostrar error */}
                                            <form onSubmit={handleSubmitLogin}>
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Usuario</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="username"
                                                        placeholder="Usuario"
                                                        value={username}
                                                        onChange={handleUsernameChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        placeholder="Contraseña"
                                                        value={password}
                                                        onChange={handlePasswordChange}
                                                        required
                                                    />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                                            </form>
                                        </div>
                                    </NavDropdown>
                                )}

                                {/* Menú de registro con opción para desplegar el menú solo si no está autenticado */}
                                {!isAuthenticated && (
                                    <NavDropdown title="Registrarse" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="#">Próximamente</NavDropdown.Item>
                                    </NavDropdown>
                                )}
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarPrincipal;
