"use strict";
/** @suppress {duplicate}*/var proto;
if (typeof(proto)=="undefined") {proto = {};}

proto.Board = PROTO.Message("proto.Board",{
	entity: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return proto.BoardEntity;},
		id: 1
	}});
proto.BoardEntity = PROTO.Message("proto.BoardEntity",{
	author: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return proto.Person;},
		id: 1
	},
	post: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return PROTO.string;},
		id: 2
	},
	link: {
		options: {},
		multiplicity: PROTO.repeated,
		type: function(){return PROTO.string;},
		id: 3
	},
	data: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return PROTO.string;},
		id: 4
	}});
proto.Person = PROTO.Message("proto.Person",{
	name: {
		options: {},
		multiplicity: PROTO.required,
		type: function(){return PROTO.string;},
		id: 1
	},
	surname: {
		options: {},
		multiplicity: PROTO.optional,
		type: function(){return PROTO.string;},
		id: 2
	}});
