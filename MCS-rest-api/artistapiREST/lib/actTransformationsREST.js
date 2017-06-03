exports.actSummarySOAP2REST = function (act) {
  console.log('transforming act summary');
  var actSummaryRest = {
      id: act.id, 
      name: act.name, 
      numberOfVotes: act.numberOfVotes,
      registrationDate: act.registrationDate
  };
  console.log(actSummaryREST);
  return actSummaryRest;
};

exports.actSummaryREST2REST = function(act){
	var actSummaryRest = {
		id:act.id,
		name:act.name,
		numberOfVotes: act.numberOfVotes,
		registrationDate: act.registrationDate
	};
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

exports.actDetailsREST2REST = function(act) {
  var albums = act.discography && act.discography.album ? act.discography.album.map(albumREST2REST): [];
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
  
  function albumREST2REST(album) {
  var albumRest = {
      title: album.title, 
      year: album.year, 
      imageURL: album.coverImageUrl
  };
  return albumRest;
};
 


