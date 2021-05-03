<template>
    <div class="color-main-color">
        This is home page
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
  /*  mounted() {
        console.log(this.$store.getters.loggedIn);
        axios.get("/api/user").then(res => {
            this.user = res.data;
        });
    },
    computed:{
        ...mapState({
            loggedIn: state => state.loggedIn
        })
    }*/
};
</script>
