const router = require('express').Router();


router.get("/admin", (req,res)=>{
    
res.render('admin',{users: "Phil", role:"administrator"})
});

router.get("/user", (req,res)=>{

});

module.exports = router