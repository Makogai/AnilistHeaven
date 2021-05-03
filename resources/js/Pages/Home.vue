<template>
    <div class="color-main-color">
        <!-- username: <b>{{user.username}}</b> <br>
        email: <b>{{user.email}}</b> -->
        Home page
    </div>
</template>
<script>
export default {
    name: 'home',
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
