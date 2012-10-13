function ( doc ) {
  if ( doc._id.substr(0, 4) === "members" ) {
    emit(doc._id, { 
        "greetings" : doc.greeting,
        "fullName"  : doc.fullName,
        "spouse"	: doc.spouse,
        "kids"		: doc.kids,
        "gender"  	: doc.gender,
        "email"		: doc.email,
        "date1"     : doc.date1,
        "notes"     : doc.notes 
    });
  }
};