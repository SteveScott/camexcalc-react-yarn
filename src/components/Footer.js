import React from 'react';


const Footer = () => (
    <footer>
        <div class="copyright">
            <p>© {new Date().getFullYear()} - Steve Scott</p>
        </div>
        <div style={{float:"right"}}>
            <a style={{color: "white"}} href="/Privacy">Privacy Policy</a>
        </div>
    </footer>
);

export default Footer;
