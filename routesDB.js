var express = require('express');
var router = express.Router();
var PDF=require("./PDF");
console.log("Inside routesDB...");

router.get('/homepage',function(req,res){
  console.log("Inside Home Page");
  res.render('../crud.ejs');
});

router.get('/addPost',function(req,res){
  console.log("Inside addPost Page");
  res.sendFile(__dirname + '/addPost.html');
});

/*CRUD using GET method*/
router.get('/add', function(req, res, next) {
    console.log("inside get method...");
    var value={id:req.query.id,bookname:req.query.bookname,name:req.query.name,path:req.query.path};
    console.log(value);
    PDF.addPdfGet(value, function(err, rows) {
        console.log("inside addPdfGet method...");
        if (err) {
            res.json(err);
        } else {
            res.sendFile(__dirname + '/crud.ejs');
        }
    });
});

router.get('/update', function(req, res, next) {
    console.log("inside get method...");
    var columns = ['name','bookname','path'];
    var data= [req.query.name,req.query.bookname,req.query.path];
    PDF.updatePdfGet(columns,data,req.query.id, function(err, rows) {
        console.log("inside updatePdfGet method...");
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/getId:id?', function(req, res, next) {
    console.log("inside get method...");
    if (req.params.id) {
        console.log("inside get id method...");
        PDF.getPdfById(req.params.id, function(err, rows) {
            if (err) {
                console.log(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.get('/getAll', function(req, res, next) {
    console.log("inside getAll Method...");
    PDF.getAllPdfs(function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.render('../crud.ejs',{data:rows});
        }
    });
});

router.get('/delete:id?', function(req, res, next) {
    console.log("inside delete method...");
    PDF.deletePdf(req.params.id, function(err, count) {
      console.log("inside deletePdf method...");
        if (err) {
            console.log(err);
        } else {
            PDF.getAllPdfs(function(err, rows) {
                res.render('../crud.ejs',{data:rows});
            });
        }
    });
});

router.post('/add', function(req, res, next) {
    console.log("inside post method...");
    console.log(req.body);
    PDF.addPdf(req.body, function(err, rows) {
      console.log("inside post addPdf method...");
        if (err) {
            console.log(err);
        } else {
            PDF.getAllPdfs(function(err, rows) {
                res.render('../crud.ejs',{data:rows});
            });
        }
    });
});

router.delete('/:id', function(req, res, next) {
    console.log("inside delete method...");
    PDF.deletePdf(req.params.id, function(err, count) {
      console.log("inside deletePdf method...");
        if (err) {
            res.json(err);
        } else {
            PDF.getAllPdfs(function(err, rows) {
                 res.render('../crud.ejs',{data:rows});
            });
        }
    });
});

router.put('/:id', function(req, res, next) {
    console.log("inside put method....");
    PDF.updatePdf(req.params.id,req.body,function(err, rows) {
        console.log("inside updatePdf method...");
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports.router = router;