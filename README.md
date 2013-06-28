Protobuf-example
================
```(proto)
package proto;

message Board {
    repeated BoardEntity entity = 1;
}

message BoardEntity {
    required Person author = 1;
    required string post = 2;
    repeated string link = 3;
    required string data = 4;
}

message Person {
    required string name = 1;
    optional string surname = 2;
}
```
