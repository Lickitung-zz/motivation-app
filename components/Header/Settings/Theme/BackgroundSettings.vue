<template>
    <b-menu-item icon="cellphone-link" label="Background">
        
        <br>
        <section>
            
        <b-field>
            <b-upload v-model="dropFiles"
                multiple
                drag-drop>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </b-upload>
        </b-field>
        <br>
        <div class="tags">
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
        </div>
    </section>
    <h1>OR</h1>
    <br>
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