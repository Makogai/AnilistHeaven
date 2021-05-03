<template>
  <div class="row">
    <div class="col-md-6 col-lg-6 col-12 mx-auto p-0">
      <div class="color-main-color w-100 mx-auto bg-transparent">
        <div class="login-box">
          <div class="login-snip bg-main-color">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              class="sign-in"
              checked
            /><label for="tab-1" class="tab">Login</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" /><label
              for="tab-2"
              class="tab"
              >Sign Up</label
            >
            <div class="login-space">
              <div class="login">
                <div class="group">
                  <label for="user" class="label">Email</label>
                  <input
                    id="user"
                    type="email"
                    name="login-email"
                    class="input"
                    placeholder="Enter your email"
                    v-model="login.email"
                  />
                  <span v-if="errors_login.email" class="text-danger">{{ errors_login.email[0] }}</span>
                </div>
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    name="login-password"
                    data-type="password"
                    placeholder="Enter your password"
                    v-model="login.password"
                  />
                </div>
                <div class="group">
                  <input id="check" type="checkbox" v-model="login.remember" class="check" checked />
                  <label for="check"
                    ><span class="icon"></span> Keep me Signed in</label
                  >
                </div>
                <div class="group">
                  <input @click.prevent="loginUser" type="submit" class="button bg-logo" value="Sign In" />
                </div>
                <div class="hr"></div>
                <div class="foot color-logo">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div class="sign-up-form">
                <div class="group">
                  <label for="username" class="label">Username</label>
                  <input
                    v-model="register.username"
                    name="register-username"
                    id="username"
                    type="email"
                    class="input"
                    data-type="username"
                    placeholder="Enter your username"
                  />
                  <span v-if="errors_register.username" class="text-danger">{{ errors_register.username[0] }}</span>
                </div>
                <div class="group">
                  <label for="email" class="label">Email Address</label>
                  <input
                    v-model="register.email"
                    name="register-email"
                    id="email"
                    type="email"
                    class="input"
                    data-type="email"
                    placeholder="Enter your email address"
                  />
                  <span v-if="errors_register.email" class="text-danger">{{ errors_register.email[0] }}</span>
                </div>
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input
                    v-model="register.password"
                    name="register-password"
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    placeholder="Create your password"
                  />
                  <span v-if="errors_register.password" class="text-danger">{{ errors_register.password[0] }}</span>
                </div>
                <div class="group">
                  <label for="pass" class="label">Repeat Password</label>
                  <input
                    v-model="register.password_confirmation"
                    name="register-password_confirmation"
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    placeholder="Repeat your password"
                  />
                  <span v-if="errors_register.password_confirmation" class="text-danger">{{ errors_register.password_confirmation[0] }}</span>
                </div>
                <div class="group">
                  <input
                    @click.prevent="registerUser"
                    type="submit"
                    class="button bg-logo"
                    value="Sign Up"
                  />
                </div>
                <div class="foot">
                  <label for="tab-1 color-logo">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            login:{
                email: '',
                password:'',
                remember: 0
            },
            register:{
                username: '',
                email: '',
                password:'',
                password_confirmation: ''
            },
            errors_login: [],
            errors_register: []
        }
    },
    methods:{
        registerUser(){
            this.errors_register = [];
            console.log(this.register);
            axios.post('/api/registerUser', this.register).then(() =>{
                console.log("Registered");
            }).catch((error) => {
                this.errors_register = error.response.data.errors;
            })
        },
        loginUser(){
            this.errors_login = [];
            console.log(this.login);
            axios.get('/sanctum/csrf-cookie').then(response => {
    // Login...
            axios.post('/api/loginUser', this.login).then((res) =>{
                this.$router.push({ name: 'Home' });
                // console.log(res.data)
            }).catch((error) => {
                this.errors_login = error.response.data.errors;
            })
});
        }
    }
}
</script>
