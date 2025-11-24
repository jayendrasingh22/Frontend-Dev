// Q6 – Event Subscription Panel
$(function () {
  $("#topics").on("click", ".subscribe", function () {
    $(this).closest("li").addClass("subscribed");
    $("#messages").text("Subscribed to " + $(this).closest("li").text());
  });
  $("#topics").on("click", ".unsubscribe", function () {
    $(this).closest("li").removeClass("subscribed");
    $("#messages").text("Unsubscribed from " + $(this).closest("li").text());
  });
  $("#add-topic").on("click", function () {
    $("#topics").append(
      '<li class="topic">NewTopic <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button></li>'
    );
  });
  $("#remove-last").on("click", function () {
    $("#topics li:last").remove();
  });
  $("#topics").on("click", ".subscribe, .unsubscribe", function () {
    const msg = $('<div class="card">Action completed</div>');
    $("#messages").empty().append(msg);
    setTimeout(() => msg.fadeOut(800, () => msg.remove()), 1500);
  });
  console.log("Q6 ready.");
});
