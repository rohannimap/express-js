const post = await Post.create({ title: 'test' });
console.log(post instanceof Post); // true
await post.destroy();
console.log('soft-deleted!');
await post.restore();
console.log('restored!');

await Post.restore({
  where: {
    likes: {
      [Op.gt]: 100,
    },
  },
});