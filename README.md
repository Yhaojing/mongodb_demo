# mongodb_demo
使用nodejs 利用mongoose操作、mongodb的范例，其中包括数据库的链接，以及简单的增删改查


知识点介绍：

schema 一种以文件形式存储的数据库模型骨架，无法直接通往数据库端，不具备数据库操作的能力，仅仅是数据库模型在程序片段的一种表现，数据属性模型。
如何定义schema
model是由schema构造生成的模型， 除了schema定义数据库骨架外，还具有数据库操作的行为，类似于管理数据库属性和行为的类。
entity 是由model创建的实体也可以操作数据库;就是先创建一个实例进行save()就是插入操作=== model.create();
1. 查询：find查询返回符合条件一个、多个或者空数组文档结果。
2. 保存：model调用create方法，entity调用的save方法。
3. 更新：obj.update(查询条件,更新对象,callback)，根据条件更新相关数据。
4. 删除：obj.remove(查询条件,callback)，根据条件删除相关数据。
1. find过滤查询 ：find查询时我们可以过滤返回结果所显示的属性个数。
2. findOne查询 ：只返回符合条件的首条文档数据。
3. findById查询：根据文档_id来查询文档。
1. $gt(>),$lt(<),$lte(<=),$gte(>=)操作符：针对Number类型的查询具体超强的排除性。
2. $ne(!=)操作符：相当于不等于、不包含，查询时可根据单个或多个属性进行结果排除。
3. $in操作符：和$ne操作符用法相同，但意义相反。
4. $or操作符：可查询多个条件，只要满足其中一个就可返回结果值。
5. $exists操作符：主要用于判断某些属性是否存在。
1. limit函数：限制返回结果的数量。
2. skip函数：略过指定的返回结果数量。
3. sort函数：对返回结果进行有效排序。(-1逆序 1正序)
方法：
 schema.method(类似于Java中类的方法之后的model和entity可以调用)；
 schema.static()



