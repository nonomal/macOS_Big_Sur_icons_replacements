<template>
    <div
        id="header"
        :class="{
            'scrolled-shadow': distanceFromTop && scrolled,
            'scrolled-header': scrolled,
            'nav-header': true,
            'coral-bg':true
        }"
    >
        
        <OptionsMenu :optionsList="optionsList"/>
        <Dialog/>
        <SubmissionDialog/>
        <LoginDialog/>
        <AccountDialog v-if="accountDialog"/>

        <div class="header-wrapper">
            
            <div class="header-logo-name">
                <router-link to="/">
                    <h3 class="coral-Heading--M m-0 text-left">
                        macOSicons
                    </h3>
                </router-link>

                <p class="header-item coral-Body--S">
                    By
                    <a href="https://eliasruiz.com/"
                        rel="noopener"
                        target="_blank"
                        class="underline"
                    >
                        Elias
                    </a> 

                    <span class="mobile-hidden">
                    </span>
                </p>
            </div>
            
            <!-- Mobile -->
                <div
                    class="desktop-hidden coral--large"
                >
                    <div class="burger-btn" @click="toggleOverlay">
                        <coral-icon class="m-auto" id="mobile-menu-icon" :icon="icons.burgerMenu" size="S" alt="Larger">
                        </coral-icon>
                    </div>

                <transition name="overlay" mode="out-in">
                    <coral-overlay
                        v-if="isMobileMenu"
                        id="popover"
                        class="mobile-nav-wrapper"
                        target="#target_1"
                        interaction="on"
                        open=""
                    >
                        <div 
                            class="header-grid-btns mobile-nav-options"
                        >
                        
                            <!-- Account Profile -->
                            <div v-if="getUser.isAuth" class="profile-nav">
                                <img 
                                    id="profilePicNav-mobile" 
                                    @click="showEl({
                                        elId: 'profileNavPopover', 
                                        targetId: 'profilePicNav-mobile'
                                    })"
                                    class="profile-pic-nav m-l-4" 
                                    :src="getProfilePic" alt=""
                                >
                            </div>

                            <!-- Back to all icons -->
                            <div @click="toggleOverlay" v-if="this.$route.name != 'Home'">
                                <router-link to="/" class="_coral-Button _coral-Button--primary _coral-Button--quiet">
                                    Back to all Icons
                                </router-link>
                            </div>

                            <!-- Forum -->
                            <div @click="toggleOverlay" >
                                <a
                                    href="https://github.com/elrumo/macOS_Big_Sur_icons_replacements/discussions"
                                    rel="noopener" target="_blank"
                                    class="_coral-Button _coral-Button--primary _coral-Button--quiet"
                                >
                                    <span style="position: relative; left: -1px">
                                        Forum
                                    </span>
                                </a>
                            </div>
                            
                            <!-- blog -->
                            <!-- <div @click="toggleOverlay" v-if="this.$route.name != 'BlogHome'">
                                <router-link to="/blog" class="_coral-Button _coral-Button--primary _coral-Button--quiet">
                                    <span>
                                        Blog
                                    </span>
                                </router-link>
                            </div> -->
                            
                            <!-- Resources -->
                            <div class="resourcesLink" @click="toggleOverlay">
                                <coral-status variant="info" class="_coral-StatusLight--info _coral-StatusLight" color=""></coral-status>
                                <router-link to="/resources" class="_coral-Button _coral-Button--primary _coral-Button--quiet">
                                    <span>
                                        Resources
                                    </span>
                                </router-link>
                            </div>

                            <!-- License -->
                            <div class="resourcesLink" @click="toggleOverlay">
                                <coral-status variant="info" class="_coral-StatusLight--info _coral-StatusLight" color=""></coral-status>
                                <router-link to="/cicense" class="_coral-Button _coral-Button--primary _coral-Button--quiet">
                                    <span>
                                        License
                                    </span>
                                </router-link>
                            </div>
                            
                            <hr class="coral-Divider--S">
                            
                            <!-- Donate -->
                            <div class="">
                                <a
                                    rel="noopener"
                                    target="_blank"
                                    class="m-b-8"
                                    href="https://www.paypal.com/donate/?hosted_button_id=5PMNX4DPW83KN"
                                    @click="logDonation('header')"
                                >
                                    <button is="coral-button" variant="cta">
                                        <span>Donate</span>
                                    </button>
                                </a>
                            </div>

                                <!-- Submit icons -->
                            <div v-if="getUser.isAuth" class="profile-nav m-b-24">
                                <button is="coral-button" variant="quiet" @click="showEl('submissionDialog')">
                                    <span>Submit</span>
                                </button>
                            </div>
                            
                            <!-- Twitter -->
                            <div class="header-icon-wrapper">
                                <a href="https://twitter.com/elrumo" class="" target="_blank" rel="noopener">
                                    <img :src="icons.twitter" class="header-item header-icon" alt="Twitter logo">
                                </a>
                                <a href="https://discord.gg/f4mTRyyTkT" class="p-l-24" target="_blank" rel="noopener">
                                    <img :src="icons.discord" class="header-item header-icon" alt="Discord Logo">
                                </a>
                                <a href="https://github.com/elrumo/macOS_Big_Sur_icons_replacements" class="p-l-24" target="_blank" rel="noopener">
                                    <img :src="icons.github" class="header-item header-icon" alt="GitHub Logo">
                                </a>
                            </div>

                        </div>
                    </coral-overlay>
                    </transition>
                </div>
            
            <!-- Desktop -->
            <div class="mobile-hidden">
                <div class="header-grid-btns">
                    
                    <!-- Twitter + Discord -->
                    <div class="header-icon-wrapper">
                        <a href="https://twitter.com/elrumo" class="" target="_blank" rel="noopener">
                            <img style="height: 17px;" :src="icons.twitter" class="header-item header-icon" alt="Twitter logo">
                        </a>
                        <a href="https://discord.gg/f4mTRyyTkT" class="p-l-24" target="_blank" rel="noopener">
                            <img style="height: 17px;" :src="icons.discord" class="header-item header-icon" alt="Discord Logo">
                        </a>
                        <a href="https://github.com/elrumo/macOS_Big_Sur_icons_replacements" class="p-l-24" target="_blank" rel="noopener">
                            <img :src="icons.github" class="header-item header-icon" alt="GitHub Logo">
                        </a>
                    </div>
                    
                    <!-- Back to all icons -->
                    <div class="opacity-70" v-if="this.$route.name != 'Home'">
                        <router-link to="/">
                            <button is="coral-button" variant="quiet">
                                <span>All Icons</span>
                            </button>
                        </router-link>
                    </div>

                    <!-- Forum -->
                    <div>
                        <a
                            href="https://github.com/elrumo/macOS_Big_Sur_icons_replacements/discussions"
                            rel="noopener" target="_blank"
                        >
                            <button is="coral-button" variant="quiet">
                                <span>Forum</span>
                            </button>
                        </a>
                    </div>
                    
                    <!-- blog -->
                    <!-- <div>
                        <router-link to="/blog">
                            <button is="coral-button" variant="quiet">
                                <span>Blog</span>
                            </button>
                        </router-link>
                    </div> -->

                    <!-- Resources -->
                    <div class="resourcesLink">
                        <!-- <coral-status variant="info"></coral-status> -->
                        <router-link to="/resources">
                            <button is="coral-button" variant="quiet">
                                <span>Resources</span>
                            </button>
                        </router-link>
                    </div>

                    <!-- License -->
                    <!-- <div class="resourcesLink"> -->
                        <!-- <coral-status variant="info"></coral-status> -->
                        <!-- <router-link to="/license">
                            <button is="coral-button" variant="quiet">
                                <span>License</span>
                            </button>
                        </router-link>
                    </div> -->

                    <!-- Learn -->
                    <!-- <div class="resourcesLink">
                        <coral-status variant="info"></coral-status>
                        <router-link to="/learn">
                            <button is="coral-button" variant="quiet">
                                <span>
                                    Learn
                                </span>
                            </button>
                        </router-link>
                    </div> -->
                    
                    <!-- Buy me a coffee -->
                    <div class="hide-on-shrink">
                        <a
                            rel="noopener"
                            class=""
                            target="_blank"
                            href="https://www.paypal.com/donate/?hosted_button_id=5PMNX4DPW83KN"
                            @click="logDonation('header')"
                        >
                            <button
                                is="coral-button"
                                variant="quiet"
                            >
                                <span>Donate</span>
                            </button>
                        </a>
                    </div>
                    
                    <!-- Account Profile -->
                    <div v-if="getUser.isAuth" class="profile-nav">
                        <button is="coral-button" variant="quiet" @click="showEl('submissionDialog')">
                            <span>Submit</span>
                        </button>

                        <img 
                            id="profilePicNav-desktop" 
                            @click="showEl({
                                elId: 'profileNavPopover',
                                targetId: 'profilePicNav-desktop'
                            })" 
                            class="profile-pic-nav m-l-4" 
                            :src="getProfilePic" alt=""
                            >
                    </div>

                    <!-- Submit icons -->
                    <div v-if="!getUser.isAuth" class="p-l-8">
                        <button is="coral-button" variant="cta" @click="showDialog('loginDialog')">
                            <span>Submit icons</span>
                        </button>
                    </div>
                    
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import Dialog from './Dialog.vue'
import SubmissionDialog from './SubmissionDialog.vue'
import LoginDialog from './LoginDialog.vue'
import AccountDialog from './AccountDialog.vue'
import OptionsMenu from './OptionsMenu.vue'

