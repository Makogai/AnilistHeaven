<template>
    <div class="color-main-color">
        This is home page
        <profile-card></profile-card>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import ProfileCard from '../Components/ProfileCard.vue';
export default {
  components: { ProfileCard },
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
