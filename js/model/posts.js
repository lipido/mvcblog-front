class PostsModel extends Model {

  constructor() {
    super('PostsModel'); //call super

    // model attributes
    this.posts = [];
    //this.hello = 'hola';

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
