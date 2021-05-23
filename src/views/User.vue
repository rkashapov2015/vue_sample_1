<template>
    <div class="page-users">
        <table>
            <tbody>
                <tr>
                    <td width="50">#</td>
                    <td>{{ recordUser ? recordUser.id : '' }}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td width="160">
                        <div v-if="!isWantedChangeName">
                            <span class="text-left">{{ recordUser ? recordUser.name : ''}}</span>
                        </div>
                        <div v-else>
                            <input v-model="userName">
                        </div>
                    </td>
                    <td>
                        <div v-if="!isWantedChangeName">
                            <button v-on:click="changeEdit">edit</button>
                        </div>
                        <div v-else>
                            <button v-on:click="changeSubmit">submit</button>
                            <button v-on:click="changeCancel">cancel</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import { store } from '@/store';

export default {
    name: 'User',
    beforeRouteEnter (to, from, next) {
        store.commit('setUserId', to.params.id);
        
        next();
    },
    beforeRouteUpdate (to, from, next) {
        store.commit('setUserId', to.params.id);        
        
        next();
    },
    data() {
        return {
            userName: null,
            recordUser: null,
            isWantedChangeName: false,
        };
    },
    computed: {
        ...mapState([
            'userId',
        ]),
    },
    methods: {
        changeEdit() {
            this.isWantedChangeName = true;
            
        },
        changeSubmit() {
            store.commit('users/setRecordById', {id: this.recordUser.id, name: this.userName});
            this.userName = null;
            this.changeCancel();
            this.updateRecordUser();
        },
        changeCancel() {
            this.isWantedChangeName = false;
            this.updateUsername();
        },
        updateRecordUser() {
            this.recordUser = store.getters['users/getRecordById'](Number(this.userId));
            this.updateUsername();
        },
        updateUsername() {
            this.userName = this.recordUser.name;
        }
    },
    watch: {
        userId: {
            immediate: true,
            handler() {
                this.updateRecordUser();
            }
        },
    }
}
</script>