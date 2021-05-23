<template>
    <div class="page-users">
        Users
        <table class="table-users">
            <thead>
                <tr>
                    <th width="30px">#</th>
                    <th width="200px">Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td width="40px">{{ user.id }}</td>
                    <td width="200px">
                        <router-link :to="{ name: 'User', params: {id: user.id} }">{{ user.name }}</router-link>
                    </td>
                    <td><a v-on:click="deleteUser(user.id)">x</a></td>
                </tr>
            </tbody>
        </table>
        <div class="text-left">
            <button v-on:click="showFormAddUser">+</button>
        </div>
        <div class="modal" v-if="isShowedFormNewUser">
            <div>
                Name: <input v-model="addForm.name">
            </div>
            <button v-on:click="submitFormAddUser">Add User</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { store } from '@/store';

export default {
    name: 'Users',
    data() {
        return {
            isShowedFormNewUser: false,
            addForm: {
                name: null,
            },
        };
    },
    methods: {
        showFormAddUser() {
            this.isShowedFormNewUser = true;
        },
        submitFormAddUser() {
            store.commit('users/addRecord', {name: this.addForm.name});
            this.isShowedFormNewUser = false;
            this.addForm.name = null;
        },
        deleteUser(userId) {
            store.commit('users/removeRecordById', userId);
        },
    },
    computed: {
        ...mapGetters('users', {
            users: 'getRecords',
        })
    }
}
</script>

<style lang="scss">
table.table-users {
    border: 1px solid #ccc;
    & thead tr th {
      border: 1px solid #ccc;
    }
    & tbody tr td {
      border: 1px solid #ccc;
    }
    & tbody>tr>td>a {
      padding: 5px 0px;
      display: inline-block;
      width: 100%;
    }
    & tbody>tr>td>a:hover {
      background-color: #cacaca;
    }
}
</style>