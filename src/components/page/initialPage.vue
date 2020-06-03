<template>
    <div class="main">
        <topnav0></topnav0>
        <distriMap></distriMap>
    </div>
</template>

<script>
import distriMap from '@/components/common/distributionMap'
import topnav0 from '@/components/common/nav0'
export default {
    components:{
        distriMap,topnav0
    },
    methods:{
        init(){
             this.$store.commit('newAuthor','user')
        }
    },
    mounted(){
        this.init()
    }
}
</script>

<style>


</style>

