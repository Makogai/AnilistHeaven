<template>
<div>
<nav class="navbar navbar-expand-custom navbar-mainbg">
    <router-link to="/" exact class="navbar-brand ml-5" href="#"><img src="/assets/images/anilistheaven.svg" height="45" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars text-white"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mr-5">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li class="nav-item">
                <router-link to="/" exact class="nav-link" href="javascript:void(0);"><i class="fas fa-home"></i>Home</router-link>
            </li>
            <li class="nav-item home-link">
                <router-link to="/challenges" class="nav-link" href="javascript:void(0);"><i class="fas fa-mountain"></i>Challenges</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/badges" class="nav-link" href="javascript:void(0);"><i class="fas fa-ribbon"></i>Badges</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link" href="javascript:void(0);"><i class="far fa-question-circle"></i>About</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/profile" class="nav-link" v-if="loggedIn" href="javascript:void(0);"><i class="fas fa-user"></i>{{ user.username }}</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/login" class="nav-link" v-if="!loggedIn" href="javascript:void(0);"><i class="fas fa-sign-in-alt"></i>Login</router-link>
            </li>
            <!-- <li class="nav-item logout-link">
                <a v-if="loggedIn" @click.prevent="logout" class="nav-link">Logout</a>
            </li> -->


        </ul>
    </div>
</nav>
                <a v-if="loggedIn" @click.prevent="logout" class="logout-button"><i class="fas fa-sign-in-alt"></i></a>
</div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: 'navbar',
   data(){
       return{
            user:null
        }
    },
    mounted(){
        axios.get('/api/user').then((res)=>{
            this.user = res.data;
            // this.loggedIn = true;
            this.$store.commit('loggedIn', true)
        })
    },
    methods:{
        logout(){
            axios.post('/api/logoutUser').then(()=>{
                // this.loggedIn = false;
                this.$forceUpdate
                this.$store.commit('loggedIn', false)
                this.$router.push({name: 'login'})
            })
        }
    },
    computed:{
        ...mapState({
            loggedIn: state => state.loggedIn
        })
    }
}
</script>
