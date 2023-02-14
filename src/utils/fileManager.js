import axios from "axios";

const fileManager ={
    path:process.env.BASE_URL + "uploadFile/",

    getAllTopic:function (){
        return [
            "HTML专题",
            "JavaScript专题",
            "Css专题",
            "Vue专题",
            "docker学习",
        ]
    },
    getTopicFiles:function (topic){
        switch (topic){
            case 0:return ["HTML属性","HTML标签"]
            case 1:return ["JavaScript函数","JavaScript属性"]
            case 2:return ["Css语法","Css选择器"]
            case 3:return ["vue组件属性和方法"]
            case 4:return ["docker学习"]
        }
    },
    getPostContent:function (topicName , fileName) {
        let url = this.path + topicName + '/' + fileName + ".md"
        return new Promise((resolve, reject)=>{
            axios.get(url).then((resp)=>{
                resolve(resp)
            })
        })
    }
}

export default fileManager