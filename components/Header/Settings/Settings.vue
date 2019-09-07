<template>
    <div>
        <b-menu>
        <b-menu-list label="Settings">
            <!-- <b-menu-item icon="information-outline" label="Home"> -->
                <nuxt-link to="/" icon="information-outline">
                    <!-- <b-menu-item icon="information-outline" label="Home">
                    </b-menu-item> -->
                    Home
                </nuxt-link>
            <!-- </b-menu-item> -->
            <div>
                    <b-menu-item icon="settings" active expanded>
                <template slot="label" slot-scope="props">
                    Theme
                    <b-icon
                        class="is-pulled-right"
                        :icon="props.expanded ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </template>
                <ClockSettings />
                <BackgroundSettings />
                <UIColorsSettings />
                <!-- <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item> -->
            </b-menu-item>
            </div>
            
            <b-menu-item icon="account" label="Work Mode">
                <b-menu-item label="Schedule"></b-menu-item>
                <b-menu-item label="Analytics"></b-menu-item>
            </b-menu-item>
        </b-menu-list>
        <!-- <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
        </b-menu-list> -->
    </b-menu>
    </div>
</template>

<script>
import ClockSettings from '~/components/Header/Settings/Theme/ClockSettings'
import BackgroundSettings from '~/components/Header/Settings/Theme/BackgroundSettings'
import UIColorsSettings from '~/components/Header/Settings/Theme/UIColorsSettings'
    export default {
        layout: '',
        components: {
            ClockSettings,
            BackgroundSettings,
            UIColorsSettings
        }
    }
</script>

<style lang="scss" scoped>

</style>