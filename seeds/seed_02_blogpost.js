
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogpost').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogpost').insert([
        {author_id: 1, title: 'title1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', image: 'http://media.cntraveler.com/photos/54359291f2f192ac5aefdf98/master/w_775,c_limit/bucket-list-mont-blanc-chamonix-france-5.jpg'},
        {author_id: 2, title: 'title2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', image: 'http://www.freshpalace.com/wp-content/uploads/2013/02/Zumthor-Vacation-Homes-Views.jpg'},
        {author_id: 3, title: 'title2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', image: 'https://s-media-cache-ak0.pinimg.com/736x/80/bb/71/80bb7118206aae3ac56e04703e7a1efe.jpg'},
        {author_id: 1, title: 'title2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', image: 'http://noova.com/lars/bc/bcfall2013/IMG_7367_HDR_2048.jpg'},
        {author_id: 2, title: 'title2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', image: 'http://player.hu/uploads/2015/02/b6b65261ba36b20801c6196849ac8baa.jpg'},
        {author_id: 3, title: 'title2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', image: 'http://2.bp.blogspot.com/-qerBINBwy_E/VRPVFFXfe2I/AAAAAAAAI7E/iit3IXfh6os/s1600/View%2Bof%2Bthe%2BEiger%2Bfrom%2Bthe%2BGrosse%2BScheidegg%2Bmountain%2Bpass,%2BSwitzerland%2B20150326.jpg'},
        {author_id: 1, title: 'title2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', image: 'http://il8.picdn.net/shutterstock/videos/7439794/thumb/1.jpg?i10c=img.resize(height:160)'},
        {author_id: 2, title: 'title2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg'},
        {author_id: 3, title: 'title2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', image: 'https://s-media-cache-ak0.pinimg.com/originals/b3/8f/e6/b38fe6c55610dc52ccab7df112d05cde.jpg'}
      ])
    })
}
