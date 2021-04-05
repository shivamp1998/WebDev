const date = new Date();
$("#divDynamicMonth").text(function () {
  return date.getMonth() + 1;
});
$("#divDynamicDay").text(function () {
  return date.getDate();
});
$("#divDynamicYear").text(function () {
  return date.getFullYear();
});

$.get("http://numbersapi.com/" + (date.getMonth() + 1), function (data) {
  $("#numberAPI1").text(function () {
    return data;
  });
});
$.get("http://numbersapi.com/" + date.getDate(), function (data) {
  $("#numberAPI2").text(function () {
    return data;
  });
});
$.get("http://numbersapi.com/" + date.getFullYear(), function (data) {
  $("#numberAPI3").text(function () {
    return data;
  });
});

document.getElementById("formMainSearch").addEventListener("submit", (e) => {
  var valueFromForm = $("#inputSearchTop").val();
  if (valueFromForm == "") {
    alert("It cannot be empty");
  } else {
    window.location.href = "https://bing.com?q=" + valueFromForm;
  }
  e.preventDefault();
});
