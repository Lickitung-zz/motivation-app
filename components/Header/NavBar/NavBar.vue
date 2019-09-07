<template>
    <div>
        <TopNavBar />
        <BottomNavBar />
    </div>
</template>

<script>
import TopNavBar from '~/components/Header/NavBar/Sections/TopNavBar'
import BottomNavBar from '~/components/Header/NavBar/Sections/BottomNavBar'

    export default {
        components: {
            TopNavBar,
            BottomNavBar
        }
    }
</script>

<style lang="scss" scoped>

</style>