var express = require('express');
var router = express.Router();
/**CHÚ Ý: CẦN CONFIG ĐỂ ROUTES ĐẾN indexFQA.js trong file app.js (config cho link /fqa) */




/**===================XỬ LÝ KẾT NỐI DATABASE POSTGRESQL TRONG FILE ROUTES======================*/
/**Bước 1: configuring a pool or client programmatically with connection information. Có 2 cách */
const { Pool, Client } = require('pg')  
const pool = new Pool({ //**Đầu tiên sẽ set các thông số để kết nối csdl, những thông số này lấy tại pgAdmin (postgresql) */
  user: 'postgres',     /**Mở pgAdmin lên, chuột phải vào PostgreSQL tại Browser -> Chọn properties -> chọn tab Connections */
  host: 'localhost',    /**và điền những thông số này vào */
  database: 'webpagenodejs',/**tên database: userLogin */
  password: '1001',     /**nhập password vào */
  port: 5432,
})


/**SELECT */
/** Tạo 1 đường dẫn API trong routes/indexFQA.js để truyền qua frontend truy cập vào database */
// api get data from postgresql
router.get('/indexFQA', function(req, res, next) {    /**check: http://localhost:4000/fqa/indexFQA */

  /**Đầu tiên, khi thao tác với data từ frontend lên backend thì bị lỗi Access-Control-Allow-Origin
        ==> Để fix lỗi này cần setup proxy cho frontend tại reactbasic/package.json (line 45) */
  pool.query('SELECT * FROM public."userLogin" WHERE isdelete=false ORDER BY id ASC',(err,dataReceived) =>{
      if(err) process.on('unhandledRejection', err => { /**Nếu lỗi-> in ra err, còn k thì trả về dataReceived*/
              pool.end(); });
      else res.send(dataReceived.rows)   /**để frontend nhận đc kq này thì cần res.send */
  })
});

/**COUNT */
router.get('/countFQAs', function(req, res, next) {    /**check: http://localhost:4000/fqa/countFQAs */
  pool.query('SELECT * FROM public."userLogin" WHERE isdelete=false ORDER BY id ASC',(err,dataReceived) =>{
      if(err) process.on('unhandledRejection', err => {pool.end(); });
      else res.send(dataReceived.rowCount.toString(10)) /**convert sang string hệ thập phân */
  })
});

/**INSERT */
router.post('/addDataPostgresqlDemo2', function(req, res, next) {
  /**Đầu tiên, khi thao tác với data từ frontend lên backend thì bị lỗi Access-Control-Allow-Origin
        ==> Để fix lỗi này cần setup proxy cho frontend tại reactbasic/package.json (line 45) */
  var date = new Date();
  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  pool.query('INSERT INTO public."userLogin"('
              +'useradmin, userdatecreate, username, useremail, userpassword, isdelete)'  /**Câu lệnh query */
              +'VALUES ($1, $2, $3, $4, $5, $6)'
              , [false,months[date.getMonth()]+" "+date.getDate()+" "+date.getFullYear()  /**Zá trị query */ 
              , req.body.username          
              , req.body.useremail
              , req.body.userpassword, false]   /**chú ý dấu [] */
              , (err, dataReceived) => {   /**Nếu lỗi -> in ra err, còn k thì trả về dataReceived */
      if(err) process.on('unhandledRejection', error => {
            pool.end(); });
      else
        res.send("đã lấy đc data phía backend nodejs")
  })
});

/**UPDATE*/
router.post('/updatePostgresql-demo2/:idCanUpdate',function(req,res,next){
  pool.query('UPDATE public."userLogin" '
              +'SET useremail=$1, username=$2 WHERE id=$3'     /**Câu lệnh query */    
              , [req.body.useremail                /**Zá trị query */ 
              ,  req.body.username, req.params.idCanUpdate]               /**chú ý dấu [] */
              , (err, dataReceived) => {   /**Nếu lỗi -> in ra err, còn k thì trả về dataReceived */
      if(err) process.on('unhandledRejection', error => {
          pool.end(); });
      else res.send("update success phía backend nodejs")
  })
});


/**DELETE */
router.get('/deletePostgresql-demo2/:idCanRemove', function(req, res, next) {
  /**Cách 1: Dùng Delete */
  // pool.query('DELETE FROM public."userLogin" WHERE id=$1',[req.params.idCanRemove],(err,dataReceived) =>{
  /**Cách 2: Để cột isdelete=true */
  pool.query('UPDATE public."userLogin" SET isdelete=$1 WHERE id=$2',[true,req.params.idCanRemove],(err,dataReceived)=>{
      if(err) process.on('unhandledRejection', error => {
          pool.end();
      });
      else res.send("delete success")
  })
});


module.exports = router;
