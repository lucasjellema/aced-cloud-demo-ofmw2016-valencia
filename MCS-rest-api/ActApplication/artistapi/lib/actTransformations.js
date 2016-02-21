exports.actSummarySOAP2REST = function (act) {
  console.log('transforming act summary');
  var actSummaryRest = {
      id: act.id, 
      name: act.name, 
      numberOfVotes: act.numberOfVotes,
      registrationDate: act.registrationDate
  };
  console.log(actSummaryRest);
  return actSummaryRest;
};
 
exports.actDetailsSOAP2REST = function(act) {
  var albums = act.discography && act.discography.album ? act.discography.album.map(albumSOAP2REST): [];
  var actRest = {
     id: act.id, 
      name: act.name, 
      numberOfVotes: act.numberOfVotes,
      registrationDate: act.registrationDate,
      description: act.description,
      genres: act.genres,
      biography: act.biography,
      imageURL: act.imageURL,
      image: act.image,
      discography: albums
  };
  return actRest;
};
  
  function albumSOAP2REST(album) {
  var albumRest = {
      title: album.title, 
      year: album.year, 
      imageURL: album.coverImageUrl
  };
  return albumRest;
};
 


