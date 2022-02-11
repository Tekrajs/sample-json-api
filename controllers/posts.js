class Posts {
  constructor() {
    this.fetch_live_data = process.env.FETCH_LIVE_DATA || false;
  }

  async index() {
    if(this.fetch_live_data === true){
      return await this.getLiveData();
    }
  }

  show(post_id) {}
}
