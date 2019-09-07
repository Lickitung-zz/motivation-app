<template>
    <b-menu-item icon="cellphone-link" label="UI Colors">
    <b-dropdown hoverable aria-role="list">
            <button class="button is-info" slot="trigger">
                <span>Select Color</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item aria-role="listitem">
                <b-button type="is-success"></b-button>
                <b-button type="is-danger"></b-button>
                <b-button type="is-warning"></b-button>
                <b-button type="is-info"></b-button>
                <b-button type="is-link"></b-button>
                <b-button type="is-light"></b-button>
                <b-button type="is-dark"></b-button>
            </b-dropdown-item>
        </b-dropdown>
    </b-menu-item>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>