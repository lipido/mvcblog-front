class PostsComponent extends ModelComponent {
  constructor(postsModel, userModel, router) {
    super(Handlebars.templates.poststable, [postsModel, userModel]);

    this.postsModel = postsModel;
    this.userModel = userModel;
    this.router = router;

    this.postsService = new PostsService();
    this.addEventListener('click', '.remove-button', (event) => {
      if (confirm(I18n.translate('Are you sure?'))) {
        var postId = event.target.getAttribute('item');
        this.postsService.deletePost(postId)
          .fail(() => {
            alert('post cannot be deleted')
          })
          .always(() => {
            this.updatePosts();
          });
      }
    });

    this.addEventListener('click', '.edit-button', (event) => {
      var postId = event.target.getAttribute('item');
      this.router.goToPage('edit-post?id=' + postId);
    });

  }

  onStart() {
    this.updatePosts();
  }

  updatePosts() {
    this.postsService.findAllPosts().then((data) => {
      this.postsModel.setPosts(data);
    });
  }
}
