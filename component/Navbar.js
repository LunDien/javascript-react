import html from "../module/core.js"
import { connect } from "../module/store.js"

function Navbar() {
    return html`
        <nav class="navbar">
            <ul class="navbar-list">
                <li class="navbar-item navbar-item--separate">
                    Download V8-SuperCars with Mobile App
                    <div class="header__QRcode navbar-popup">
                        <img src="./assets/img/QRcode.png" alt="" class="header__QRcode--img">
                        <div class="header__app">
                            <img src="./assets/img/chplay.png" alt="" class="header__app-img">
                            <img src="./assets/img/apple-store.png" alt="" class="header__app-img">
                        </div>
                    </div>
                </li>
                <li class="navbar-item un-pointer-navbar">
                    Connect
                    <a href="https://www.facebook.com/profile.php?id=100006667956156" target="_blank" class="navbar-item--link">
                        <i class="fab fa-facebook-f navbar-app navbar-app-fb"></i>
                    </a>
                    <a href="https://www.instagram.com/lun.nguyen/" target="_blank" class="navbar-item--link">
                        <i class="fab fa-instagram navbar-app"></i>
                    </a>
                </li>
            </ul>
            <ul class="navbar-list">
                <li class="navbar-item navbar-item--notify">
                    <a href="" class="navbar-item--link">
                        <i class="navbar-icon far fa-bell"></i>
                        Notification
                    </a>
                    <div class="navbar__notify">
                        <header class="notify-header un-pointer">
                            <h3>Notification List</h3>
                        </header>
                        <ul class="notify-list">
                            <li class="notify-item">
                                <a href="#" class="notify-link">
                                    <img src="./assets/img/logo-lamborghini.png" alt="" class="notify-img">
                                    <div class="notify-info">
                                        <span class="notify-name">Lamborghini Aventador</span>
                                        <span class="notify-des">Super Car Top Speed 2021 in The Best of the
                                            world Car Show</span>
                                    </div>
                                </a>
                            </li>
                            <li class="notify-item">
                                <a href="#" class="notify-link">
                                    <img src="./assets/img/logo-lamborghini.png" alt="" class="notify-img">
                                    <div class="notify-info">
                                        <span class="notify-name">Lamborghini Aventador</span>
                                        <span class="notify-des">Super Car Top Speed 2021 in The Best of the
                                            world Car Show</span>
                                    </div>
                                </a>
                            </li>
                            <li class="notify-item">
                                <a href="#" class="notify-link">
                                    <img src="./assets/img/logo-lamborghini.png" alt="" class="notify-img">
                                    <div class="notify-info">
                                        <span class="notify-name">Lamborghini Aventador</span>
                                        <span class="notify-des">Super Car Top Speed 2021 in The Best of the
                                            world Car Show</span>
                                    </div>
                                </a>
                            </li>
                            <li class="notify-item">
                                <a href="#" class="notify-link">
                                    <img src="./assets/img/logo-lamborghini.png" alt="" class="notify-img">
                                    <div class="notify-info">
                                        <span class="notify-name">Lamborghini Aventador</span>
                                        <span class="notify-des">Super Car Top Speed 2021 in The Best of the
                                            world Car Show</span>
                                    </div>
                                </a>
                            </li>
                            <li class="notify-item-all">
                                <a href="" class="notify-link-all">
                                    View All
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="navbar-item">
                    <a href="" class="navbar-item--link">
                        <i class="far fa-question-circle navbar-icon navbar-icon-help"></i>
                        Help
                    </a>
                </li>
                <li class="navbar-item">
                    <div class="navbar-item--link navbar-item--bold navbar-item--separate" onclick="showModalForm(event)" id="register-form-btn">
                        Sign Up</div>
                </li>
                <li class="navbar-item">
                    <div class="navbar-item--link navbar-item--bold" onclick="showModalForm(event)" id="login-form-btn">Sign In</div>
                </li>
            </ul>
        </nav>
    `
}

export default Navbar