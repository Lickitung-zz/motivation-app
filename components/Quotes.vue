<template>
    <div>
        <section>
            {{quotes}}
        </section>  
    </div>
</template>

<script>
    export default {
        data() {
            quotes: [
                {id: 1, text: 'Well, we\'re all just dying anyways.'},
                {id: 2, text: 'It\'s ok to be sad.'}
            ]
        }
    }
</script>

<style lang="scss" scoped>

</style>