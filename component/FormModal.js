import html from "../module/core.js"
import { connect } from "../module/store.js"

function FormModal() {
    return html `
        <div class="modal modal--register">
            <div class="modal__overlay modal-close" onclick="hideModalForm(event)"></div>

            <div class="modal__body">
                <div class="modal__header">
                    <h3 class="modal__heading">Sign Up</h3>
                    <p class="modal__header-link" onclick="showModalForm(event)" id="login-form-btn">Sign In</p>
                </div>

                <div class="modal__container">
                    <div class="modal__form">
                        <div class="modal__form-input">
                            <input type="email" class="modal__form-control" placeholder="Email Address">

                        </div>
                        <div class="modal__form-input">
                            <input type="password" class="modal__form-control" placeholder="Password">

                        </div>
                        <div class="modal__form-input">
                            <input type="password" class="modal__form-control" placeholder="Confirm password">
                        </div>
                        <div class="modal__form-text">
                            By creating an account, you agree to V8-SuperCars
                            <a href="" class="modal__form-text--link">Terms of Service</a> &
                            <a href="" class="modal__form-text--link">Privacy Policy</a>
                        </div>
                        <div class="modal__form-btn">
                            <button class="btn modal__form-btn-back modal-close">BACK</button>
                            <button class="btn primary-btn">SIGN UP</button>
                        </div>
                    </div>
                </div>

                <div class="modal__footer">
                    <a href="" class="btn btn-size-s modal__social modal__socical--facebook">
                        <i class="fab fa-facebook-square modal__socical-icon"></i>
                        <span class="modal__social-label">Login with Facebook</span>
                    </a>
                    <a href="" class="btn btn-size-s modal__social modal__socical--google">
                        <i class="fab fa-google modal__socical-icon"></i>
                        <span class="modal__social-label">Login with Google</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="modal modal--login">
            <div class="modal__overlay modal-close" onclick="hideModalForm(event)"></div>
            <div class="modal__body">
                <div class="modal__header">
                    <h3 class="modal__heading">Sign In</h3>
                    <p class="modal__header-link" onclick="showModalForm(event)" id="register-form-btn">Sign Up</p>
                </div>

                <div class="modal__container">
                    <div class="modal__form">
                        <div class="modal__form-input">
                            <input type="email" class="modal__form-control" placeholder="Email Address">

                        </div>
                        <div class="modal__form-input">
                            <input type="password" class="modal__form-control" placeholder="Password">

                        </div>

                        <div class="modal__form-notify">
                            <a href="" class="modal__form-notify-link modal__form-forgot-password">Forgot Password</a>
                            <a href="" class="modal__form-notify-link modal__form-help">Need help?</a>
                        </div>
                        <div class="modal__form-btn">
                            <button class="btn modal__form-btn-back modal-close">BACK</button>
                            <button class="btn primary-btn">SIGN IN</button>
                        </div>
                    </div>
                </div>

                <div class="modal__footer">
                    <a href="" class="btn btn-size-s modal__social modal__socical--message">
                        <i class="fas fa-comment-dots modal__socical-icon"></i>
                        <span class="modal__social-label">SMS</span>
                    </a>
                    <a href="" class="btn btn-size-s modal__social modal__socical--facebook">
                        <i class="fab fa-facebook-square modal__socical-icon"></i>
                        <span class="modal__social-label">Facebook</span>
                    </a>
                    <a href="" class="btn btn-size-s modal__social modal__socical--google">
                        <i class="fab fa-google modal__socical-icon"></i>
                        <span class="modal__social-label">Google</span>
                    </a>
                </div>
            </div>
        </div>
    `
}

export default FormModal