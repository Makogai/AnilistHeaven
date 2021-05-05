<template>
    <div class="color-main-color">
        <div class="page-content " id="page-content">
            <div class="">
                <div class="row justify-content-left">
                    <div class="col-lg-6 col-12 col-md-12">
                        <div class="bg-main-color shadow rounded user-card-full">
                            <div class="row m-l-0 m-r-0">
                                <div class="col-sm-4 bg-c-lite-green user-profile">
                                    <div class="card-block text-center text-white">
                                        <div class="m-b-25"> <img :src="'/images/'+ user.image_path"  height="100" width="100" class="img-radius shadow" alt="User-Profile-Image"> </div>
                                        <h6 class="f-w-600">{{user.username}}</h6>
                                        <p v-if="user.role=='Admin'"><i class="fas fa-crown color-gold"></i><b>{{user.role}}</b></p>
                                        <p v-else>{{user.role}}</p>

                                        <!-- <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i> -->
                                    </div>
                                </div>
                                <div class="col-sm-8 bg-main-color-light">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Username</p>
                                                <h6 class="text-muted f-w-400">{{user.username}}</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Joined</p>
                                                <h6 class="text-muted f-w-400">{{user.register_date}}</h6>
                                            </div>
                                        </div>
                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Recent</p>
                                                <h6 class="text-muted f-w-400">Sam Disuja</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Most Viewed</p>
                                                <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                                            </div>
                                        </div>
                                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
body {
    background-color: #f9f9fa
}


.user-card-full {
    overflow: hidden;
    background-color: #fff;
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
    box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
    border: none;
    margin-bottom: 30px
}

.m-r-0 {
    margin-right: 0px
}

.m-l-0 {
    margin-left: 0px
}

.user-card-full .user-profile {
    border-radius: 5px 0 0 5px
}

.bg-c-lite-green {
    /* background: -webkit-gradient(linear, left top, right top, from(#f29263), to(#ee5a6f)); */
    background: linear-gradient(to right, #0582e2, #06a89b);
    /* background: linear-gradient(to right, #ee5a6f, #f29263) */
    /* background: linear-gradient(to top left, #e00022, #920202) */
}

.user-profile {
    padding: 20px 0
}

.card-block {
    padding: 1.25rem
}

.m-b-25 {
    margin-bottom: 25px
}

.img-radius {
    border-radius: 5px
}

h6 {
    font-size: 14px
}

.card .card-block p {
    line-height: 25px
}

@media only screen and (min-width: 1400px) {
    p {
        font-size: 14px
    }
}

.card-block {
    padding: 1.25rem
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0
}

.m-b-20 {
    margin-bottom: 20px
}

.p-b-5 {
    padding-bottom: 5px !important
}

.card .card-block p {
    line-height: 25px
}

.m-b-10 {
    margin-bottom: 10px
}

.text-muted {
    color: #919aa3 !important
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0
}

.f-w-600 {
    font-weight: 600
}

.m-b-20 {
    margin-bottom: 20px
}

.m-t-40 {
    margin-top: 20px
}

.p-b-5 {
    padding-bottom: 5px !important
}

.m-b-10 {
    margin-bottom: 10px
}

.m-t-40 {
    margin-top: 20px
}

.user-card-full .social-link li {
    display: inline-block
}

.user-card-full .social-link li a {
    font-size: 20px;
    margin: 0 10px 0 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out
}
</style>
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
