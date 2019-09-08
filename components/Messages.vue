<template>
    <div>
        <section>
            <!-- {{messages[Math.floor(Math.random()*messages.length)]}} -->
            {{randomMessage()}}
        </section>  
    </div>
</template>

<script>
import {db} from '../plugins/firebase'
    export default {
        firestore() {
            return {
                messages: db.collection("messages")
            }
        },
        data() {
            return {
                messages: ''
            }
        },
        methods: {
            randomMessage() {
                var randomMessage = this.messages[Math.floor(Math.random()*this.messages.length)];
                return randomMessage
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>