<template>
    <div class="color-main-color">This is About page</div>
</template>
<script>
export default {
   data(){
        return{
            user:null
        }
    },
    mounted(){
        axios.get('/api/user').then((res)=>{
            this.user = res.data
        })
    }
}
</script>
