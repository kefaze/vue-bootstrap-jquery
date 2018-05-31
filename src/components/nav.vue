<template>
    <div>
        <!-- 一级菜单导航 -->
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button> -->
                    <a class="navbar-brand" href="#">onenet</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-left">
                        <li v-for="(names,index) in menuList">
                            <a href="#">{{menuList.name}}</a>
                        </li>
                        <!-- <li>
                            <a href="#">Settings</a>
                        </li>
                        <li>
                            <a href="#">Profile</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li> -->
                    </ul>
                    <!-- <form class="navbar-form navbar-right">
                        <input type="text" class="form-control" placeholder="Search...">
                    </form> -->
                </div>
            </div>
        </nav>
    </div>
</template>  
  
<script>
export default {
    name: "",
    data() {
        return {
            menuList: {}
        };
    },
    methods: {
        fetchMenus() {
            var _this = this;
            this.$http
                .get("../src/data/menus.data")
                .then(function(res) {
                    console.log(res);
                    _this.menuList = res;
                })
                .catch(function(err) {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.fetchMenus()
    },
};
</script>  
  
<!-- Add "scoped" attribute to limit CSS to this component only -->  
<style scoped>
</style>  