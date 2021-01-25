$(document).ready(function () {
  var submitBtn = $(".submitBtn");

  // CONTACT FORM DATA VALIDATION AND SEND DATA TO PHP FILE sendMail.php
  submitBtn.click(function sendContact() {
    var valid;
    valid = validateContact();
    if (valid) {
      jQuery.ajax({
        url: "./php/sendMail.php",
        data:
          "userName=" +
          $("#userName").val() +
          "&userEmail=" +
          $("#userEmail").val() +
          "&contactReason=" +
          $("#contactReason").val() +
          "&content=" +
          $("#content").val(),
        type: "POST",
        success: function (data) {
          $("#mail-status").html(data);
          $(".submitBtn").fadeOut(100);
          $("#mail-status").fadeIn(500);
        },
        error: function (data) {
          $("#mail-status").html(data);
          $(".submitBtn").fadeOut(100);
          $("#mail-status").fadeIn(500);
        },
      });
    }
  });
  // Validate eneterd data in contact form
  function validateContact() {
    var valid = true;
    $(".info").html("");
    if (
      !$("#userName").val() ||
      !$("#userEmail").val() ||
      !$("#contactReason").val() ||
      !$("#content").val()
    ) {
      $("#mail-status").html("<p class='mailError'>All fields required!</p>");
      $("#mail-status").fadeIn(500);
      valid = false;
    }
    if (
      !$("#userEmail")
        .val()
        .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
    ) {
      $("#mail-status").html("<p class='mailError'>Email invalid!</p>");
      $("#mail-status").fadeIn(500);
      valid = false;
    }
    return valid;
  }
});
