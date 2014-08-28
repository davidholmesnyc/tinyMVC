function mvc(modal,view,callback){
  console.log('starting M('+modal+')V('+view+')C')
  $.get(view)
  .then(function(html){
    console.log('MVC received view',html)
    $.getJSON(modal,function(data){
      console.log('MVC received json',data)
      var view = Mustache.render(html, data)
      console.log('MVC rendered view',view)
      //console.log(output)
      callback(modal,view) // callback
    })
  })
}

/*

<div view="clock.html" controller="clock.js" ></div>

<div id="comments" modal="comments.php" view="comments.html" controller="comments.js" reload="every 30 seconds">
Number of comments:<strong>{{ textCount }}</strong>
<textarea>
  {{ txt }}
</textarea>

<button class="btn btn-class">
  {{ comment.submitStatus || 'Submit'}}
</button>

</div>



var comments = comments || {}

comments.init = function(){
  $('.comment-submit').on('click',comments.submit)
}

comments.submit = function(){
  var text = $('#comments textarea').
}


POST
REST
PURD
CURD 

comments.init = function(){
  $('#comments button').on('click',function(){

  })
}
comments.create = function(){
  var parameters = {
    "txt":$('textarea').val()
  }
  
  $.postJSON('comments.create',parameters)
  .then(function(){
     
  })

}

comments.update = function(){
  
  var parameters = {
    "txt":$('textarea').val(),
    'id':$('user').val()
  }
  
  $.postJSON('comments.update',parameters)
  .then(updateDiv)

  return console.log('comments updated')
}

comments.read = function(){
  $.getJSON('comments.read')
  .then(function(){
      return 0
  })
  return 0
}
comments.delete = function(){
  
}
*/
