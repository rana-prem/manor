//trigger the snap scroll
var snapScroll = $("section").SnapScroll({
  hashes: true
});
console.log(snapScroll);

//Listen for active element change
//You could listen globally like $(document)
$("header").on(snapScroll.eventChangeActive, function(evt, newActive) {
  console.log(evt, newActive);
});

//Listen for visible element change
//You could listen on a specific element like $("header")
$(document).on(snapScroll.eventChangeVisible, function(evt, visibleList) {
  console.log(evt, visibleList.data);
});
