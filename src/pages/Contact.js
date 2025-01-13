import React from 'react';

import Footer from './../components/Footer';

const Contact = () => {

    const username = "stevescott517"
    const hostname = 'gmail.com'

    const linkText = `${username}@@${hostname}`
    const mailTo = `mailto: ${username}@@${hostname}`

    return (
        <main class="content">
            <br />
            <p> For questions you may reach me at the following address:</p>
            <a href={mailTo}>{linkText}</a>
            <br />
            <br />

            <Footer />
        </main>
    )
}

export default Contact;
