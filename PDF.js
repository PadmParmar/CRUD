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
    addPdfGet: function(values, callback) {
        console.log("insie PDF addPdf using get method...");
        return db.query("Insert into tbl_pdf_master SET ?", values, callback);
    },
    updatePdfGet: function(columns,data,id, callback) {
        console.log("insie PDF updatePdfGet...");
        return db.query("update tbl_pdf_master set ??? = ? where id=?", [columns,data,id], callback);
    },
    addPdf: function(Pdf, callback) {
        console.log("inside PDF addPdf...");
        return db.query("Insert into tbl_pdf_master SET ?", Pdf, callback);
    },
    deletePdf: function(id, callback) {
        console.log("insie PDF deletePdf...");
        return db.query("delete from tbl_pdf_master where id=?", id, callback);
    },
    updatePdf: function(id, Pdf, callback) {
        console.log("insie PDF updatePdf...");
        return db.query("update tbl_pdf_master set bookname=?,name=?,path=? where id=?", Pdf.bookname, Pdf.name, Pdf.path, id, callback);
    }
};
module.exports = PDF;
