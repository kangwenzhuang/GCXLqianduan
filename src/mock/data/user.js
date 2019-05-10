import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    number:Mock.Random.zip(),
    name: Mock.Random.cname(),
    password:Mock.Random.string(5,8),
    sex: Mock.Random.integer(0, 1),
    mail:Mock.Random.email()
  }));
}

const Classes = []

for (let i = 0; i < 10; i++) {
  Classes.push(Mock.mock({
    id: Mock.Random.guid(),
    classid:Mock.Random.zip(),
    classname:'课程名',
    name: Mock.Random.cname(),
    gonghao:Mock.Random.zip(),
    xuezhou:Mock.Random.integer(10,20),
    classtime:Mock.Random.integer(20,40),
    adr:'上课地点',
    xueyuan:'学院'
  }));
}

export { LoginUsers, Users , Classes };
