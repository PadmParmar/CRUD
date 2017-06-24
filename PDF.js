var db = require('./dbconnection'); //reference of dbconnection.js
console.log("inside PDF.js...");

var PDF = {
    getAllPdfs: function(callback) {
        console.log("insie PDF getAllPdfs...");
        return db.query("select * from tbl_pdf_master", callback);
    },
    getPdfById: function(id, callback) {
        console.log("insie PDF getPdfById...");
        return db.query("select * from tbl_pdf_master where id=?", id, callback);
    },
    addPdf: function(Pdf, callback) {
        console.log("inside PDF addPdf...");
        return db.query("Insert into tbl_pdf_master SET ?", Pdf, callback);
    },
    deletePdf: function(id, callback) {
        console.log("insie PDF deletePdf...");
        return db.query("delete from tbl_pdf_master where id=?", id, callback);
    },
    updatePdf: function(Pdf, callback) {
        console.log("insie PDF updatePdf...");
        console.log(Pdf);
        return db.query("UPDATE tbl_pdf_master SET name=?,bookname=?, path=? WHERE id=?", Pdf, callback);
    }
};
module.exports = PDF;