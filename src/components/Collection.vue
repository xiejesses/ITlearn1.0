<template>
  <div class="collection">
    <div class="collection-body">
      <el-row :gutter="60">
        <el-col :span="12" v-for="(collectionItem, index) in collectionItems" v-bind:key="collectionItem.id" style="margin-top: 30px">
          <router-link :to="{name:'mycollection', params: {cName: collectionItem.collectionTitle}}">
          <div class="grid-content bg-purple-light" @click="viewMyCollection(index)">
            <div class="collectionName">{{collectionItem.collectionTitle}}</div>
            <div class="footer">
              <span class="num">{{collectionItem.collectionNum}} 篇文章</span>
              <!--<el-dropdown>
                <span class="el-dropdown-link">
                  
                  <i class="el-icon-fa el-icon-fa-ellipsis-h" aria-hidden="true"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>-->

            </div>
          </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collection',
  data() {
    return {
      collectionItems: [
        {
          id: 1,
          collectionTitle: 'Vue',
          collectionNum: 2
        },
        {
          id: 2,
          collectionTitle: 'Node',
          collectionNum: 23
        },
        {
          id: 3,
          collectionTitle: '前端',
          collectionNum: 12
        },
        {
          id: 4,
          collectionTitle: '算法设计',
          collectionNum: 8
        }
      ]
    }
  },
  methods: {
    viewMyCollection(index) {
      console.log(index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.footer {
  margin-top: 25px;
  margin-left: 10px;
  color: #666;
}
/*.hover:hover {
  color:red;
}*/
.num {
  font-size: 15px;
}

.collectionName {
  padding: 10px;
  color: #666;
}

.el-row {
  margin-bottom: 50px;
  /*&:last-child {
      margin-bottom: 0;
    }*/
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #fff;
}

.grid-content {
  border-radius: 4px;
  min-height: 100px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
