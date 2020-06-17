<template>
    <div class="main">
        <!-- <topnav0></topnav0> -->
        <topnav></topnav>
        <distriMap></distriMap>
    </div>
</template>

<script>
import distriMap from '@/components/common/distributionMap'
import topnav0 from '@/components/common/nav0'
import topnav from '@/components/common/nav'
export default {
    components:{
        distriMap,topnav0,topnav
    },
    methods:{
        // init(){
        //      this.$store.commit('newAuthor','user')
        // }
    },
    mounted(){
        // this.init()
    }
}
</script>

<style>


</style>

