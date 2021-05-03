<template>
    <div class="color-main-color">
               username: <b>{{ user.username }}</b> <br />
        email: <b>{{ user.email }}</b>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: "home",
    data() {
        return {
            user: null
        };
    },
    mounted() {
        console.log(this.$store.getters.loggedIn);
        axios.get("/api/user").then(res => {
            this.user = res.data;
        });
    },
    computed:{
        ...mapState({
            loggedIn: state => state.loggedIn
        })
    }
};
</script>
