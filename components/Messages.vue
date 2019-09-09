<template>
    <div>
        <section>
            <!-- {{messages[Math.floor(Math.random()*messages.length)]}} -->
            <!-- {{messages}} -->
        </section>  
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        methods: {
            randomMessage() {
                var randomMessage = this.messages[Math.floor(Math.random()*this.messages.length)];
                return randomMessage
            }
        },
        // computed: mapState('messages', ['messages'])
        
        
    }
</script>

<style lang="scss" scoped>

</style>