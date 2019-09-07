<template>
    <div>
        <section>
            {{randomQuote()}}
        </section>  
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quotes: [
                    {id: 1, text: 'Well, we\'re all just dying anyways.'},
                    {id: 2, text: 'It\'s ok to be sad.'},
                    {id: 3, text: 'Depressed? Me too.'},
                    {id: 4, text: 'Sad boi gang'},
                    {id: 5, text: 'You look like a wet fart.'},
                    {id: 6, text: 'Kill me.'},
                    {id: 7, text: 'You suck.'},
                    {id: 8, text: 'I too, am a slave to corporate America.'},
                    {id: 9, text: 'I have no friends'},
                    {id: 10, text: '✴  🎀  𝓓𝓔𝓟𝓡𝓔𝓢𝓢𝓔𝓓  🎀  ✴'}
                ]
            }
        },
        methods: {
            randomQuote() {
                var randomQuote = this.quotes[Math.floor(Math.random()*this.quotes.length)];
                return randomQuote.text
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>