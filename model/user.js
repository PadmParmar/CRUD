var id,name,bookname,path;

exports.setId = function (id) {
    this.id = id;
};

exports.setName = function (name) {
    this.name = name;
};

exports.setBookname = function (bookname) {
    this.bookname = bookname;
};

exports.setPath = function (path) {
    this.path = path;
};


exports.setUser = function (name,bookname,path) {
    this.name = name;
    this.bookname = bookname;
    this.path = path;
};

exports.getUserWithoutId = function () {
    return {
        name:name,
        bookname:bookname,
        path:path
    };
};

exports.getUsersWithId = function () {
    return {
        id:id,
        name:name,
        bookname:bookname,
        path:path
    };
};