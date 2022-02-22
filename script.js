var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbz8jpnYZJZXuJlHMHA7aeQhf_sqjWvm6lgzLX0rBhTg4n9mHrS6nCPsOmzpBLjuxBBa/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "txt",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
