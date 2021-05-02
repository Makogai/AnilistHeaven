<nav class="navbar navbar-expand-custom navbar-mainbg">
    <router-link to="/" exact class="navbar-brand ml-5" href="#"><img src="{{ asset('assets/images/anilistheaven.svg') }}" height="45" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars text-white"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mr-5">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li class="nav-item">
                <router-link to="/" exact class="nav-link" href="javascript:void(0);"><i class="fas fa-home"></i>Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/challenges" class="nav-link" href="javascript:void(0);"><i class="fas fa-mountain"></i>Challenges</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/badges" class="nav-link" href="javascript:void(0);"><i class="fas fa-ribbon"></i>Badges</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link" href="javascript:void(0);"><i class="far fa-question-circle"></i>About</router-link>
            </li>
            @auth
            <li class="nav-item">
                <router-link to="/profile" class="nav-link" href="javascript:void(0);"><i class="fas fa-user"></i>Profile</router-link>
            </li>
            @endauth
            @guest
            <li class="nav-item">
                <router-link to="/login" class="nav-link" href="javascript:void(0);"><i class="fas fa-sign-in-alt"></i>Login</router-link>
            </li>
            @endguest
        </ul>
    </div>
</nav>
