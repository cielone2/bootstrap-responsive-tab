# bootstrap-responsive-tab
responsive tabs for bootstrap

#install
include responsivetab.js after bootstrap javascript

#usage

# #responsivtab is your ul id
  $(function () {<br>
        $('#responsivetab').responsivetab({<br>
          text: 'Other',<br>
        });
  })
      
#  if you want real time responsive you can use this code
  $(window).on('resize', function() {<br>
          $('#responsivetab').responsivetab({<br>
            text: 'Other',<br>
          });
  });

