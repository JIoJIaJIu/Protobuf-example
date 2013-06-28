PROTO.log = function (str) {}

$(function () {
    $("#submitForm").click(function (e) {
        e.preventDefault();
        var message = new proto.BoardEntity();
        var stream = new PROTO.ArrayBufferStream();
        message.post = $("#text").val();
        var author = message.author = new proto.Person();
        author.name = $("#name").val();
        message.date = PROTO.I64.fromNumber((new Date()).getTime());

        message.SerializeToStream(stream);
        console.log(message.toString());

        $.ajax({
            url: "/add",
            type: "POST",
            data: stream.getUint8Array()
        }).done(function () {
            console.log('xxxxxx');
            build();
        });
    });

    build();
});

function build() {

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/list", true);
    xhr.responseType = "arraybuffer";

    xhr.onload = function(e) {
      if (this.status == 200) {
            // Note: .response instead of .responseText
            var container = $("<ol/>");
            var message = new proto.Board()
            var stream = new PROTO.ArrayBufferStream(this.response, this.response.byteLength);
            message.ParseFromStream(stream);
            console.log(stream);
            console.log(message.toString());
            var entities = Array.apply([], message.entity)
            for (var i = 0, length = entities.length; i < length; i++) { 
                container.append(addEntry(entities[i]));
            };
            $("#container").html(container);
        }
    };

    xhr.send();
}

function addEntry(entry) {
    console.log('addEntry' + entry.toString())
    var record = $("<li/>");
    var name = $("<h2/>").html(entry.author.name)
    name.append($("<span/>").text(new Date(entry.date.toNumber())));
    var text = $("<p/>").addClass("text").text(entry.post);
    record.append(name).append(text);
    return record;
};
