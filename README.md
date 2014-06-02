Node.js Lesson Project
==========================

#1 Node.js tutorial
http://www.nodebeginner.org/index-kr.html
##1.1 npm install command tip's

package.json
```json
{
    "name" : "JS Playground Hello World",
    "version" : "0.0.1"
}
```
npm install express --save

"--save" option이 추가 되면 의존성을 package.json 에 자동으로 추가한다.  
```json
{
    "name": "JS Playground Hello World",
    "version": "0.0.1",
    "dependencies": {
        "express": "~2.5.9"
    }
}
```

#2 의존성
[node-formidable](https://github.com/felixge/node-formidable)  
Installation : npm install formidable


#3 Node.js Resources

[UncaughtException Hadling](http://shapeshed.com/uncaught-exceptions-in-node/)  

UncaughtException 이 발생 할 경우 Twitter client를 통해 트윗을 날리는 것도 좋은 방법이다.  
[Node.twitter](https://github.com/AvianFlu/ntwitter)


# 4. 환경
서버 재실행시 오류 나는 경우  
NodeMon을 설치하잣!  
npm install nodemon -g  
만약 권한 에러 나면  
sudo chown -R $USER /usr/local  

usage : nodemon name  
        nodemon name localhost 8000  


# 5. Testing
## 5.1. BDD
*[여름으로 가는 문](http://blog.doortts.com/220)  
*[VOWS 한글](http://doortts.com/vows/)


