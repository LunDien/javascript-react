import html from "../module/core.js"
import { connect } from "../module/store.js"

function Footer() {
    return html`
        <footer class="footer">
            <div class="grid wide">
                <div class="row">
                    <div class="col l-3 m-3 c-5">
                        <div class="footer-shop">
                            <a href="/" class="footer-shop__logo">
                                <img src="./assets/img/logo-shop.svg" alt="supercar-logo" class="footer-shop__logo-img">
                            </a>
                        </div>
                    </div>

                    <div class="col l-3 m-3 c-7">
                        <ul class="footer-list">
                            <li class="footer-item">
                                <h4 class="footer-item-heading">Contact</h4>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="fas fa-phone-alt footer-item-icon"></i>
                                    0905945303
                                </a>
                            </li>

                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="far fa-envelope footer-item-icon"></i>
                                    kuhaudn@gmail.com
                                </a>
                            </li>

                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="fas fa-map-marker-alt footer-item-icon"></i>
                                    Cu Chinh Lan St, Da Nang
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col l-3 m-3 c-6 ">
                        <ul class="footer-list">
                            <li class="footer-item">
                                <h4 class="footer-item-heading">Service</h4>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="fas fa-car footer-item-icon"></i>
                                    Take Care Your Cars
                                </a>
                            </li>

                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="far fa-handshake footer-item-icon"></i>
                                    Cooperation
                                </a>
                            </li>

                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="fas fa-ad footer-item-icon"></i>
                                    Advertisement
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-3 m-3 c-6">
                        <ul class="footer-list">
                            <li class="footer-item">
                                <h4 class="footer-item-heading">License</h4>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    Privacy Policy
                                </a>
                            </li>

                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    Privacy
                                </a>
                            </li>

                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    Term Of Use
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="grid">
                <span class="footer-copyright">© 2021 Copyright: v8supercas.com</span>
            </div>
        </footer>
    `
}

export default Footer