<template>
    <div>
        <h2 class="sub-header">修改英雄</h2>
        <form>
            <div class="form-group">
                <label for="txtName">英雄名称</label>
                <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称" />
            </div>
            <div class="form-group">
                <label for="txtGender">英雄性别</label>
                <input v-model="formData.gender" type="text" class="form-control" id="txtGender" placeholder="英雄性别" />
            </div>
            <button @click="handleEdit" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    // import axios from 'axios';
    export default {
        props: ['id'],
        data() {
            return {
                formData: {
                    name: '',
                    gender: ''
                }
            }
        },
        mounted() {
            this.loadData();
        },
        methods: {
            loadData() {
                this.$http
                    .get(`heroes/${this.id}`)
                    .then((response) => {
                        this.formData = response.data;
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            },
            handleEdit() {
                this.$http
                    .put(`heroes/${this.id}`, this.formData)
                    .then((response) => {
                        if (response.status === 200) {
                            this.$router.push('/heroes');
                        } else {
                            alert('修改失败');
                        }
                    }).catch((err) => {
                        console.log(err)
                    });
            }
        }
    };

</script>

<style>

</style>
