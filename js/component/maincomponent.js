class MainComponent extends Fronty.RouterComponent {
  constructor() {
    super('frontyapp', Handlebars.templates.main, 'maincontent');

    // models instantiation
    // we can instantiate models at any place
    this.userModel = new UserModel();
    this.postsModel = new PostsModel();
    this.userService = new UserService();

    super.setRouterConfig({
      posts: {
        component: new PostsComponent(this.postsModel, this.userModel, this),
        title: 'Posts'
      },
      'view-post': {
        component: new PostViewComponent(this.postsModel, this.userModel, this),
        title: 'Post'
      },
      'edit-post': {
        component: new PostEditComponent(this.postsModel, this.userModel, this),
        title: 'Edit Post'
      },
      'add-post': {
        component: new PostAddComponent(this.postsModel, this.userModel, this),
        title: 'Add Post'
      },
      login: {
        component: new LoginComponent(this.userModel, this),
        title: 'Login'
      },
      defaultRoute: 'posts'
    });

    Handlebars.registerHelper('currentPage', () => {
          return super.getCurrentPage();
    });

    this.addChildComponent(this._createUserBarComponent());
    this.addChildComponent(this._createLanguageComponent());

  }

  start() {
    // override the start() function in order to first check if there is a logged user
    // in sessionStorage, so we try to do a relogin and start the main component
    // only when login is checked
    this.userService.loginWithSessionData()
      .then((logged) => {
        if (logged != null) {
          this.userModel.setLoggeduser(logged);
        }
        super.start(); // now we can call start
      });
  }

  _createUserBarComponent() {
    var userbar = new Fronty.ModelComponent(Handlebars.templates.user, this.userModel, 'userbar');

    userbar.addEventListener('click', '#logoutbutton', () => {
      this.userModel.logout();
      this.userService.logout();
    });

    return userbar;
  }

  _createLanguageComponent() {
    var languageComponent = new Fronty.ModelComponent(Handlebars.templates.language, this.routerModel, 'languagecontrol');
    // language change links
    languageComponent.addEventListener('click', '#englishlink', () => {
      I18n.changeLanguage('default');
      document.location.reload();
    });

    languageComponent.addEventListener('click', '#spanishlink', () => {
      I18n.changeLanguage('es');
      document.location.reload();
    });

    return languageComponent;
  }
}
