<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" label="序号" width="80">
				</el-table-column>
				<el-table-column prop="number" label="学\工号" width="150" sortable>
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="password" label="密码" width="150" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="身份" width="100" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="mail" label="邮箱" min-width="150" sortable>
				</el-table-column>
			</el-table>

				<!--<el-button type="primary" v-on:click="yy()">查询11111</el-button>-->

		</template>

	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				users: [
				]
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function () {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				//NProgress.start();
				getUserList(para).then((res) => {
					this.users = res.data.users;
					this.loading = false;
					//NProgress.done();
				});
			}
		},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped>

</style>
