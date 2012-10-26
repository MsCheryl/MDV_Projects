function(doc) {
  if (doc._id.substr(0,4)==='membership:') {
    emit(doc._id, {
    	"greeting":doc.greeting,
    	"fname":doc.fname,
    	"lname":doc.lname,
    	"email":doc.email,
    	"sexval":doc.sexval
    });
  }
};