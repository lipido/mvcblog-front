class PostModel extends Fronty.Model {

  constructor(id, title, author_id) {
    super('PostModel'); //call super
    
    if (id) {
      this.id = id;
    }
    
    if (title) {
      this.title = title;
    }
    
    if (author_id) {
      this.author_id = author_id;
    }
  }

  setTitle(title) {
    this.set((self) => {
      self.title = title;
    });
  }

  setAuthor_id(author_id) {
    this.set((self) => {
      self.author_id = author_id;
    });
  }
}
