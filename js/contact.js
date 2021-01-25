$(document).ready(function () {
  var submitBtn = $(".submitBtn");

  // CONTACT FORM DATA VALIDATION AND SEND DATA API
  submitBtn.click(function sendContact() {
    var valid;
    valid = validateContact();
    if (valid) {
      $.ajax({
        url: "https://formsubmit.co/ajax/info.dgm.2015@gmail.com",
        method: "POST",
        data: {
          name: $("#userName").val(),
          email: $("#userEmail").val(),
          reason: $("#contactReason").val(),
          message: $("#content").val(),
        },
        dataType: "json",

        success: function () {
          $("#mail-status").html(
            "<p class='mailSuccess'>Message sent. We will respond as soon as possible.</p>"
          );
          $(".submitBtn").fadeOut(100);
          $("#mail-status").fadeIn(500);
        },
        error: function () {
          $("#mail-status").html(
            "<p class='mailError'>Error. Please contact us directly via email info.dgm.2015@gmail.com(</p>"
          );
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
