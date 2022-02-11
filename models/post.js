const mongoose = require("mongoose");

let postSchema = mongoose.Schema(
  {
    ref_id: {type:Number, index:true},
    date: Date,
    date_gmt: Date,
    guid: {},
    modified: Date,
    modified_gmt: Date,
    slug: String,
    status: String,
    type: String,
    link: String,
    title: { String },
    content: {
      rendered: String,
      protected: Boolean
    },
    author_id: Number,
    featured_media: String,
    comment_status: String,
    ping_status: String,
    sticky: Boolean,
    template: String,
    format: String,
    meta: [],
    categories: [],
    tags: [],
    links: {}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
