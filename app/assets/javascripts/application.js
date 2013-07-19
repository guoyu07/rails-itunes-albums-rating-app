// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

  $('.rate a').unbind('click').click( function(e) {
    e.preventDefault();
    if ($(this).hasClass('remove')) {
      value = null
    } else {
      value = $(this).text()
    }
    $.ajax({
      type: 'PUT',
      cache: true,
      url: $(this).attr('href'),
      data: { album: {
          id: $(this).parent().attr('id'),
          rating: value
        }
      }
    });
    $(this).siblings().removeClass('on');
    $(this).addClass('on');
    return false;
  });

  $('.sortable').sortable({
    axis: 'y',
    handle: '.drag',
    update: function() {
      $.post($(this).data('sort-url'), $(this).sortable('serialize'));
    }
  });

});