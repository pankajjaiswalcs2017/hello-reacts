import Box from '@material-ui/core/Box';
import React from 'react';
import Container from '@material-ui/core/Container'
import HeaderCss from '../header/header.css'
import Search from '../search/search.js';
import SearchLocation from '../search-location/search-location';
import Grid from '@material-ui/core/Grid';


class Header extends React.Component {
    render() {
        return (
            <Box component="span" m={1}>
                <Container className="HeaderCss" maxWidth="ex lg sm">
                    <div className="row">
                        <div xs={3}>
                            <h1>Bookish</h1>
                            <pre>Be Confident-Be yourself</pre>

                        </div>
                        <div className="Header-Links" xs={9}>
                        <a href="login" >Login In</a>&nbsp;&nbsp;
                        <a href="/" >Sign Up</a>
                        </div>
                    </div>


                </Container>
            </Box>
        );
    }
}

export default Header;