const cassandra = require('cassandra-driver');

// 连接到集群并选择 keyspace
const contactPoints = ['127.0.0.1']; // 替换成你的 Cassandra 主机地址
const keyspace = 'mykeyspace'; // 替换成你的 keyspace 名称
const client = new cassandra.Client({ contactPoints, localDataCenter: 'datacenter1' });
client.connect()
    .then(() => {
        console.log(`Connected to cluster and keyspace ${keyspace}`);
        // 在这里执行 Cassandra 查询
    })
    .catch(error => console.error(error));





client.execute('SELECT * FROM mykeyspace.users')
    .then(result => {
        console.log(result.rows);
    })
    .catch(error => console.error(error));
// const cassandra = require('cassandra-driver');
//
// // 创建Cassandra集群对象
// const cluster = new cassandra.Cluster({
//     contactPoints: ['host1', 'host2'], // 替换为你的Cassandra集群中的主机名或IP地址
//     localDataCenter: 'datacenter1' // 替换为你的本地数据中心的名称
// });
//
// // 通过集群对象获取会话对象
// const session = cluster.connect((err) => {
//     if (err) {
//         console.log('连接到Cassandra集群时发生错误：', err);
//     } else {
//         console.log('已成功连接到Cassandra集群');
//     }
// });
//
// // 使用会话对象执行CQL语句
// session.execute('SELECT * FROM my_keyspace.my_table', (err, result) => {
//     if (err) {
//         console.log('查询数据时发生错误：', err);
//     } else {
//         console.log('查询结果：', result.rows);
//     }
// });




// const cassandra = require('cassandra-driver');
//
// const contactPoints = ['127.0.0.1']; // 替换成你的 Cassandra 主机地址
// const localDataCenter = 'datacenter1'; // 替换成你的 Cassandra 数据中心名称
//
// const cluster = new cassandra.Client({
//     contactPoints: contactPoints,
//     localDataCenter: localDataCenter
// });
//
// cluster.connect(function (err) {
//     if (err) {
//         console.log('连接到 Cassandra 集群时出错：', err);
//     } else {
//         console.log('已成功连接到 Cassandra 集群');
//     }
// });
//
// // 关闭集群连接
// cluster.shutdown();