<template>
    <div class="setting">
        <div class="profile-setting">
            <h3>个人设置</h3>
            <ul>
                <li class="item">
                    <span class="title">头像</span>
                    <div class="userAvatar">
                        <v-gravatar :email="email" size='60' />
                    </div>
                    <!--<input class="userinput" placeholder="请填写你的昵称">-->
                    <el-upload class="upload" action="https://jsonplaceholder.typicode.com/posts/">
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5M</div>
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>

                    <!--<el-input v-model="input" placeholder="请输入内容"></el-input>-->
                </li>
                <li class="item">
                    <span class="title">昵称</span>
                    <input id="input1" v-model="userName" @click="inputfoucus('input1')" placeholder="请填写你的昵称">
                    <a href="javascript:void(0)" v-if="input1" class="edit-btn" @click="inputfoucus('input1')">修改</a>
                    <div v-else class="save-edit">
                        <a href="javascript:void(0)">保存</a>
                        <a href="javascript:void(0)" @click="cancelEdit('input1')">取消</a>
                    </div>
                </li>
                <li class="item">
                    <span class="title">个人介绍</span>
                    <input id="input2" v-model="selfIntroduce" @click="inputfoucus('input2')" placeholder="完善个人介绍，方便大家了解你">
                    <a href="javascript:void(0)" v-if="input2" class="edit-btn" @click="inputfoucus('input2')">修改</a>
                    <div v-else class="save-edit">
                        <a href="javascript:void(0)">保存</a>
                        <a href="javascript:void(0)" @click="cancelEdit('input2')">取消</a>
                    </div>
                </li>
                <li class="item">
                    <span class="title" style="width:80px">个人主页</span>
                    <input id="input3" v-model="personalPage" @click="inputfoucus('input3')" placeholder="请填写你的个人主页">
                    <a href="javascript:void(0)" v-if="input3" class="edit-btn" @click="inputfoucus('input3')">修改</a>
                    <div v-else class="save-edit">
                        <a href="javascript:void(0)">保存</a>
                        <a href="javascript:void(0)" @click="cancelEdit('input3')">取消</a>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'setting',

    data() {
        return {
            email:'835614574@qq.com',
            userName: '',
            selfIntroduce: '',
            personalPage: '',
            input0: true,
            input1: true,
            input2: true,
            input3: true,

        }
    },
    methods: {
        changefocusStatus() {
            this.focusStatus = false;
        },
        inputfoucus(inputNum) {
            switch (inputNum) {
                case 'input0':
                    document.getElementById('input0').focus();
                    this.input0 = false;
                    break;
                case 'input1':
                    document.getElementById('input1').focus();
                    this.input1 = false;
                    break;
                case 'input2':
                    document.getElementById('input2').focus();
                    this.input2 = false;
                    break;
                case 'input3':
                    document.getElementById('input3').focus();
                    this.input3 = false;
                    break;

            }
        },
        cancelEdit(inputNum) {
            switch (inputNum) {
                case 'input0':
                    document.getElementById('input0').blur();

                    break;
                case 'input1':
                    document.getElementById('input1').blur();
                    this.userName = '';
                    this.input1 = true;
                    break;
                case 'input2':
                    document.getElementById('input2').blur();
                    this.selfIntroduce = '';
                    this.input2 = true;
                    break;
                case 'input3':
                    document.getElementById('input3').blur();
                    this.personalPage = '';
                    this.input3 = true;
                    break;

            }
        }

    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    padding: 0;
}

li {
    list-style: none;
    /*margin-bottom: 20px;*/
    /*margin-top: 10px;*/
}

a {
    text-decoration: none;
    color: #03B964;
    font-size: 15px;
}

input {
    border: 0;
    width: 250px;
    outline: none;
    color: #909090;
}

::placeholder {
    color: #c7c2c2;
}
.userAvatar {
    display: inline;
    float: left;
    margin-right: 15px;
}
.edit-btn {
    float: right;
}

.save-edit {
    float: right;
}

.userinput {
    /*margin-left: 50px;*/
}

.item {
    /*height:75px ;*/
    padding: 30px 0;
    border-bottom: 1px solid #dadee9;
    /*border-bottom: 1px solid gray;*/
}

.title {
    display: block;
    float: left;
    width: 150px !important;
    /*padding-top: 10px;*/
    font-size: 15px;
    /*color: red;*/
}

.profile-setting {
    padding: 20px 40px 5px 40px;
}

.setting {
    background: #fff;
    margin-top: 15px;
}
</style>
