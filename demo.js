var upload = new Vue({
    el:"#upload",
    data:{
        litimg:""
    },
    methods:{
        // 选择文件
        ChooseFile:function(event){
            var _this=this;
            // 实例化FileReader
            var fr=new FileReader()
            var file=event.target.files[0];
            // 将文件压缩为base64格式
            fr.readAsDataURL(file); 
            // 读取文件成功后执行
            fr.onload=function(){
               _this.setLitimg(fr.result);
            }
        },
        // 设置图片压缩和缩略图
        setLitimg:function(v){
            var _this=this;
            // 创建一个canvas标签
            var canvas=document.createElement("canvas");
            // 设置canvas为2d模式
            var c=canvas.getContext("2d"); 
            var img=new Image();
            img.src=v;
            // 图片加载完成
            img.onload=function(){
                canvas.width=img.width;
                canvas.height=img.height;
                c.drawImage(img,0,0,img.width,img.height);
                _this.litimg=canvas.toDataURL("image/jpeg",.5);
            }
        }
    },
    created:function(){
       
    }
})