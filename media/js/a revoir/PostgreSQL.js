var formPrefix = 'jforms_view_edition';

// Name of the QGIS vector layer fields which must contain the user info
var userFields = {
   login: 'lizmap_user_login',
   firstname: 'lizmap_user_firstname',
   lastname: 'lizmap_user_lastname',
   organization: 'lizmap_user_organization'
};


lizMap.events.on({

   'lizmapeditionformdisplayed': function(e){

      // If user is logged in
      if( $('#info-user-login').length ){
            // Loop through the needed fields
            for( var f in userFields ){
               // If the user has some data for this property
               if( $('#info-user-' + f).text() ){
                  // If the field exists in the form
                  var fi = $('#' + formPrefix + '_' + userFields[f]);
                  if( fi.length ){
                        // Set val from lizmap user data
                        fi.val( $('#info-user-' + f).text() )
                        // Set disabled
                        fi.hide();
                  }
               }
            }
      }

   }

});