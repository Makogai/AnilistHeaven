(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'login',
  data: function data() {
    return {
      login: {
        email: '',
        password: '',
        remember: false
      },
      register: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors_login: [],
      errors_register: []
    };
  },
  methods: {
    registerUser: function registerUser() {
      var _this = this;

      this.errors_register = [];
      axios.post('/api/registerUser', this.register).then(function () {
        console.log("Registered");
      })["catch"](function (error) {
        _this.errors_register = error.response.data.errors;
      });
    },
    loginUser: function loginUser() {
      var _this2 = this;

      this.errors_login = [];
      axios.get('/sanctum/csrf-cookie').then(function (response) {
        // Login...
        axios.post('/login', _this2.login).then(function (res) {
          _this2.$router.push({
            name: 'home'
          });

          console.log(res.data);

          _this2.$store.commit('loggedIn', true);

          _this2.$forceUpdate(); // Notice we have to use a $ here

        })["catch"](function (error) {
          _this2.$store.commit('loggedIn', false);

          _this2.errors_login = error.response.data.errors;
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_77a1bfae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=77a1bfae& */ "./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/Components/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_77a1bfae___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_77a1bfae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Components/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_77a1bfae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_77a1bfae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_77a1bfae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=77a1bfae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6 col-lg-6 col-12 mx-auto p-0" }, [
      _c(
        "div",
        { staticClass: "color-main-color w-100 mx-auto bg-transparent" },
        [
          _c("div", { staticClass: "login-box" }, [
            _c("div", { staticClass: "login-snip bg-main-color" }, [
              _c("input", {
                staticClass: "sign-in",
                attrs: { id: "tab-1", type: "radio", name: "tab", checked: "" }
              }),
              _c("label", { staticClass: "tab", attrs: { for: "tab-1" } }, [
                _vm._v("Login")
              ]),
              _vm._v(" "),
              _c("input", {
                staticClass: "sign-up",
                attrs: { id: "tab-2", type: "radio", name: "tab" }
              }),
              _c("label", { staticClass: "tab", attrs: { for: "tab-2" } }, [
                _vm._v("Sign Up")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "login-space" }, [
                _c("div", { staticClass: "login" }, [
                  _c("div", { staticClass: "group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "user" } },
                      [_vm._v("Email")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.login.email,
                          expression: "login.email"
                        }
                      ],
                      staticClass: "input",
                      attrs: {
                        id: "user",
                        type: "email",
                        name: "login-email",
                        placeholder: "Enter your email"
                      },
                      domProps: { value: _vm.login.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.login, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors_login.email
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors_login.email[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "pass" } },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.login.password,
                          expression: "login.password"
                        }
                      ],
                      staticClass: "input",
                      attrs: {
                        id: "pass",
                        type: "password",
                        name: "login-password",
                        "data-type": "password",
                        placeholder: "Enter your password"
                      },
                      domProps: { value: _vm.login.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.login, "password", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.login.remember,
                          expression: "login.remember"
                        }
                      ],
                      staticClass: "check",
                      attrs: { id: "check", type: "checkbox", checked: "" },
                      domProps: {
                        checked: Array.isArray(_vm.login.remember)
                          ? _vm._i(_vm.login.remember, null) > -1
                          : _vm.login.remember
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.login.remember,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.login,
                                  "remember",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.login,
                                  "remember",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.login, "remember", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(0)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "group" }, [
                    _c("input", {
                      staticClass: "button bg-logo",
                      attrs: { type: "submit", value: "Sign In" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.loginUser($event)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "hr" }),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "sign-up-form" }, [
                  _c("div", { staticClass: "group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "username" } },
                      [_vm._v("Username")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.register.username,
                          expression: "register.username"
                        }
                      ],
                      staticClass: "input",
                      attrs: {
                        name: "register-username",
                        id: "username",
                        type: "email",
                        "data-type": "username",
                        placeholder: "Enter your username"
                      },
                      domProps: { value: _vm.register.username },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.register,
                            "username",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors_register.username
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors_register.username[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "email" } },
                      [_vm._v("Email Address")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.register.email,
                          expression: "register.email"
                        }
                      ],
                      staticClass: "input",
                      attrs: {
                        name: "register-email",
                        id: "email",
                        type: "email",
                        "data-type": "email",
                        placeholder: "Enter your email address"
                      },
                      domProps: { value: _vm.register.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.register, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors_register.email
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors_register.email[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "pass" } },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.register.password,
                          expression: "register.password"
                        }
                      ],
                      staticClass: "input",
                      attrs: {
                        name: "register-password",
                        id: "pass",
                        type: "password",
                        "data-type": "password",
                        placeholder: "Create your password"
                      },
                      domProps: { value: _vm.register.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.register,
                            "password",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors_register.password
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors_register.password[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "group" }, [
                    _c(
                      "label",
                      { staticClass: "label", attrs: { for: "pass" } },
                      [_vm._v("Repeat Password")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.register.password_confirmation,
                          expression: "register.password_confirmation"
                        }
                      ],
                      staticClass: "input",
                      attrs: {
                        name: "register-password_confirmation",
                        id: "pass",
                        type: "password",
                        "data-type": "password",
                        placeholder: "Repeat your password"
                      },
                      domProps: { value: _vm.register.password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.register,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors_register.password_confirmation
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v(
                            _vm._s(_vm.errors_register.password_confirmation[0])
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "group" }, [
                    _c("input", {
                      staticClass: "button bg-logo",
                      attrs: { type: "submit", value: "Sign Up" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.registerUser($event)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "check" } }, [
      _c("span", { staticClass: "icon" }),
      _vm._v(" Keep me Signed in")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "foot color-logo" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Forgot Password?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "foot" }, [
      _c("label", { attrs: { for: "tab-1 color-logo" } }, [
        _vm._v("Already Member?")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);