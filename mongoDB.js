/**
 * Created by haojing on 15/9/25.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost:27017/test');

db.on('error', function (error) {
    console.log('连接数据库失败'+ error);
})
db.on('open', function () {
    console.log('----数据库连接成功----');
})

var TestSchema = new mongoose.Schema({
    name: {type: String},
    pwd: {type: String}
});

var TestModel = db.model('test1', TestSchema);

var TestEntity = new TestModel ({
    name: 'test1',
    pwd: '123456'
})

//插入操作的两种方法
TestModel.create({name:'test2', pwd: '123'}, function(err, doc) {
    console.log(doc);
})

//先初始化一个model实例再保存实例即可
TestEntity.save(function(err, doc) {
    console.log(doc);
})
//查询的几种操作

//find({查询条件},{显示的列可为空或者null},cb)
//还有相关的高级查询比如排序大于小于之类的

TestModel.find({}, function (error, docs) {
    if(error) {
        console.log(error);
    } else {
        console.log(docs);
    }
})

TestModel.find({}, {name : 1, _id:0}, function (err, docs) {
    console.log(docs);
})
//删除操作

TestModel.remove({}, function (error) {
    if(error) {
        console.log('delete false');
    } else {
        console.log('delete success');
    }
})
////obj.update(查询条件,更新对象,callback);
TestModel.update({name: 'test1'}, {$set: {pwd: '22222'}}, function (error) {
    if(error) {
        console.log('update false');
    } else {
        console.log('update success');
    }
})