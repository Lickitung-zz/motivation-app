<template>
    <div>
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
            <!-- <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a> -->

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            <nuxt-link class="navbar-item" to="/">
                Home
            </nuxt-link>

            <a class="navbar-item">
                Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                More
                </a>

                <div class="navbar-dropdown">
                <b-button type="is-text" @click="isCardModalActive = true">
                    About
                </b-button>
                <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
                    <div class="card">
                        <!-- <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="/static/img/placeholder-1280x960.png" alt="Image">
                            </figure>
                        </div> -->
                        <div class="card-content">
                            <div class="media">
                                <!-- <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="/static/img/placeholder-1280x960.png" alt="Image">
                                    </figure>
                                </div> -->
                                <div class="media-content">
                                    This Chrome extension was built using Nuxt.JS and was made to make work a bit more exciting.
                                <br>
                                <small>v1.0</small>
                                    <p class="subtitle is-6">
                                        
                                    </p>
                                </div>
                            </div>

                            <div class="content">
                                <p class="title is-4">Built by 
                                        <a href="https://github.com/SIeep">
                                            <b-button size="is-medium" icon-left="github-circle">
                                                Brandon Evans
                                            </b-button>
                                        </a>
                                    </p>
                            </div>
                        </div>
                    </div>
                </b-modal>
                <a class="navbar-item">
                    Chrome Extension
                </a>
                <hr class="navbar-divider">
                <nuxt-link class="navbar-item" to="/settings">
                    Settings
                </nuxt-link>
                </div>
            </div>
            
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                
                <div class="buttons">
                <a class="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                    Log in
                </a>
                </div>
            </div>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCardModalActive: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>