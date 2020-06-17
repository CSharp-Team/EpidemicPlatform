<template>
    <div class="main">
        <topnav></topnav>
        <sdMap></sdMap>
    </div>
</template>

<script>
import sdMap from '@/components/common/SDMap'
import topnav0 from '@/components/common/nav0'
import topnav from '@/components/common/nav'
export default {
    components:{
        sdMap,topnav0,topnav
    },
    methods:{
      
    },
    mounted(){
        // this.init()
    }
}
</script>

<style>


</style>

