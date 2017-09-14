<template>
  <div class="share">
    <div class="share-body">
      <div class="share-header">分享文章到 ITlearn</div>
      <div class="share-form">
        <div class="form-left">
          <el-form ref="form" :model="form">
            <el-form-item>
              <el-input v-model="form.URL" placeholder="分享网址"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.title" placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="textarea" rows="5" v-model="form.desc" placeholder="描述（120字以内）"></el-input>
            </el-form-item>

            <el-form-item label="分类">
              <el-radio-group v-model="form.classify">
                <el-radio label="前端"></el-radio>
                <el-radio label="后端"></el-radio>
                <el-radio label="算法"></el-radio>
                <el-radio label="设计"></el-radio>
                <el-radio label="Android"></el-radio>
                <el-radio label="ios"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-tag :key="tag" v-for="tag in dynamicTags" :closable="true" :close-transition="false" @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input class="input-new-tag" placeholder="标签（可选填）" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="medi" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
            </el-input>

            <el-form-item>
              <el-button type="primary" @click="onSubmit" class="sharebutton">立即分享</el-button>
              <!--<el-button>取消</el-button>-->
            </el-form-item>
          </el-form>
        </div>
        <div class="form-right-img">
          <!--<el-upload ref="upload" slot="trigger" class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple :auto-upload="false" list-type="picture">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>-->
          <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" :drag="true">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或
              <em>点击上传</em>
            </div>

            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'share',
  data() {
    return {
      form: {
        URL: '',
        title: '',
        classify: '',
        desc: '',
        tags: ''
      },
      dynamicTags: [],
      inputVisible: true,
      inputValue: ''
    }
  },
  methods: {

    onSubmit() {
      console.log('submit!');

      this.$refs.upload.submit();//图片上传

    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {

      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      // console.log(this.inputValue);
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      // this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sharebutton {
  margin-top: 30px;
}


.share-form {
  /*width: 50%;*/
  /*margin: auto;*/
  margin-top: 50px;
}

.form-left {
  float: left;
  margin: auto;
  width: 55%;
  /*border: 1px solid green;*/
}

.form-right-img {
  display: inline-block;
  float: left !important;
  margin-left: 20px;
  width: 40%;

  /*border: 1px solid green;*/
}


.share-header {
  margin-top: 25px;
  font-size: 30px;
  color: #2D2D2f;
  font-weight: bold;
}

.share-body {
  margin: auto;
  width: 60%;
  background: #f4f5f5;
  height: auto;

  height: 500px;
  /*border: 1px solid green;*/
}
</style>
