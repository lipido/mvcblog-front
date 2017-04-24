class PostsModel extends Fronty.Model {

  constructor() {
    super('PostsModel'); //call super

    // model attributes
    this.posts = [];
  }

  setSelectedPost(post) {
    this.set((self) => {
      self.selectedPost = post;
    });
  }

  setPosts(posts) {
    this.set((self) => {
      self.posts = posts;
    });
  }
}
