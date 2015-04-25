var form = document.getElementById('content-form');

function makeHiddenField(id) {
  var hidden_el = document.createElement("input");
  hidden_el.type = "hidden";
  hidden_el.id = id;
  hidden_el.name = id;
  form.appendChild(hidden_el);
}

function sendContent(e) {
  var editable_els = document.querySelectorAll("[contenteditable]");

  [].forEach.call(editable_els, function(el) {
    var target_id = '#' + el.getAttribute("id");

    makeHiddenField(target_id);
    document.getElementById(target_id).value = el.innerHTML;
  });

  e.preventDefault();
  this.submit();
}

function loadContent() {
  var editable_obj = local_data,
      key, editable_region;

  for (key in editable_obj) {

    if (editable_obj.hasOwnProperty(key)) {
      editable_region = document.querySelector(editable_obj[key].dom_key);

      if (editable_region) {
        editable_region.innerHTML = editable_obj[key].content;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", loadContent);

if (form) {
  form.addEventListener("submit", sendContent, false);
}
