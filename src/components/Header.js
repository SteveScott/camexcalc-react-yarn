import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand title" href="/">Camera Exposure Calculator</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav" id="nav-dropdown">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
);


export default Header;
