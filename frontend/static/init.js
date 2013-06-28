$(function () {
    $("submitForm").click(function (e) {
        e.preventDefault();
        let message = new proto.BoardEntity();
        let stream = new PROTO.ArrayBufferStream(xhr.response);
        message.SerializeToStream();
        $.ajax({
            url: "/add",
            type: "POST",
            onSuccess: function (xhr) {
                build();
            };
        });
    });
    alert('done');
});

function build() {
    $.ajax({
        url: "/list",
        onSuccess: function (xhr) {
            var container = $("<ol></ol>");
            var message = new proto.Board()
            var stream = new PROTO.ArrayBufferStream(xhr.response);
            message.ParseFromStream(stream)
            for (var entry in board.entry) {
                container.append(addEntry(entry));
            };

            $("#container").html(container);
        }
    });
}

function addEnty(entry) {
    var record = $("<li></li>");
    var name = $("<h2/>").text(entry.author.name);
    var text = $("<p/>").addClass("text").text(entry.text);
    record.append(name).append(text);
    return record;
};