import { mapGetters, mapActions } from 'vuex'
import Parse from 'parse/dist/parse.min.js';

import twitter from "../assets/icons/twitter.svg"
import discord from "../assets/icons/Discord.svg"
import github from "../assets/icons/github.svg"
import burgerMenu from "../assets/icons/burgerMenu.svg"
import settings from "../assets/icons/Settings.svg"
import profilePic from "../assets/Resources/accounts/profilePic.png"
import Settings from "../assets/icons/Settings.svg"
import User from "../assets/icons/User.svg"
import LogOut from "../assets/icons/LogOut.svg"

export default {
    name:"Header",

    components:{
        Dialog,
        LoginDialog,
        OptionsMenu,
        AccountDialog,
        SubmissionDialog
    },
    
    data(){
        return{
            darkMode: false,
            
            isMobileMenu: false,
            
            icons:{
                twitter: twitter,
                discord: discord,
                github: github ,
                burgerMenu: burgerMenu ,
                settings: settings ,

                profilePic: profilePic ,
            },
            scrolled: false,
            
            accountDialog: true,
            loginDialog: false,
            
            currentUser: Parse.User.current(),

            optionsList: [
                {
                    name: "Account Settings",
                    img: Settings,
                    onClick: {
                        method: this.showDialog,
                        data: "accountDialog"
                    }
                },
                {
                    name: "Profile",
                    img: User,
                    onClick:{
                        method: this.changePath,
                        data: "/u/"
                    }
                },
                {
                    name: "Logout",
                    img: LogOut,
                    onClick: {
                        method: this.logOut
                    }
                },
                // {
                //     name: "What's new",
                //     img: LogOut,
                //     onClick: {
                //         method: this.logOut
                //     }
                // }
            ]
        }
    },

    props:{
        submitIconDialog: String,
        distanceFromTop: Boolean,
    },

    methods:{
        ...mapActions([
            'showEl',
            'logOut',
            'changePath',
            'handleParseError'
        ]),

        showDialog(dialog){
            this[dialog] = true;
            setTimeout(() => {
                this.showEl(dialog);
            }, 100);
        },

        toggleOverlay(){
            let parent = this
            let popover = document.getElementById("popover")
            parent.isMobileMenu
            
            console.log(parent.isMobileMenu);
            parent.isMobileMenu = !parent.isMobileMenu
        },

        logDonation(location){
            window.plausible("logDonation", {props: {
                location: location, 
            }})
        },

        toggleOverflow(){
            document.documentElement.style.overflow = '';
        },

        handleScroll() {
            this.scrolled = window.scrollY > 20;
        },

        toggleDarkMode(){
            let parent = this
            let body = document.getElementById("body")
            let isDarkModeOn = parent.darkMode
            
            if (!isDarkModeOn) {
                body.classList.remove('coral--light')
                body.classList.add('coral--dark')
                parent.darkMode = true
            } else{
                body.classList.remove('coral--dark')
                body.classList.add('coral--light')
                parent.darkMode = false
            }
        },

        onDialogOpen(){
            // Set all the dialog compoents as targets
            const targetNode = document.getElementsByTagName("coral-dialog");
            
            // Function to make body overflow when dialog is open, so it doesn't scroll when interacting with the dialog
            function callback(mutationList, observer) {
                mutationList.forEach( (mutation) => {
                    if(mutation.attributeName == "open" && mutation.target.open){
                    document.documentElement.style.overflow = 'hidden';
                    } else if(mutation.attributeName == "open" && !mutation.target.open){
                    document.documentElement.style.overflow = '';
                }
                });
            }
            const observerOptions = { childList: true, attributes: true}

            // Add an observer for each dialog target elemnt
            for(let node in targetNode) {
                if(typeof targetNode[node] != 'object');{
                    return
                }
                const observer = new MutationObserver(callback);
                observer.observe(targetNode[node], observerOptions);
            }

        },

    },

    mounted: function(){
        // Scroll listener to add/remove nav menu shadow
        window.addEventListener('scroll', this.handleScroll);

        // Obvserve everytime the dialog is opened
        this.onDialogOpen()
        
        if (this.getUser.isAuth) {
            this.optionsList[1].onClick.data = "/u/" + this.getUser.userData.username
        }

        // Sets light/dark mode based on browser
        let useDark = window.matchMedia('(prefers-color-scheme: dark)');
        // Sets light/dark mode based on browser on first load
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            this.toggleDarkMode()
        }
        useDark.addListener((evt) => this.toggleDarkMode());
    },

    computed: {
        ...mapGetters(['getUser']),

        getProfilePic(){
            try {
                return this.getUser.userData.profilePhoto ? this.getUser.userData.profilePhoto.url : this.icons.profilePic
            } catch (error) {
                return this.icons.profilePic
            }
        }
    },

    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style>

</style>